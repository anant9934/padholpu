# Zero-Cost Academic Intelligence — Implementation Notes

## Current release scope

This release extends the existing React/Vite, Express, Drizzle and PostgreSQL architecture. It adds no paid AI provider, embedding API, hosted vector database, or local model dependency.

### Implemented in this branch

1. **Grounded academic retrieval**
   - The academic explanation route now uses deterministic content retrieval.
   - AEE103 queries are matched against structured unit notes and returned with subject/unit/section provenance.
   - Other subjects can return matched registered unit/topic taxonomy, with an explicit notice when explanatory notes are not indexed.
   - No Gemini or OpenAI request is made by this path, even when provider keys exist in environment variables.
   - Unsupported topics return a no-evidence response rather than generic filler.

2. **Safer study planning**
   - Plans validate all selected subject codes and require registered unit mappings.
   - No generic five-unit placeholder schedule is generated.
   - Unit tasks are distributed across calendar days before the exam date.
   - Plan and task rows are created within a transaction.
   - Daily study time is range-validated.
   - Existing readiness recommendations remain the source of weak-topic guidance; this schedule does not yet reorder units using explicit prerequisite edges.

3. **Multidisciplinary onboarding**
   - A student with no course context is directed to programme discovery, not a hardcoded CSE111 diagnostic.
   - The CSE fallback in the general next-best-action engine is removed.

4. **Academic metadata accuracy**
   - AEE103 CO1–CO5 are aligned to the supplied course-outcome text.
   - Unit V uses the official syllabus title “Extension Administration”; teaching methods remain in its unit content.
   - The supplied AEE103 syllabus does not state assessment weightages, so the UI no longer invents a 20/20/40/20 distribution.
   - Subject overview question totals and per-unit inventories are derived from persisted records.

5. **Learning progress semantics**
   - The explicit “Mark Unit as Completed” action records UNIT_COMPLETED.
   - The operation checks for an existing completion event to avoid repeated inserts.
   - Historical RESOURCE_OPENED records remain accepted when reading legacy progress.
   - The UI now surfaces failed completion saves.

6. **Safe AEE103 bootstrap seeding**
   - The bootstrap seeder does not delete existing topics, questions, subjective answers, flashcards, or decks.
   - It returns without modifying an already-populated learning system, preserving question IDs and student review/draft history.
   - It no longer mislabels the syllabus PDF as a second lecture-notes PDF.
   - It requires a real user before creating creator-owned content.

7. **Admin content quality audit**
   - Read-only audit checks for unit/topic integrity, MCQ options and answer keys, explanations, duplicate prompts, subjective model answers and marks, flashcard sides/duplicates, and resource metadata.
   - Findings are visible in the Admin Dashboard under Academic Quality.
   - Endpoint: GET /api/ecosystem/admin/academic-quality.
   - Restricted to ADMIN and SUPER_ADMIN roles.
   - Scans at most 3,000 rows per content type and reports if a limit is reached.
   - Findings are not auto-applied; academic staff must review and correct content.

8. **Truthful platform metrics**
   - Public user and quiz-attempt counts no longer add fixed synthetic offsets.
   - Course diagnostic unit/resource counts no longer substitute invented defaults.

## Existing capabilities reused

- PostgreSQL already stores programme, subject, unit and topic relations.
- The existing exam-readiness/next-best-action engine is reused for recommendations.
- Existing SM-2 flashcard review and exam question infrastructure remain in place.
- Existing PostgreSQL academic search remains in place; this branch does not add a separate search provider.

## Explicitly not implemented yet

- tsvector/GIN full-text search with dedicated indexes.
- Persisted topic prerequisite/related-topic edge management.
- Dependency-aware topological study-plan scheduling.
- Topic-level mastery models and adaptive time allocation.
- A fully orchestrated agent framework; existing typed services remain modular but are not autonomous agents.
- Local Ollama adapter.
- Automated academic fact verification or automatic correction of findings.
- A content-quality scan with pagination beyond the 3,000-row per-type bound.

These are future phases. They should not be represented as shipped features until code, tests and production verification exist.

## Cost boundary

The new deterministic tutor, scheduler, quality audit and recommendations require no paid AI inference API calls. They do use existing application/database infrastructure, which remains subject to Neon, Render, Vercel, Redis and Cloudinary plan limits and any applicable provider billing. This implementation does not promise unlimited free infrastructure.