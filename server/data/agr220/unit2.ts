import { UnitContent } from "./types";

export const unit2Content: UnitContent = {
  "unitNumber": 2,
  "title": "Digital Tools for Agricultural Learning",
  "shortDescription": "LMS architectures (Moodle, Canvas), agricultural repositories (KrishiKosh, CeRA, AGRIS), scholarly search (Google Scholar, CAB Abstracts), UGC plagiarism regulations 2018, digital note-taking (Cornell, Notion, Obsidian), and Zotero reference management.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
    "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
    "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
    "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
    "UGC regulations on academic integrity (2018) and similarity index thresholds",
    "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
    "Reference management and citation software: Zotero, Mendeley, and EndNote"
  ],
  "notes": {
    "learningObjectives": [
      "Analyze the architecture, tools, and SCORM/LTI standards of Learning Management Systems (Moodle, Canvas, Google Classroom).",
      "Navigate and retrieve agricultural scientific literature from KrishiKosh, CeRA, AGRIS, and ICAR e-Course portals.",
      "Master advanced boolean search strategies across Google Scholar, Scopus, Web of Science, and CAB Abstracts.",
      "Uphold academic integrity and adhere strictly to the statutory UGC (Promotion of Academic Integrity) Regulations 2018.",
      "Interpret anti-plagiarism similarity reports from Turnitin and Ouriginal (Urkund), distinguishing benign matches from true plagiarism.",
      "Implement scientific digital note-taking methodologies (Cornell method, mind mapping, and Notion/Obsidian PKM).",
      "Utilize reference management tools (Zotero, Mendeley, EndNote) for automated in-text citation and bibliography compilation."
    ],
    "sections": [
      {
        "id": "agr220-u2-sec1",
        "heading": "1. Learning Management Systems and E-Learning Architectures",
        "content": "A Learning Management System (LMS) is the central infrastructure delivering digital education, tracking student progress, hosting resources, and executing evaluations.\n\n1. Major Educational Platforms:\n- Moodle (Modular Object-Oriented Dynamic Learning Environment): Open-source, flexible, self-hosted platform supporting over 50 activity types, granular role-based permissions, and advanced grade calculation engines.\n- Canvas LMS: Cloud-native Software-as-a-Service (SaaS) platform built on AWS, known for its SpeedGrader tool and modern mobile responsiveness.\n- Google Classroom: Lightweight document-sharing and workflow portal integrated into Google Workspace for Education.\n\n2. Technical Interoperability Standards:\n- SCORM (Sharable Content Object Reference Model): International packaging standard that enables self-contained interactive learning packages to communicate quiz scores and completion tracking across any LMS.\n- LTI (Learning Tools Interoperability): 1EdTech standard enabling plug-and-play integration of third-party tools (virtual labs, simulators) into an LMS with Single Sign-On (SSO) and automated grade passback."
      },
      {
        "id": "agr220-u2-sec2",
        "heading": "2. Digital Libraries and Repositories in Agriculture",
        "content": "Agricultural education in India is supported by specialized institutional digital consortia:\n\n1. KrishiKosh (National Agricultural Research Repository):\nManaged by ICAR-IASRI using DSpace. Hosts over 160,000 digitized full-text Ph.D. and M.Sc. theses from State Agricultural Universities and ICAR institutes, alongside rare institutional monographs, technical bulletins, and historical books. Completely Open Access.\n\n2. CeRA (Consortium for e-Resources in Agriculture):\nEstablished by ICAR to provide 24/7 campus-wide intranet access to more than 4,000 international peer-reviewed journals (Springer, Elsevier, Wiley, Annual Reviews) for agricultural scientists and students across India.\n\n3. AGRIS (International System for Agricultural Science and Technology):\nMaintained by the Food and Agriculture Organization (FAO) of the United Nations. Indexes over 14 million multilingual agricultural bibliographic records and grey literature globally.\n\n4. ICAR e-Courses Portal:\nDelivers standardized, modular, peer-reviewed undergraduate textbooks and lecture notes covering all 5th Deans' Committee B.Sc. (Hons.) Agriculture courses."
      },
      {
        "id": "agr220-u2-sec3",
        "heading": "3. Scholarly Databases, Indexing, and Search Formulation",
        "content": "1. Major Bibliographic Databases:\n- CAB Abstracts: The definitive global database for agriculture, forestry, and allied biosciences, indexing research across 120+ nations.\n- Scopus: Elsevier's curated multidisciplinary abstract and citation database indexing over 25,000 peer-reviewed journals.\n- Web of Science: Clarivate's highly selective core collection providing deep historical citation tracking since 1900.\n- Google Scholar: Comprehensive web search engine crawling scholarly repositories and open journals.\n\n2. Advanced Boolean Search Strategies:\n- Boolean Operators: AND (narrows search), OR (broadens with synonyms), NOT / - (excludes terms).\n- Phrase Matching: Using quotation marks (e.g., \"integrated pest management\") searches for the exact contiguous phrase.\n- Truncation Wildcard (*): Appending an asterisk (e.g., bioherb*) captures morphological variants (bioherbicide, bioherbicidal).\n- Citation Metrics: h-index (Jorge Hirsch: h papers with >= h citations); Journal Impact Factor (JIF: 2-year citation ratio)."
      },
      {
        "id": "agr220-u2-sec4",
        "heading": "4. Academic Integrity, Plagiarism, and UGC Regulations 2018",
        "content": "Academic integrity represents adherence to ethical scholarship and honest attribution.\n\n1. Plagiarism Typologies:\n- Verbatim Copying: Word-for-word duplication without quotation marks or citation.\n- Mosaic Plagiarism (Patchwriting): Stitching together phrases from multiple sources with minor synonym changes.\n- Paraphrasing Plagiarism: Re-writing ideas in one's own words without source credit.\n- Self-Plagiarism: Re-using one's own published text/data without attribution.\n\n2. UGC Regulations 2018 Statutory Framework:\nMandates institutional anti-plagiarism screening using tools like Ouriginal (Urkund) or Turnitin. Excludes quotes with attribution, bibliography, and prefaces. Defines four similarity tiers and penalties:\n- Level 0 (up to 10%): No penalty; acceptable academic tolerance.\n- Level 1 (10% to 40%): Student must submit a revised script within 6 months; faculty must withdraw published manuscript.\n- Level 2 (40% to 60%): Student debarred for 1 year; faculty denied 1 increment and banned from research supervision for 2 years.\n- Level 3 (>60%): Student degree registration cancelled; faculty denied 2 increments and banned from supervision for 3 years.\nEnforced through Departmental (DAIP) and Institutional (IAIP) Academic Integrity Panels."
      },
      {
        "id": "agr220-u2-sec5",
        "heading": "5. Digital Note-Taking and Reference Management Software",
        "content": "1. Scientific Note-Taking Systems:\n- Cornell Method: Page divided into Notes column (right), Cue column (left), and Summary (bottom). Applies the 5 'R's: Record, Reduce, Recite, Reflect, Review.\n- Mind Mapping: Non-linear radiant diagrams connecting concepts hierarchically.\n- Personal Knowledge Management (PKM): Notion (hierarchical relational databases using PARA: Projects, Areas, Resources, Archives) and Obsidian (local-first plain Markdown with bidirectional [[links]] and graph visualization).\n\n2. Reference Management Tools (Zotero, Mendeley, EndNote):\n- Automated Bibliographic Capture: One-click extraction of metadata, DOIs, and full-text PDFs using browser extensions (Zotero Connector).\n- Word Processor Integration: Inserting dynamic in-text citations and compiling alphabetical reference lists in MS Word/Google Docs.\n- Citation Style Switching: Instantaneous re-rendering across APA 7th, Harvard, Vancouver, and journal-specific CSL styles.\n- Data Protection: The 3-2-1 backup strategy (3 copies, 2 media, 1 offsite cloud) safeguarding digital libraries."
      }
    ],
    "keyTakeaways": [
      "Learning Management Systems (Moodle, Canvas) deliver digital courseware, automated gradebooks, and analytics via SCORM and LTI standards.",
      "KrishiKosh is India's premier open repository for agricultural theses; CeRA provides campus access to international journals; AGRIS indexes global FAO literature.",
      "Advanced literature searches require boolean logic (AND, OR, NOT), phrase quotation, and truncation (*) across Google Scholar, Scopus, and CAB Abstracts.",
      "UGC Regulations 2018 establish strict similarity tiers: Level 0 (<10%), Level 1 (10-40%), Level 2 (40-60%), and Level 3 (>60%), with severe penalties up to degree cancellation.",
      "Anti-plagiarism software (Turnitin, Ouriginal) detects surface textual similarity, requiring expert human review to distinguish benign technical matches from true plagiarism.",
      "The Cornell note-taking system (Record, Reduce, Recite, Reflect, Review) and PKM frameworks (PARA in Notion, Zettelkasten in Obsidian) structure study notes.",
      "Zotero automates metadata capture, in-text citations, and bibliography compilation across APA and Harvard styles, backed up via the 3-2-1 rule."
    ],
    "commonMisunderstandings": [
      "Misunderstanding: A 0% similarity score on Turnitin guarantees a paper has high academic quality. Fact: Software measures only textual similarity, not scientific accuracy or truth; an essay generated by AI can score 0% similarity while being scientifically invalid or plagiarized in concept.",
      "Misunderstanding: Paraphrasing someone else's research findings into your own words means you do not need to cite them. Fact: Ideas and intellectual findings belong to the original author; failing to cite the source constitutes paraphrasing plagiarism.",
      "Misunderstanding: KrishiKosh requires an expensive personal paid subscription. Fact: KrishiKosh is a completely open-access national repository accessible free of charge worldwide.",
      "Misunderstanding: Re-using text from your own undergraduate project report in your Master's thesis is completely acceptable without citation. Fact: Re-using prior submitted or published work without citation constitutes self-plagiarism."
    ],
    "summary": "Unit 2 delivers comprehensive academic instruction on digital tools, libraries, databases, research ethics, and personal knowledge management for agricultural scholars. It examines LMS platforms (Moodle, Canvas, Google Classroom) and interoperability standards (SCORM, LTI). Major agricultural information repositories\u2014KrishiKosh (ICAR theses), CeRA (consortium journals), AGRIS (FAO global literature), and the ICAR e-Courses portal\u2014are analyzed alongside commercial indexing databases (Scopus, CAB Abstracts, Google Scholar). Advanced boolean searching, phrase matching, truncation, and metrics (h-index, JIF) are demonstrated. The unit details academic integrity, defining verbatim, mosaic, and paraphrasing plagiarism, and explores the statutory UGC Regulations 2018 (similarity levels 0 to 3, exclusions, and penalties). Plagiarism detection tools (Turnitin, Ouriginal) and ethical AI writing dimensions are critically examined. Finally, effective digital note-taking (Cornell method, mind mapping, PARA in Notion, Zettelkasten in Obsidian) and reference management using Zotero (metadata capture, in-text citation, APA/Harvard styles, and 3-2-1 backup recovery) are thoroughly detailed."
  },
  "mcqs": [
    {
      "id": "AGR220-U2-MCQ01",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "difficulty": "Easy",
      "questionText": "What does the acronym 'LMS' stand for in digital educational technology?",
      "options": {
        "A": "Learning Management System",
        "B": "Lecture Monitoring Software",
        "C": "Library Maintenance Scheme",
        "D": "Laboratory Measuring Standard"
      },
      "correctOption": "A",
      "explanation": "An LMS (Learning Management System) is a software application for the administration, documentation, tracking, reporting, and delivery of educational courses and learning programs."
    },
    {
      "id": "AGR220-U2-MCQ02",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
      "difficulty": "Easy",
      "questionText": "What is 'KrishiKosh' in Indian agricultural education?",
      "options": {
        "A": "An institutional digital repository containing full-text Ph.D. and M.Sc. theses, research reports, and historical monographs from ICAR and State Agricultural Universities (SAUs)",
        "B": "A commercial mobile banking app for farmers",
        "C": "A seed storage warehouse in New Delhi",
        "D": "A tractor manufacturing company"
      },
      "correctOption": "A",
      "explanation": "KrishiKosh is the National Agricultural Research and Education System (NARES) open-access institutional repository, providing digital access to thousands of agricultural theses, books, and reports."
    },
    {
      "id": "AGR220-U2-MCQ03",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
      "difficulty": "Easy",
      "questionText": "What is 'CeRA' in the National Agricultural Research System of India?",
      "options": {
        "A": "Consortium for e-Resources in Agriculture, providing online access to international scientific journals for ICAR institutes and agricultural universities",
        "B": "Central Rural Bank of India",
        "C": "Certified Rice Academy",
        "D": "Crop Export Regulatory Authority"
      },
      "correctOption": "A",
      "explanation": "CeRA (Consortium for e-Resources in Agriculture) was established by ICAR under NAIP to facilitate 24/7 online access to thousands of top international peer-reviewed journals for agricultural researchers."
    },
    {
      "id": "AGR220-U2-MCQ04",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "difficulty": "Easy",
      "questionText": "Which of the following is an open-source, globally popular Learning Management System (LMS) widely customized by universities?",
      "options": {
        "A": "Moodle (Modular Object-Oriented Dynamic Learning Environment)",
        "B": "Microsoft Windows",
        "C": "Adobe Illustrator",
        "D": "Google Chrome"
      },
      "correctOption": "A",
      "explanation": "Moodle is a free, open-source PHP-based learning management system used worldwide by educational institutions for building blended and online courses."
    },
    {
      "id": "AGR220-U2-MCQ05",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "difficulty": "Easy",
      "questionText": "What is the primary function of reference management software like Zotero or Mendeley?",
      "options": {
        "A": "Collecting, organizing, annotating, and automatically formatting citations and bibliographies in academic research papers",
        "B": "Creating animated video games",
        "C": "Calculating financial interest on crop loans",
        "D": "Designing architectural blueprints for farm sheds"
      },
      "correctOption": "A",
      "explanation": "Reference managers enable students and researchers to capture bibliographic metadata from online databases, manage PDF libraries, and insert automated in-text citations and bibliographies in Word/Google Docs."
    },
    {
      "id": "AGR220-U2-MCQ06",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "difficulty": "Easy",
      "questionText": "What is 'plagiarism' in academic research and writing?",
      "options": {
        "A": "The practice of using someone else's words, ideas, data, or illustrations without proper attribution and presenting them as one's own original work",
        "B": "Translating a document into multiple languages",
        "C": "Reading ten research papers before writing a thesis",
        "D": "Conducting field research on plant diseases"
      },
      "correctOption": "A",
      "explanation": "Plagiarism is an academic integrity violation involving the uncredited appropriation or copying of another author's language, thoughts, or expressions and claiming them as one's own."
    },
    {
      "id": "AGR220-U2-MCQ07",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "difficulty": "Easy",
      "questionText": "In the classic Cornell Note-Taking System, into what three distinct sections is the paper page divided?",
      "options": {
        "A": "Cue/Recall column (left), Notes area (right), and Summary section (bottom)",
        "B": "Header, Body, and Footer",
        "C": "Title, Abstract, and References",
        "D": "Question, Answer, and Grade"
      },
      "correctOption": "A",
      "explanation": "The Cornell method splits the page into: a wide right-hand column for taking lecture notes, a narrow left-hand column for cue keywords/questions, and a bottom row for a 2-sentence summary."
    },
    {
      "id": "AGR220-U2-MCQ08",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
      "difficulty": "Easy",
      "questionText": "Which international organization maintains the AGRIS (International System for Agricultural Science and Technology) database?",
      "options": {
        "A": "Food and Agriculture Organization (FAO) of the United Nations",
        "B": "World Health Organization (WHO)",
        "C": "UNESCO",
        "D": "World Trade Organization (WTO)"
      },
      "correctOption": "A",
      "explanation": "AGRIS is maintained by the Food and Agriculture Organization (FAO) of the United Nations, indexing millions of multilingual agricultural bibliographic records worldwide."
    },
    {
      "id": "AGR220-U2-MCQ09",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "difficulty": "Easy",
      "questionText": "Which anti-plagiarism software is provided freely to all Indian universities by the Ministry of Education via INFLIBNET under the ShodhShuddhi programme?",
      "options": {
        "A": "Ouriginal (formerly Urkund)",
        "B": "Grammarly",
        "C": "ChatGPT",
        "D": "MS Paint"
      },
      "correctOption": "A",
      "explanation": "Under the ShodhShuddhi initiative, INFLIBNET Centre (UGC) provides access to Ouriginal (formerly Urkund) web-based plagiarism detection software to all central, state, and private universities in India."
    },
    {
      "id": "AGR220-U2-MCQ10",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Easy",
      "questionText": "What does 'DOI' stand for in electronic research papers and scholarly citations?",
      "options": {
        "A": "Digital Object Identifier",
        "B": "Date of Issuance",
        "C": "Document Output Index",
        "D": "Department of Agriculture Indicator"
      },
      "correctOption": "A",
      "explanation": "A DOI (Digital Object Identifier) is a permanent alphanumeric string assigned by the International DOI Foundation to uniquely identify and link an electronic document on the web."
    },
    {
      "id": "AGR220-U2-MCQ11",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds",
      "difficulty": "Easy",
      "questionText": "Under UGC Regulations (2018), what similarity index percentage represents 'Level 0' (acceptable tolerance) with no penalty for academic submissions?",
      "options": {
        "A": "Similarities up to 10%",
        "B": "Similarities up to 50%",
        "C": "Zero percent (0%) exactly",
        "D": "Similarities up to 90%"
      },
      "correctOption": "A",
      "explanation": "Under UGC (Promotion of Academic Integrity and Prevention of Plagiarism) Regulations 2018, Level 0 covers similarities up to 10%, which is considered acceptable without penalty."
    },
    {
      "id": "AGR220-U2-MCQ12",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "difficulty": "Easy",
      "questionText": "Which citation style is most commonly used in social science and agricultural economics research?",
      "options": {
        "A": "APA (American Psychological Association) Style",
        "B": "MLA (Modern Language Association) Style",
        "C": "IEEE Style",
        "D": "Chicago Notes Style"
      },
      "correctOption": "A",
      "explanation": "APA 7th edition (author-date format) is the predominant citation style in agricultural economics, extension, education, and behavioural sciences."
    },
    {
      "id": "AGR220-U2-MCQ13",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "difficulty": "Easy",
      "questionText": "What is a 'Mind Map' in digital learning and brainstorming?",
      "options": {
        "A": "A visual diagram with a central concept at the center and branching associative nodes radiating outward with keywords and images",
        "B": "An MRI scan of the human brain",
        "C": "A geographical map showing tractor roads",
        "D": "A spreadsheet calculating agricultural taxes"
      },
      "correctOption": "A",
      "explanation": "Popularized by Tony Buzan, a mind map visually structures knowledge radially around a central idea, utilizing hierarchical branches, colors, and symbols to foster creative synthesis."
    },
    {
      "id": "AGR220-U2-MCQ14",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
      "difficulty": "Easy",
      "questionText": "What portal hosts standardized, peer-reviewed e-course content for all B.Sc. (Hons.) Agriculture subjects developed under the ICAR Deans' Committee guidelines?",
      "options": {
        "A": "ICAR e-Course Portal (ecoursesonline.iasri.res.in)",
        "B": "Amazon Kindle Store",
        "C": "Netflix Education",
        "D": "Wikipedia"
      },
      "correctOption": "A",
      "explanation": "The ICAR e-Course portal, hosted by ICAR-IASRI, provides open, full-text modular instructional courses mapped directly to the national B.Sc. (Hons.) Agriculture curriculum."
    },
    {
      "id": "AGR220-U2-MCQ15",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Easy",
      "questionText": "What is the specialized bibliographic database published by CABI focusing specifically on agriculture, forestry, and life sciences?",
      "options": {
        "A": "CAB Abstracts",
        "B": "PubMed",
        "C": "PsycINFO",
        "D": "MathSciNet"
      },
      "correctOption": "A",
      "explanation": "CAB Abstracts (produced by the Centre for Agriculture and Bioscience International) is the premier global bibliographic database indexing agricultural literature from over 120 countries."
    },
    {
      "id": "AGR220-U2-MCQ16",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "difficulty": "Easy",
      "questionText": "What is 'Self-Plagiarism' (or Text Recycling)?",
      "options": {
        "A": "Re-using substantial parts of one's own previously published text, data, or assignments without proper citation or notification",
        "B": "Writing notes in a personal diary",
        "C": "Recycling waste paper in a campus bin",
        "D": "Studying your own handwriting"
      },
      "correctOption": "A",
      "explanation": "Self-plagiarism occurs when an author republishes or submits their own previous works, passages, or research findings as new, original work without citing the prior publication."
    },
    {
      "id": "AGR220-U2-MCQ17",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "difficulty": "Easy",
      "questionText": "Which browser extension allows one-click extraction of research papers, DOIs, and bibliographic metadata directly into Zotero?",
      "options": {
        "A": "Zotero Connector",
        "B": "AdBlock Plus",
        "C": "Flash Player",
        "D": "Google Translate"
      },
      "correctOption": "A",
      "explanation": "The Zotero Connector extension sits on Chrome, Firefox, or Edge, automatically detecting academic metadata on journal web pages and importing bibliographic records and PDFs into the library."
    },
    {
      "id": "AGR220-U2-MCQ18",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "difficulty": "Easy",
      "questionText": "What Google Workspace for Education application allows teachers to distribute lecture assignments, grade student work, and organize class announcements?",
      "options": {
        "A": "Google Classroom",
        "B": "Google Earth",
        "C": "Google Pay",
        "D": "Google Photos"
      },
      "correctOption": "A",
      "explanation": "Google Classroom is a free blended learning platform integrating Docs, Sheets, Slides, Gmail, and Drive to streamline assignment creation, distribution, and grading."
    },
    {
      "id": "AGR220-U2-MCQ19",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "difficulty": "Easy",
      "questionText": "Which modern personal knowledge management (PKM) tool uses local Markdown text files and bi-directional links (graph view) to connect research ideas?",
      "options": {
        "A": "Obsidian",
        "B": "Notepad",
        "C": "Microsoft Paint",
        "D": "Calculator"
      },
      "correctOption": "A",
      "explanation": "Obsidian operates on local Markdown files, allowing students to build interconnected webs of knowledge through bi-directional internal links ([[concept]]) visualized on an interactive graph view."
    },
    {
      "id": "AGR220-U2-MCQ20",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds",
      "difficulty": "Easy",
      "questionText": "Under UGC Regulations 2018, which sections of a thesis are excluded from plagiarism similarity index checks?",
      "options": {
        "A": "All quoted work with attribution, references/bibliography, table of contents, preface, acknowledgments, and generic mathematical symbols",
        "B": "The results and discussion chapter",
        "C": "The experimental research methodology",
        "D": "Nothing is excluded; every single character is checked"
      },
      "correctOption": "A",
      "explanation": "UGC guidelines specifically exclude properly cited quotations, bibliographies, acknowledgments, prefaces, and generic mathematical formulas or scientific standard names from similarity checks."
    },
    {
      "id": "AGR220-U2-MCQ21",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Medium",
      "questionText": "What are Boolean operators used in scholarly database searches, and what does the operator 'AND' achieve?",
      "options": {
        "A": "Logical operators (AND, OR, NOT); 'AND' narrows the search by retrieving only records that contain both search terms simultaneously",
        "B": "'AND' broadens the search to include either term",
        "C": "'AND' excludes the second word completely",
        "D": "'AND' searches only images"
      },
      "correctOption": "A",
      "explanation": "Boolean logic utilizes AND, OR, NOT. Using 'AND' (e.g., 'bioherbicide AND Striga') narrows results, ensuring every returned paper contains both keywords, improving search precision."
    },
    {
      "id": "AGR220-U2-MCQ22",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "difficulty": "Medium",
      "questionText": "What is 'SCORM' (Sharable Content Object Reference Model) in e-learning content design?",
      "options": {
        "A": "A collection of international technical standards that allows interactive digital courseware to be packaged and run seamlessly on any SCORM-compliant LMS",
        "B": "A computer virus that deletes student homework",
        "C": "A digital certificate issued by universities",
        "D": "A database for tracking fertilizer prices"
      },
      "correctOption": "A",
      "explanation": "SCORM sets communications standards between client-side interactive course content and host LMS platforms, enabling courses created in tools like Articulate Storyline to export tracking, quiz scores, and completion status to Moodle or Canvas."
    },
    {
      "id": "AGR220-U2-MCQ23",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "difficulty": "Medium",
      "questionText": "How does anti-plagiarism software like Turnitin or Ouriginal actually detect textual similarity?",
      "options": {
        "A": "By decomposing submitted text into digital strings (n-grams/fingerprints) and matching them mathematically against billions of web pages, published journal articles, and student archive papers",
        "B": "By employing human inspectors who read every paper line by line",
        "C": "By guessing based on the student's name",
        "D": "By scanning the computer monitor with a camera"
      },
      "correctOption": "A",
      "explanation": "Plagiarism detectors use string-matching algorithms, pattern recognition, and n-gram fingerprinting to compare document text against a massive corpus of crawlable web pages, scholarly databases, and previously submitted student papers."
    },
    {
      "id": "AGR220-U2-MCQ24",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds",
      "difficulty": "Medium",
      "questionText": "Under UGC Regulations 2018, what penalty is imposed on a Master's or Ph.D. student whose thesis exhibits 'Level 2' plagiarism (similarities between 40% and 60%)?",
      "options": {
        "A": "The student is debarred from submitting a revised script for a period of one year",
        "B": "A fine of 500 rupees only",
        "C": "The student is awarded an honorary doctorate",
        "D": "Immediate imprisonment for 10 years"
      },
      "correctOption": "A",
      "explanation": "UGC Level 2 penalty (similarities between 40% and 60%): The student is debarred from submitting a revised thesis/dissertation for a minimum period of one year."
    },
    {
      "id": "AGR220-U2-MCQ25",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "difficulty": "Medium",
      "questionText": "What is the 'Outline Method' of digital lecture note-taking?",
      "options": {
        "A": "Organizing lecture information hierarchically using bullet points, indentations, and numbered sub-points indicating main topics, subtopics, and supporting evidence",
        "B": "Drawing the outline of the professor's face",
        "C": "Writing down only the first letter of each spoken word",
        "D": "Typing everything in capital letters without punctuation"
      },
      "correctOption": "A",
      "explanation": "The Outline method structures information into a logical hierarchy: Main Topic (Roman numeral), Sub-topic (Capital letter), Detail (Arabic numeral), and Sub-detail (lowercase letter), creating a clear mental taxonomy."
    },
    {
      "id": "AGR220-U2-MCQ26",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Medium",
      "questionText": "What does an author's 'h-index' measure in academic research metrics?",
      "options": {
        "A": "Both the productivity and citation impact of a scientist: an author has index h if h of their papers have at least h citations each",
        "B": "The physical height of the researcher",
        "C": "The number of hours spent in the laboratory per day",
        "D": "The percentage of correct answers on a test"
      },
      "correctOption": "A",
      "explanation": "Proposed by Jorge E. Hirsch in 2005, the h-index measures research impact: an h-index of 20 means an author has published 20 papers that have each been cited at least 20 times."
    },
    {
      "id": "AGR220-U2-MCQ27",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "difficulty": "Medium",
      "questionText": "What is the standard data interchange file format (.ris or .bib) used to transfer bibliographic libraries between reference managers?",
      "options": {
        "A": "RIS (Research Information Systems) format and BibTeX (.bib) format",
        "B": "JPEG image format",
        "C": "MP3 audio format",
        "D": "EXE executable program"
      },
      "correctOption": "A",
      "explanation": "RIS (Research Information Systems) and BibTeX are standardized tagged text formats supported universally across Zotero, Mendeley, EndNote, and Google Scholar to exchange reference metadata."
    },
    {
      "id": "AGR220-U2-MCQ28",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "difficulty": "Medium",
      "questionText": "What is 'Mosaic Plagiarism' (or Patchwriting)?",
      "options": {
        "A": "Copying bits and pieces of sentences from various sources, rearranging them, and interspersing a few synonyms without proper rephrasing or citation",
        "B": "Creating colorful mosaics on bathroom tiles",
        "C": "Writing an original poem about wheat crops",
        "D": "Drawing a flowchart of plant breeding"
      },
      "correctOption": "A",
      "explanation": "Mosaic plagiarism involves borrowing phrases and clause fragments from multiple authors, stitching them together with minor synonym replacements, creating a pastiche while masking the borrowed intellectual structure."
    },
    {
      "id": "AGR220-U2-MCQ29",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Medium",
      "questionText": "How does using quotation marks (\" \") in search queries on Google Scholar optimize literature retrieval?",
      "options": {
        "A": "It forces the search engine to search for the exact phrase in exact word order (e.g., \"integrated weed management\") rather than individual scattered words",
        "B": "It highlights all results in green color",
        "C": "It searches only for newspaper articles",
        "D": "It deletes all results from the screen"
      },
      "correctOption": "A",
      "explanation": "Enclosing keywords in quotation marks instructs the search engine to search for the exact contiguous phrase, eliminating irrelevant papers that merely contain the words in disconnected sentences."
    },
    {
      "id": "AGR220-U2-MCQ30",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
      "difficulty": "Medium",
      "questionText": "What is 'AGRICOLA' and which national institution produces it?",
      "options": {
        "A": "Agricultural Online Access, produced by the National Agricultural Library (NAL) of the United States Department of Agriculture (USDA)",
        "B": "A Greek agricultural tractor manufacturer",
        "C": "An Italian organic wine certifying agency",
        "D": "A Spanish agricultural university"
      },
      "correctOption": "A",
      "explanation": "AGRICOLA (AGRICultural OnLine Access) is the massive bibliographic database produced by the USDA National Agricultural Library, cataloging agricultural research literature since 1970."
    },
    {
      "id": "AGR220-U2-MCQ31",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "difficulty": "Medium",
      "questionText": "What is the function of an 'Announcement Forum' in a Moodle course?",
      "options": {
        "A": "A special one-way broadcast forum where only teachers and administrators can post important notices, which are automatically emailed to all enrolled students",
        "B": "A public chat room for students to share music",
        "C": "A place to upload homework files",
        "D": "A digital calculator for scoring exams"
      },
      "correctOption": "A",
      "explanation": "In Moodle, the Announcement (formerly News) forum is restricted to instructor broadcasts. When a notice is published, Moodle forces an automated email notification to all subscribed cohort participants."
    },
    {
      "id": "AGR220-U2-MCQ32",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds",
      "difficulty": "Medium",
      "questionText": "Under UGC Regulations 2018, what penalty is prescribed for 'Level 3' plagiarism (similarities above 60%) in a submitted thesis?",
      "options": {
        "A": "The student's registration for the programme is cancelled completely",
        "B": "The student is warned verbally",
        "C": "The student is given an extension of 1 month",
        "D": "A fine of 1,000 rupees is levied"
      },
      "correctOption": "A",
      "explanation": "UGC Level 3 penalty (similarity above 60%): The student's academic registration for the degree programme (Ph.D. or Master's) is permanently cancelled."
    },
    {
      "id": "AGR220-U2-MCQ33",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "difficulty": "Medium",
      "questionText": "What is the concept of a 'Second Brain' (Building a Second Brain - BASB) advocated by Tiago Forte for students?",
      "options": {
        "A": "A personal digital knowledge management system using digital apps to capture, organize, distill, and express ideas outside of biological working memory",
        "B": "A medical brain transplant",
        "C": "Having a friend write your class exams",
        "D": "A dual-core computer processor"
      },
      "correctOption": "A",
      "explanation": "Tiago Forte's BASB framework uses digital notebooks (Notion, Obsidian) to store notes, papers, and ideas systematically (using the CODE methodology: Capture, Organize, Distill, Express), freeing biological mental capacity for creative synthesis."
    },
    {
      "id": "AGR220-U2-MCQ34",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "difficulty": "Medium",
      "questionText": "What is the difference between an in-text citation and a reference list entry in an agricultural research paper?",
      "options": {
        "A": "An in-text citation is a brief marker inside the body text pointing to a source (e.g., Sharma, 2024), whereas the reference list provides complete bibliographic publication details at the end of the manuscript",
        "B": "In-text citations are only for pictures; reference lists are for text",
        "C": "In-text citations are written in pencil; reference lists in ink",
        "D": "There is no difference between them"
      },
      "correctOption": "A",
      "explanation": "In-text citations briefly signal borrowed intellectual authority within the narrative, while the end-of-document reference list delivers full bibliographic details (authors, year, title, journal, volume, pages, DOI) enabling verification."
    },
    {
      "id": "AGR220-U2-MCQ35",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Medium",
      "questionText": "What does 'Open Access' (OA) mean in scientific publishing, and what is the difference between 'Gold OA' and 'Green OA'?",
      "options": {
        "A": "Open Access provides unrestricted digital access to peer-reviewed research; Gold OA makes the article freely available on the journal website immediately (often funded by APCs), while Green OA involves self-archiving a preprint/postprint in an institutional repository",
        "B": "Gold OA is only for rich scientists; Green OA is for organic farmers",
        "C": "Gold OA uses gold ink; Green OA uses green ink",
        "D": "Open Access means anyone can change the research text like Wikipedia"
      },
      "correctOption": "A",
      "explanation": "Gold OA delivers instant public access via publisher platforms upon payment of an Article Processing Charge (APC); Green OA (self-archiving) permits authors to deposit accepted peer-reviewed manuscripts into open institutional repositories (e.g., KrishiKosh) without fees."
    },
    {
      "id": "AGR220-U2-MCQ36",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "difficulty": "Medium",
      "questionText": "Why can an anti-plagiarism report show a 15% similarity score even on a completely honest, properly written student paper?",
      "options": {
        "A": "Because the software matches standard institutional names, common scientific terminology, generic lab procedures, and properly quoted text in quotation marks",
        "B": "Because the software is 100% broken and unreliable",
        "C": "Because the computer thinks all students are dishonest",
        "D": "Because the internet is too slow"
      },
      "correctOption": "A",
      "explanation": "Plagiarism software detects surface text matching, not intent. Standard scientific phrases ('randomized complete block design', 'analyzed using ANOVA'), institutional covers, and properly attributed references elevate the baseline similarity score."
    },
    {
      "id": "AGR220-U2-MCQ37",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "difficulty": "Medium",
      "questionText": "What is the PARA method of organizing digital course notes formulated by Tiago Forte?",
      "options": {
        "A": "Organizing files into Projects, Areas, Resources, and Archives",
        "B": "Plants, Animals, Rainfall, and Atmosphere",
        "C": "Plow, Agronomy, Reaping, and Agriculture",
        "D": "Print, Annotate, Read, and Assess"
      },
      "correctOption": "A",
      "explanation": "PARA organizes all digital information into four actionability tiers: Projects (active short-term tasks), Areas (ongoing responsibilities), Resources (topics of ongoing interest), and Archives (inactive completed items)."
    },
    {
      "id": "AGR220-U2-MCQ38",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Medium",
      "questionText": "What is 'Scopus' and which commercial scientific publishing company owns and operates it?",
      "options": {
        "A": "A massive curated abstract and citation database of peer-reviewed literature owned by Elsevier",
        "B": "A free search engine owned by Google",
        "C": "A social network owned by Meta",
        "D": "A government portal owned by ICAR"
      },
      "correctOption": "A",
      "explanation": "Scopus is Elsevier's curated multidisciplinary abstract and citation database indexing over 25,000 peer-reviewed titles across science, technology, medicine, and agriculture."
    },
    {
      "id": "AGR220-U2-MCQ39",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "difficulty": "Medium",
      "questionText": "What happens when an author inserts a citation using a reference manager plugin in Microsoft Word and later changes the citation style from APA to Harvard?",
      "options": {
        "A": "The software instantly and automatically updates every in-text citation and the entire reference bibliography to comply with the newly selected style",
        "B": "The computer deletes the entire document",
        "C": "All text is translated into French",
        "D": "The author must re-type every citation by hand"
      },
      "correctOption": "A",
      "explanation": "Reference managers dynamically re-render in-text citations and bibliographies, allowing instantaneous re-formatting across thousands of citation styles (APA, Harvard, Vancouver) with a single click."
    },
    {
      "id": "AGR220-U2-MCQ40",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "difficulty": "Medium",
      "questionText": "What is 'Canvas LMS' and what technical architectural feature distinguishes it in higher education?",
      "options": {
        "A": "A cloud-native SaaS learning management system developed by Instructure, known for its clean interface, speedgrader, and mobile app integration",
        "B": "A drawing software used by digital painters",
        "C": "A tent material used in camping",
        "D": "A video editing tool for movies"
      },
      "correctOption": "A",
      "explanation": "Canvas LMS, developed by Instructure, is a leading cloud-native educational platform widely utilized by universities globally, featuring SpeedGrader and open API integrations."
    },
    {
      "id": "AGR220-U2-MCQ41",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "difficulty": "Medium",
      "questionText": "What is 'Contract Cheating' in modern academic integrity violations?",
      "options": {
        "A": "Paying a third party (essay mill, freelancer, or commercial service) to complete assignments, reports, or online exams on one's behalf",
        "B": "Signing a contract to rent farm machinery",
        "C": "Breaking a legal trade contract with a grain dealer",
        "D": "Contracting a bacterial plant disease"
      },
      "correctOption": "A",
      "explanation": "Contract cheating is a grave ethical breach where a student outsources academic work to a third party (commercial 'essay mill' or ghostwriter) for monetary payment and submits it as their own work."
    },
    {
      "id": "AGR220-U2-MCQ42",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
      "difficulty": "Medium",
      "questionText": "What is the technical repository software platform powering KrishiKosh and numerous academic institutional repositories worldwide?",
      "options": {
        "A": "DSpace",
        "B": "Adobe Photoshop",
        "C": "Microsoft PowerPoint",
        "D": "Linux Kernel"
      },
      "correctOption": "A",
      "explanation": "DSpace is the open-source digital repository software platform used by KrishiKosh, university libraries, and research organizations to preserve and distribute scholarly assets."
    },
    {
      "id": "AGR220-U2-MCQ43",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "difficulty": "Medium",
      "questionText": "What is 'Markdown' (.md) in digital note-taking and documentation?",
      "options": {
        "A": "A lightweight plain-text formatting syntax that allows text to be formatted with simple characters (e.g., # for headers, ** for bold) and rendered cleanly across devices",
        "B": "A red marker used by teachers to grade tests",
        "C": "A discount on agricultural seed prices",
        "D": "A proprietary database file created by Oracle"
      },
      "correctOption": "A",
      "explanation": "Created by John Gruber, Markdown is a lightweight markup language designed to be written and read effortlessly in plain text, converting cleanly to HTML, PDF, and interactive notes."
    },
    {
      "id": "AGR220-U2-MCQ44",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Medium",
      "questionText": "What is 'ResearchGate' in modern scholarly communication?",
      "options": {
        "A": "A professional social networking platform for scientists and researchers to share papers, ask scientific questions, and find collaborators",
        "B": "A physical gate at the entrance of an agricultural university",
        "C": "A software used to lock computer files",
        "D": "A government tax portal"
      },
      "correctOption": "A",
      "explanation": "ResearchGate is a dedicated academic social network connecting over 20 million researchers globally, enabling open sharing of publications, preprints, and project updates."
    },
    {
      "id": "AGR220-U2-MCQ45",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds",
      "difficulty": "Medium",
      "questionText": "Under UGC Regulations 2018, what penalty is imposed on an author whose published research paper exhibits 'Level 1' plagiarism (similarities between 10% and 40%)?",
      "options": {
        "A": "The author is asked to withdraw the manuscript",
        "B": "The author is immediately dismissed from service",
        "C": "The author receives a gold medal",
        "D": "The author must pay 100,000 rupees"
      },
      "correctOption": "A",
      "explanation": "For published research papers exhibiting Level 1 plagiarism (10% to 40% similarity), UGC mandates that the author shall be directed to formally withdraw the manuscript from publication."
    },
    {
      "id": "AGR220-U2-MCQ46",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "difficulty": "Hard",
      "questionText": "What technical protocol in modern LMS platforms allows them to communicate learning experiences and performance metrics directly to a Learning Record Store (LRS) via an activity-stream syntax (Actor-Verb-Object)?",
      "options": {
        "A": "xAPI (Experience API, formerly Tin Can API)",
        "B": "SCORM 1.2",
        "C": "HTTP GET request",
        "D": "FTP file transfer"
      },
      "correctOption": "A",
      "explanation": "xAPI (Experience API) captures learning experiences across diverse contexts (mobile apps, virtual simulators, field sensors) using the standardized RESTful format: 'Actor Verb Object' (e.g., 'Student calibrated Spectrophotometer'), storing records in an LRS."
    },
    {
      "id": "AGR220-U2-MCQ47",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "difficulty": "Hard",
      "questionText": "What is the technical phenomenon of 'Ghost Citation' (or Phantom Citation) in academic misconduct?",
      "options": {
        "A": "Fabricating non-existent research articles, authors, or journal volumes and citing them in a bibliography to falsely bolster an unsubstantiated scientific claim",
        "B": "Citing a deceased researcher with respect",
        "C": "Writing citations in invisible ink",
        "D": "Citing an anonymous government report"
      },
      "correctOption": "A",
      "explanation": "Ghost or phantom citations involve fraudulent fabrication of non-existent references to create a veneer of scholarly rigor for unsupported claims, an ethical violation accelerated by AI hallucinations."
    },
    {
      "id": "AGR220-U2-MCQ48",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Hard",
      "questionText": "How does the 'Journal Impact Factor' (JIF) published in Clarivate's Journal Citation Reports (JCR) calculate its annual numerical metric?",
      "options": {
        "A": "Total citations received in the current year by articles published in the journal during the preceding two years, divided by the total number of citable articles published in those two years",
        "B": "The total number of pages published per year",
        "C": "The annual subscription cost divided by total readers",
        "D": "The number of research grants awarded to the editorial board"
      },
      "correctOption": "A",
      "explanation": "JIF is calculated as: Citations in Year Y to items published in (Y-1 + Y-2), divided by the total citable items (research papers, reviews) published in (Y-1 + Y-2)."
    },
    {
      "id": "AGR220-U2-MCQ49",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds",
      "difficulty": "Hard",
      "questionText": "Under UGC Regulations 2018, which institutional committee is responsible for investigating allegations of plagiarism and recommending penalties against students or faculty?",
      "options": {
        "A": "Institutional Academic Integrity Panel (IAIP) and Departmental Academic Integrity Panel (DAIP)",
        "B": "National Green Tribunal",
        "C": "Central Vigilance Commission",
        "D": "District Magistrate Court"
      },
      "correctOption": "A",
      "explanation": "UGC establishes a two-tier investigative mechanism: Departmental Academic Integrity Panel (DAIP) conducts preliminary inquiry, and the Institutional Academic Integrity Panel (IAIP) headed by Dean/Pro-VC conducts formal hearings and recommends penalties."
    },
    {
      "id": "AGR220-U2-MCQ50",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "difficulty": "Hard",
      "questionText": "What open-source citation style language format (.csl) powers reference formatting in Zotero and Mendeley?",
      "options": {
        "A": "Citation Style Language (CSL)",
        "B": "Python script (.py)",
        "C": "Cascading Style Sheets (.css)",
        "D": "SQL query language"
      },
      "correctOption": "A",
      "explanation": "Citation Style Language (CSL) is an XML-based open standard used by Zotero, Mendeley, and Papers to format in-text citations and bibliographies across more than 10,000 journal styles."
    },
    {
      "id": "AGR220-U2-MCQ51",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "difficulty": "Hard",
      "questionText": "What is the 'Zettelkasten' method of knowledge management and how does it revolutionize scientific research synthesis?",
      "options": {
        "A": "A German card-index system formulated by Niklas Luhmann, using atomic notes, unique alphanumeric IDs, and non-hierarchical hyperlinking to interconnect independent insights into an emergent knowledge web",
        "B": "A German method for calibrating diesel fuel injectors",
        "C": "A greenhouse hydroponic crop rotation protocol",
        "D": "A system for scoring dairy cattle conformation"
      },
      "correctOption": "A",
      "explanation": "Zettelkasten ('slip-box') treats notes as atomic thoughts connected via bidirectional hyperlinks rather than rigid folders, allowing unexpected cross-disciplinary connections to emerge organically over time."
    },
    {
      "id": "AGR220-U2-MCQ52",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Hard",
      "questionText": "What is the difference between 'Scopus' and 'Web of Science' (WoS) in scholarly indexing coverage?",
      "options": {
        "A": "Scopus indexes a broader volume of global journals and conference proceedings (especially European and Asian literature), whereas Web of Science focuses on deeply selective core journals with historic citation indexing dating back to 1900",
        "B": "Scopus is free while WoS charges $100 per search",
        "C": "Scopus is only for engineering while WoS is only for botany",
        "D": "There is no difference; they are the same database"
      },
      "correctOption": "A",
      "explanation": "Scopus (Elsevier) provides broader, more comprehensive contemporary journal and conference coverage, whereas Web of Science (Clarivate) features rigorous, selective indexing with century-long retrospective citation data."
    },
    {
      "id": "AGR220-U2-MCQ53",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
      "difficulty": "Hard",
      "questionText": "What metadata standard is universally used by KrishiKosh, AGRIS, and OAI-PMH compliant repositories to index digital agricultural publications?",
      "options": {
        "A": "Dublin Core Metadata Element Set (DCMES, 15 core elements)",
        "B": "HTML5 Canvas API",
        "C": "ISO 9001 standard",
        "D": "TCP/IP protocol"
      },
      "correctOption": "A",
      "explanation": "Dublin Core (DCMES, ISO 15836) is the standard 15-element metadata schema (Title, Creator, Subject, Description, Publisher, Date, Format, etc.) powering OAI-PMH harvesting across digital libraries."
    },
    {
      "id": "AGR220-U2-MCQ54",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "difficulty": "Hard",
      "questionText": "What is the function of the 'Gradebook' calculation engine in Moodle when managing complex university grading formulas?",
      "options": {
        "A": "Aggregating marks across disparate assessment categories (quizzes, lab practicals, assignments) using custom mathematical formulas, weighted means, and drop-lowest-score rules",
        "B": "Printing paper mark sheets on dot-matrix printers",
        "C": "Sending SMS text messages to students' parents",
        "D": "Calculating classroom electricity consumption"
      },
      "correctOption": "A",
      "explanation": "Moodle's Gradebook allows course administrators to build complex aggregation formulas: weighted categories (e.g., 20% CA, 20% MTE, 40% ETE, 20% Lab), letter-grade scales, and automated drop-lowest-score rules."
    },
    {
      "id": "AGR220-U2-MCQ55",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "difficulty": "Hard",
      "questionText": "What is 'Salami Slicing' (Data Fragmentation) in academic publication ethics?",
      "options": {
        "A": "Inappropriately fragmenting a single comprehensive research study into multiple small 'least publishable units' (LPUs) to artificially inflate an author's publication count",
        "B": "Cutting sausages in meat processing laboratories",
        "C": "Slicing root nodules for microscopic inspection",
        "D": "Dividing soil samples during quartering"
      },
      "correctOption": "A",
      "explanation": "Salami slicing is an unethical publication practice where data from a single holistic experimental study is split across multiple piecemeal papers, wasting reviewer resources and distorting meta-analyses."
    },
    {
      "id": "AGR220-U2-MCQ56",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "difficulty": "Hard",
      "questionText": "In digital personal knowledge management, what is the 'Progressive Summarization' framework formulated by Tiago Forte?",
      "options": {
        "A": "A four-layer distillation technique: Layer 1 (raw captured notes), Layer 2 (bolded key passages), Layer 3 (highlighted golden insights), Layer 4 (an executive summary in your own words)",
        "B": "Gradually making font sizes smaller over time",
        "C": "Summarizing an entire book into one single letter",
        "D": "Deleting 10% of notes every month"
      },
      "correctOption": "A",
      "explanation": "Progressive Summarization distills notes across iterative layers of visual compression without losing context, enabling rapid, instant future retrieval of core insights."
    },
    {
      "id": "AGR220-U2-MCQ57",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "difficulty": "Hard",
      "questionText": "How does Zotero handle automatic extraction of PDF metadata when a user drags an unindexed PDF research paper into the library?",
      "options": {
        "A": "It scans the first few pages using OCR and queries the CrossRef / Google Scholar APIs with the extracted title, DOI, or author strings to populate full bibliographic fields",
        "B": "It opens Microsoft Paint to draw the cover",
        "C": "It emails the PDF author asking for their name",
        "D": "It deletes the PDF immediately"
      },
      "correctOption": "A",
      "explanation": "Zotero's built-in PDF indexer extracts text from the header, queries CrossRef and Google Scholar metadata servers with the identified DOI or title, and automatically populates complete bibliographic records."
    },
    {
      "id": "AGR220-U2-MCQ58",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds",
      "difficulty": "Hard",
      "questionText": "Under UGC Regulations 2018, what penalty is prescribed for university faculty members whose published paper exhibits 'Level 2' plagiarism (similarities between 40% and 60%)?",
      "options": {
        "A": "Denial of one annual increment and debarred from supervising any Master's or Ph.D. students for a period of two years",
        "B": "Immediate dismissal without inquiry",
        "C": "A fine of 5,000 rupees",
        "D": "Transfer to another university"
      },
      "correctOption": "A",
      "explanation": "For faculty members committing Level 2 plagiarism, UGC mandates: (1) Withdrawal of manuscript, (2) Denial of one annual increment, and (3) Debarment from supervising research students for two years."
    },
    {
      "id": "AGR220-U2-MCQ59",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "difficulty": "Hard",
      "questionText": "What is the 'Truncation Wildcard' operator (*) used in academic bibliographic database queries?",
      "options": {
        "A": "A symbol appended to a root word (e.g., bioherb*) to search for all word variations simultaneously (bioherbicide, bioherbicides, bioherbicidal)",
        "B": "A multiplication symbol calculating search prices",
        "C": "A symbol that deletes all matching words",
        "D": "A star rating indicating paper quality"
      },
      "correctOption": "A",
      "explanation": "Truncation symbols (usually an asterisk *) capture all morphological derivatives and plural forms of a root stem, ensuring comprehensive literature retrieval without typing separate keywords."
    },
    {
      "id": "AGR220-U2-MCQ60",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "difficulty": "Hard",
      "questionText": "What is a 'Rubric' in LMS assessment configuration?",
      "options": {
        "A": "A multidimensional grading matrix consisting of explicit performance criteria and descriptive quality achievement levels used to evaluate subjective student submissions objectively",
        "B": "A 3D puzzle cube solved by students",
        "C": "A red gemstone used in laboratory lasers",
        "D": "A legal contract signed by the chancellor"
      },
      "correctOption": "A",
      "explanation": "A rubric establishes a transparent scoring matrix with specific performance criteria (e.g., scientific depth, literature citations, layout) and performance tiers (poor, fair, good, exemplary), standardizing subjective grading across evaluators."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "AGR220-U2-SUB01",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "questionText": "Define a Learning Management System (LMS). Explain its core functional modules: Course Management, Content Delivery, Assessment Engine, and Student Analytics.",
      "contextScenario": "An agricultural university is deploying Moodle across all constituent colleges and needs to brief faculty on its core functional capabilities.",
      "modelAnswer": "A Learning Management System (LMS) is a centralized, web-based software application designed to automate, deliver, track, assess, and manage educational courses, training curricula, and instructional programs across digital environments.\n\nCore Functional Modules of an Enterprise LMS:\n1. Course Management & Administration:\nEnables academic administrators and faculty to create course structures, enroll student cohorts, assign role permissions (Teacher, Student, Teaching Assistant, Non-editing Teacher), configure academic calendars, and manage prerequisite access restrictions.\n\n2. Content Delivery & Repository Services:\nServes as the multimedia instructional repository. Hosts lecture notes, slide decks, syllabi, interactive SCORM courseware packages, and video streams. Supports modular week-by-week or topic-by-topic layout organization with completion tracking conditions (e.g., 'must view video to unlock quiz').\n\n3. Assessment & Grading Engine:\nSupports diverse formative and summative evaluation modalities: timed multiple-choice quizzes with automated randomized question banks, essay submissions, file upload assignments, and rubric-based grading matrices. The integrated Gradebook dynamically calculates weighted continuous assessment scores.\n\n4. Communication & Collaborative Tools:\nProvides built-in asynchronous and synchronous interaction channels: announcement boards, discussion forums, direct messaging, peer-review workshops, and collaborative wikis that foster active peer learning communities.\n\n5. Student Progress Tracking & Learning Analytics:\nGenerates real-time diagnostic reporting dashboards tracking individual student login frequency, video completion percentages, quiz scores, assignment submission timestamps, and engagement heatmaps, enabling early identification of at-risk students.",
      "outlinePoints": [
        "Formal definition of Learning Management System (LMS)",
        "Module 1: Course Management and Role-Based Permissions",
        "Module 2: Multimedia Content Delivery and SCORM Packaging",
        "Module 3: Assessment Engine, Rubrics, and Automated Gradebook",
        "Module 4: Communication Forums and Collaborative Tools",
        "Module 5: Student Analytics and Early-Warning Tracking Dashboards"
      ]
    },
    {
      "id": "AGR220-U2-SUB02",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
      "questionText": "Compare KrishiKosh, CeRA, and AGRIS with respect to governing organization, resource types, access models, and specific utility for agricultural students in India.",
      "contextScenario": "An undergraduate student embarking on their final-year RAWE project needs to know where to find past theses, international journal articles, and FAO global datasets.",
      "modelAnswer": "Agricultural students and researchers rely on distinct digital library consortia and repositories to access scientific literature.\n\n1. KrishiKosh (National Agricultural Digital Repository of India):\n- Governing Body: Managed by ICAR-IASRI under the National Agricultural Higher Education Project (NAHEP).\n- Resource Coverage: Open-access institutional repository housing over 160,000 digitized full-text M.Sc. and Ph.D. theses from State Agricultural Universities (SAUs) and ICAR deemed universities, alongside institutional annual reports, rare historical monographs, and bulletins.\n- Access Model: 100% Open Access globally without login or subscription fees.\n- Primary Student Utility: Finding complete experimental methodologies, thesis literature reviews, and past regional research data conducted across Indian agro-climatic zones.\n\n2. CeRA (Consortium for e-Resources in Agriculture):\n- Governing Body: Established and funded by ICAR, operating out of ICAR-IARI, New Delhi.\n- Resource Coverage: Facilitates access to premium, subscription-based international and national scholarly journals (e.g., Springer, Elsevier, Wiley, Taylor & Francis, Annual Reviews, CSIRO journals) encompassing more than 4,000 peer-reviewed journals.\n- Access Model: Subscription-based IP-authenticated intranet access, available to faculty and students connected to institutional campus Wi-Fi/networks of ICAR institutes and recognized SAUs.\n- Primary Student Utility: Accessing cutting-edge global research papers, meta-analyses, and high-impact factor discoveries for writing review papers and project proposals.\n\n3. AGRIS (International System for Agricultural Science and Technology):\n- Governing Body: Maintained by the Food and Agriculture Organization (FAO) of the United Nations.\n- Resource Coverage: Global multilingual bibliographic database indexing over 14 million records spanning agriculture, forestry, animal husbandry, fisheries, and nutrition from over 150 participating nations.\n- Access Model: Open Access web portal freely searchable worldwide.\n- Primary Student Utility: Conducting comprehensive global literature reviews, locating non-conventional grey literature (government technical reports, conference proceedings), and retrieving FAO policy datasets.",
      "outlinePoints": [
        "Introduction to the agricultural digital library ecosystem",
        "KrishiKosh: ICAR theses, institutional repository, 100% open access",
        "CeRA: Premium peer-reviewed international journal consortium, IP-authenticated campus access",
        "AGRIS: FAO global multilingual bibliographic database, grey literature coverage",
        "Comparative synthesis of student use-cases"
      ]
    },
    {
      "id": "AGR220-U2-SUB03",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "questionText": "Explain the step-by-step workflow of using Zotero for reference management in drafting an agricultural research review, from capturing online metadata to generating automated bibliographies in MS Word.",
      "contextScenario": "A student preparing a seminar report on 'Nano-fertilizers in Indian Agriculture' needs to cite 30 research papers without manual bibliography formatting errors.",
      "modelAnswer": "Zotero is a free, open-source reference management software designed to automate collecting, organizing, citing, and sharing research sources.\n\nStep 1: Installation and Account Configuration:\n- Download and install the Zotero desktop standalone client (Windows/Mac/Linux).\n- Install the Zotero Connector extension on your primary web browser (Chrome or Firefox).\n- Create a free online Zotero cloud account and enable automatic background synchronization to back up metadata and notes across devices.\n\nStep 2: Capturing Research Sources and Metadata:\n- While searching Google Scholar, CeRA, or ScienceDirect, click the Zotero Connector icon on the browser toolbar.\n- The extension parses the web page's Dublin Core/COinS metadata, extracting the article title, author list, journal name, publication year, volume, issue, page numbers, and DOI.\n- It automatically downloads and attaches the open-access full-text PDF to the library.\n- For print books or downloaded PDFs, enter the 10/13-digit ISBN or DOI directly into Zotero's 'Add by Identifier' magic wand tool to populate fields instantaneously.\n\nStep 3: Organizing and Annotating the Library:\n- Create a dedicated collection folder: 'Nano-fertilizers Review'.\n- Use color-coded tags (e.g., #zinc, #foliar, #methodology) to categorize articles.\n- Open PDFs in Zotero's built-in PDF reader to highlight key sentences, extract diagram snapshots, and write sticky notes that become searchable.\n\nStep 4: In-Text Citation and Bibliography Generation in MS Word:\n- Open Microsoft Word (Zotero automatically installs a dedicated Word ribbon tab).\n- Place the cursor where a citation is needed and click 'Add/Edit Citation'.\n- Select the required citation style (e.g., APA 7th Edition or Indian Journal of Agricultural Sciences).\n- A red search bar appears: type the author's name or keyword (e.g., 'Tarafdar nano-zinc'), press Enter, and Zotero inserts the formatted in-text citation: (Tarafdar et al., 2014).\n- At the end of the manuscript, place the cursor under 'References' and click 'Insert Bibliography'. Zotero instantly compiles the full, alphabetically sorted bibliography with complete journal names and active DOIs.",
      "outlinePoints": [
        "Step 1: Setup standalone client, browser connector, and cloud sync",
        "Step 2: Metadata capture via browser connector and DOI magic wand",
        "Step 3: Library organization using collections, tags, and PDF annotations",
        "Step 4: In-text citation insertion via MS Word ribbon integration",
        "Step 5: One-click automated bibliography compilation and style switching"
      ]
    },
    {
      "id": "AGR220-U2-SUB04",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds",
      "questionText": "Detail the statutory framework of the University Grants Commission (UGC) Regulations, 2018, regarding academic integrity and plagiarism in higher education institutions. Define the four tiers of similarity, excluded content, and prescribed penalties for students and faculty.",
      "contextScenario": "A university disciplinary committee is adjudicating an academic integrity violation in a Master's thesis submission.",
      "modelAnswer": "The University Grants Commission (Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions) Regulations, 2018, notified in the Gazette of India on July 23, 2018, establishes mandatory statutory standards to curb academic misconduct.\n\n1. Exclusions from Plagiarism Similarity Checks:\nBefore assessing similarity index percentages, the software configuration must exclude:\n- All quoted work reproduced with proper bibliographic attribution and permission.\n- All references, bibliographies, indexes, and tables of contents.\n- Prefaces, acknowledgments, and dedications.\n- Generic mathematical formulas, scientific laws, and standard botanical/chemical binomial nomenclature.\n\n2. The Four Tiers of Plagiarism Severity and Prescribed Penalties:\n\nTier 1: Level 0 (Minor Similarities - Up to 10%):\n- Definition: Similarity index up to 10%.\n- Student Penalty: No penalty; considered within acceptable academic tolerance.\n- Faculty Penalty: No penalty.\n\nTier 2: Level 1 (Low Plagiarism - 10% to 40% Similarity):\n- Definition: Similarity between 10% and 40%.\n- Student Penalty: The student is directed to submit a revised manuscript within a specified period not exceeding 6 months.\n- Faculty Penalty: The faculty member is directed to formally withdraw the published manuscript.\n\nTier 3: Level 2 (Moderate Plagiarism - 40% to 60% Similarity):\n- Definition: Similarity between 40% and 60%.\n- Student Penalty: The student is debarred from submitting a revised thesis or dissertation for a minimum period of one year.\n- Faculty Penalty: (a) Must withdraw manuscript; (b) Denied one annual increment; (c) Debarred from supervising any new Master's or Ph.D. students for two years.\n\nTier 4: Level 3 (Severe Plagiarism - Above 60% Similarity):\n- Definition: Similarity exceeding 60%.\n- Student Penalty: The student's academic registration for the degree programme (Ph.D. or Master's) is permanently cancelled.\n- Faculty Penalty: (a) Must withdraw manuscript; (b) Denied two successive annual increments; (c) Debarred from supervising any research scholars for three years; and (d) Potential suspension or dismissal under service conduct rules.\n\n3. Institutional Investigative Machinery:\nRegulations mandate a two-tier adjudicative body: (1) Departmental Academic Integrity Panel (DAIP), which conducts preliminary technical investigations, and (2) Institutional Academic Integrity Panel (IAIP), which conducts formal disciplinary hearings and submits statutory penalty recommendations to the Vice-Chancellor.",
      "outlinePoints": [
        "Statutory background of UGC Academic Integrity Regulations (2018)",
        "Mandatory exclusions: Quotes with attribution, bibliography, preface, generic math/taxa",
        "Level 0 (up to 10%): Minor tolerance, zero penalty",
        "Level 1 (10% to 40%): Revised draft within 6 months / manuscript withdrawal",
        "Level 2 (40% to 60%): 1-year debarment / loss of increment and 2-year supervision ban",
        "Level 3 (> 60%): Permanent degree cancellation / double increment penalty and 3-year ban",
        "Investigative machinery: DAIP and IAIP institutional panels"
      ]
    },
    {
      "id": "AGR220-U2-SUB05",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "questionText": "Explain the Cornell Note-Taking System. Detail the layout, the 5 'R's methodology, and its cognitive advantages during online video lectures.",
      "contextScenario": "An agricultural student is revamping their study methods to improve recall from asynchronous video lectures.",
      "modelAnswer": "Developed in the 1950s by Professor Walter Pauk at Cornell University, the Cornell Note-Taking System is a proven pedagogical format that transforms passive listening into active learning.\n\n1. Structural Page Layout:\nA standard page or digital canvas is divided into three distinct zones:\n- Notes Column (Right, ~6 inches wide): Used during the lecture to record main ideas, formulas, diagrams, and shorthand facts.\n- Cue / Recall Column (Left, ~2.5 inches wide): Completed immediately after class; contains cue keywords, questions, and core vocabulary terms.\n- Summary Row (Bottom, ~2 inches high): A concise 2-3 sentence executive summary synthesizing the entire page.\n\n2. The 5 'R's Operational Methodology:\n- Record: During the online video, jot down meaningful facts, principles, and bullet points in the right-hand notes area.\n- Reduce: Promptly after the video finishes, review the notes and reduce ideas into concise keywords, questions, and study prompts in the left-hand cue column.\n- Recite: Cover the right-hand notes column with a sheet of paper. Looking only at the cue words on the left, recite the facts aloud in your own words (active recall practice).\n- Reflect: Ponder the broader significance: 'How does this soil drainage principle apply to local canal-irrigated rice paddies?' Formulate the bottom summary.\n- Review: Spend 10-15 minutes weekly reviewing cue columns to retain information.\n\nCognitive Advantage:\nForces active cognitive synthesis (reducing and summarizing) rather than verbatim transcription, preventing the 'Illusion of Competence' during online lecture study.",
      "outlinePoints": [
        "Historical origins of the Cornell Note-Taking System (Walter Pauk)",
        "Physical page architecture: Notes area (right), Cue column (left), Summary row (bottom)",
        "The 5 'R's methodology: Record, Reduce, Recite, Reflect, Review",
        "Cognitive advantages: Active recall integration and synthesis over verbatim copying"
      ]
    },
    {
      "id": "AGR220-U2-SUB06",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "questionText": "Demonstrate advanced search query formulation on Google Scholar and Scopus using Boolean operators, phrase quotation, truncation, and field tags to locate research on bioherbicide formulation for Striga hermonthica.",
      "contextScenario": "A student needs to conduct a comprehensive literature review on bioherbicide formulation for parasitic witchweed and wants to eliminate thousands of irrelevant search results.",
      "modelAnswer": "Conducting effective scholarly literature reviews requires precise boolean logic and syntax modifiers rather than naive natural language keyword searches.\n\n1. Key Advanced Search Operators:\n- Phrase Matching (\" \"): Enclosing words in quotes ensures the exact phrase is searched in sequence (e.g., \"bioherbicide formulation\").\n- Boolean AND: Narrows search by requiring all search terms to be present in each retrieved paper.\n- Boolean OR: Broadens search by retrieving papers containing synonyms or alternative taxonomic terms.\n- Boolean NOT / Minus (-): Excludes irrelevant topics (e.g., -synthetic).\n- Truncation Wildcard (*): Searches all word variations from a root stem (e.g., formulat* matches formulate, formulation, formulating).\n- Field Tags (intitle:, TITLE-ABS-KEY): Restricts matching to specific structural metadata elements.\n\n2. Formulating the Comprehensive Google Scholar Search String:\n- Search String:\n  intitle:\"bioherbicide\" OR intitle:\"mycoherbicide\" AND (\"Striga hermonthica\" OR \"witchweed\") AND (\"formulation\" OR \"emulsion\" OR \"carrier\") -\"chemical herbicide\"\n- Analysis:\n  * intitle: ensures the paper's core focus is bioherbicides or mycoherbicides.\n  * Enclosing \"Striga hermonthica\" captures the scientific binomial without separating terms.\n  * Parenthetical OR groups synonymous formulation technology terms.\n  * -\"chemical herbicide\" filters out unrelated synthetic chemical trials.\n\n3. Formulating the Scopus Advanced Search Query:\n- Search Query:\n  TITLE-ABS-KEY ( ( \"bioherbicide*\" OR \"mycoherbicide*\" ) AND ( \"Striga hermonthica\" OR \"witchweed\" ) AND ( \"formulation\" OR \"invert emulsion\" OR \"microencapsulat*\" ) ) AND PUBYEAR > 2015 AND ( LIMIT-TO ( DOCTYPE , \"ar\" ) OR LIMIT-TO ( DOCTYPE , \"re\" ) )\n- Analysis:\n  * TITLE-ABS-KEY limits scanning to Title, Abstract, and Author Keywords.\n  * PUBYEAR > 2015 restricts retrieval to contemporary research from the last decade.\n  * DOCTYPE limit restricts results strictly to peer-reviewed research articles ('ar') and review papers ('re'), excluding conference abstracts.\n\nThis structured query strategy reduces noise from over 15,000 broad results down to 45 highly relevant, high-impact peer-reviewed papers.",
      "outlinePoints": [
        "Overview of boolean operators (AND, OR, NOT), phrase quotes, and truncation (*)",
        "Google Scholar advanced query construction and operator breakdown",
        "Scopus structured TITLE-ABS-KEY syntax query with date and document type limiters",
        "Comparative filtering efficiency: Eliminating irrelevant noise from thousands of results"
      ]
    },
    {
      "id": "AGR220-U2-SUB07",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "questionText": "Compare Zotero, Mendeley, and EndNote regarding license type, cloud storage capacity, PDF annotation capabilities, institutional adoption, and cost.",
      "contextScenario": "A university department is deciding which reference manager to recommend and support for undergraduate agricultural research projects.",
      "modelAnswer": "Reference management software packages represent vital research productivity tools, differing across licensing, cost, and collaborative architectures.\n\n1. License Type, Ownership, and Philosophy:\n- Zotero: Free, open-source software developed by the Roy Rosenzweig Center for History and New Media at George Mason University (now supported by the non-profit Corporation for Digital Scholarship). Strong commitment to privacy, data portability, and open research.\n- Mendeley: Proprietary software owned by commercial publisher Elsevier. Integrates social networking and publisher metrics.\n- EndNote: Commercial proprietary software developed by Clarivate. The industry standard across corporate R&D, pharmaceutical labs, and large research universities.\n\n2. Cost and Cloud Storage Tiers:\n- Zotero: Desktop client is 100% free with unlimited local storage. Free cloud sync includes 300 MB (sufficient for thousands of metadata records); paid upgrades exist (2 GB for $20/yr; unlimited for $120/yr). Alternatively, users can link free third-party cloud storage (WebDAV, Google Drive) for unlimited free PDF synchronization.\n- Mendeley: Free tier includes 2 GB of cloud storage; additional storage requires paid subscriptions.\n- EndNote: Expensive commercial software (individual license ~$250-$300; student license ~$150), though often provided via campus site licenses. EndNote Web provides 2 GB free or unlimited with desktop license.\n\n3. PDF Reader, Annotation, and Integration Features:\n- Zotero: Exceptional built-in tabbed PDF reader, color-coded highlighting, image area extraction, and markdown-friendly note export.\n- Mendeley: Excellent PDF annotation and mobile tablet reading interface; seamless export to Elsevier submission portals.\n- EndNote: Comprehensive reference management, advanced automated reference deduplication, and direct integration with Web of Science citation metrics.\n\nRecommendation for Agricultural Students:\nZotero is overwhelmingly recommended for undergraduate students due to its completely open-source architecture, absence of publisher lock-in, free WebDAV storage integration, and community support.",
      "outlinePoints": [
        "Licensing & Ownership: Open-source (Zotero) vs Commercial Publisher (Mendeley/Elsevier) vs Commercial Clarivate (EndNote)",
        "Pricing and cloud storage tiers: Free tiers, storage limits, and third-party WebDAV options",
        "PDF annotation and workflow tools",
        "Institutional adoption and citation engine performance",
        "Final recommendation for agricultural undergraduates"
      ]
    },
    {
      "id": "AGR220-U2-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "questionText": "Classify the major forms of academic plagiarism: Verbatim Copying, Mosaic Plagiarism, Paraphrasing Plagiarism, and Inaccurate Citation.",
      "contextScenario": "An academic integrity officer is preparing a tutorial explaining common plagiarism pitfalls to incoming agricultural students.",
      "modelAnswer": "Academic plagiarism takes varied forms, ranging from direct fraudulent copying to subtle uncredited paraphrasing.\n\n1. Verbatim Plagiarism (Direct / Word-for-Word Plagiarism):\n- Definition: Copying another author's exact sentences or text blocks word-for-word and pasting them into one's own document without quotation marks (\" \") and without proper attribution.\n- Severity: The most flagrant and easily detected violation, instantly flagged by anti-plagiarism algorithms.\n\n2. Mosaic Plagiarism (Patchwriting):\n- Definition: Lifting phrases, clauses, and sentence fragments from multiple different sources, rearranging their order, and weaving them together with occasional connecting words or synonyms without citing the original authors.\n- Severity: High; demonstrates deliberate intent to disguise borrowed content.\n\n3. Paraphrasing Plagiarism (Idea Theft / Inadequate Paraphrasing):\n- Definition: Rephrasing another author's unique arguments, data interpretations, or creative ideas in one's own words, but failing to provide an in-text citation acknowledging the intellectual source.\n- Severity: Moderate to high; even if words are original, the intellectual thought belongs to the source author and must be credited.\n\n4. Inaccurate Citation (Misleading / Deceptive Citation):\n- Definition: Fabricating citations (citing non-existent books or false journal pages), attributing quotes to the wrong author, or citing a secondary source as if the primary original paper was read.\n- Severity: Degrades scientific traceability and violates professional integrity.",
      "outlinePoints": [
        "Verbatim Plagiarism: Direct word-for-word copying without quotes or credit",
        "Mosaic Plagiarism (Patchwriting): Stitching together phrases with minor synonyms",
        "Paraphrasing Plagiarism: Re-writing concepts in one's own words without source citation",
        "Inaccurate Citation: Fabricated, ghost, or misleading secondary citations"
      ]
    },
    {
      "id": "AGR220-U2-SUB09",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "questionText": "Explain the concept of 'Personal Knowledge Management' (PKM) for agricultural students. Describe how to structure a digital knowledge base in Notion using the PARA (Projects, Areas, Resources, Archives) framework.",
      "contextScenario": "A student wants to build a long-term digital knowledge base to store coursework, field trial observations, internship data, and thesis literature notes.",
      "modelAnswer": "Personal Knowledge Management (PKM) is the intentional practice of capturing, organizing, distilling, and retrieving the digital information an individual encounters to support learning and productivity.\n\n1. The PARA Framework (Tiago Forte):\nThe PARA method organizes digital information strictly based on actionability rather than rigid subject folders, dividing all notes into four distinct tiers:\n\n- Projects (Active, short-term efforts with a definite deadline and outcome):\n  * Examples in Agriculture:\n    - 'Submit Soil Chemistry Lab Record by Friday'\n    - 'Draft NPTEL Week 4 Assignment'\n    - 'Prepare PPT for Agronomy Seminar on Oct 25'\n  * Management: Kept at the top of the Notion workspace for daily review; archived immediately upon completion.\n\n- Areas (Ongoing spheres of long-term responsibility with no end date):\n  * Examples in Agriculture:\n    - 'Academic Health: Semester 3 GPA Maintenance'\n    - 'Physical Crop Practical Plot Management'\n    - 'Agri-Internship Applications & Career Development'\n  * Management: Reviewed weekly to maintain standards.\n\n- Resources (Topics of ongoing interest and reference material for future projects):\n  * Examples in Agriculture:\n    - 'Weed Identification Photographic Database'\n    - 'Fertilizer Calculation Formula Sheets'\n    - 'ICAR Exam Question Papers & Syllabi'\n  * Management: Organized as digital wikis and tag-searchable reference databases in Notion.\n\n- Archives (Inactive items from the other three categories preserved for historical reference):\n  * Examples in Agriculture:\n    - 'Semester 1 and 2 Completed Course Notes'\n    - 'Past Year Mid-Term Examination Papers'\n    - 'Finished Crop Cafe Project'\n  * Management: Stored out of sight to keep the daily active workspace clean.\n\nBy deploying PARA in Notion, agricultural students prevent digital clutter, keeping active assignment deadlines visible while systematically accumulating long-term scientific capital.",
      "outlinePoints": [
        "Definition of Personal Knowledge Management (PKM)",
        "The PARA philosophy: Organizing by actionability rather than static subjects",
        "P - Projects: Active short-term deadlines (weekly assignments, seminar PPTs)",
        "A - Areas: Long-term responsibilities (GPA maintenance, plot trials)",
        "R - Resources: Permanent reference libraries (weed databases, formulas)",
        "A - Archives: Inactive historical projects and past semester notes"
      ]
    },
    {
      "id": "AGR220-U2-SUB10",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "questionText": "Discuss the ethical dimensions of using Artificial Intelligence (AI) writing assistants (e.g., ChatGPT, Claude) in undergraduate agricultural coursework. Analyze where legitimate academic assistance ends and academic misconduct begins, citing institutional guidelines.",
      "contextScenario": "An agricultural university academic council is formulating an official policy on student use of Generative AI tools in thesis writing and coursework.",
      "modelAnswer": "The rapid emergence of Generative Artificial Intelligence (GenAI) models (ChatGPT, Claude, Gemini) has revolutionized digital scholarship, creating profound ethical debates concerning academic integrity, authenticity, and student learning.\n\n1. Permissible and Legitimate Educational Uses of AI (Assistance & Scaffolding):\n- Brainstorming and Conceptual Clarification:\n  Asking an AI to explain complex concepts in simple terms (e.g., 'Explain the Kranz anatomy in C4 plants using an everyday analogy') acts as a personalized 24/7 tutor, supporting understanding.\n- Grammar and Syntax Polishing:\n  Using AI to identify grammatical errors, passive voice excesses, and awkward phrasing in a student's own draft improves academic communication, particularly for non-native English speakers.\n- Code Debugging & Search Syntax Formulation:\n  Generating R/Python scripts for ANOVA calculations or formulating complex boolean literature search queries accelerates analytical workflows.\n- Generating Study Flashcards and Practice Quizzes:\n  Pasting lecture notes into an AI to generate active recall self-test questions is a productive study technique.\n\n2. Unethical Uses Constituting Academic Misconduct (AI Plagiarism & Fraud):\n- Ghostwriting and Text Generation (AI Attribution Fraud):\n  Prompting an AI to write an entire assignment, literature review, or essay and submitting the output as one's own work constitutes severe academic fraud equivalent to contract cheating.\n- AI Hallucination & Fabricated Citations (Ghost References):\n  Large Language Models frequently hallucinate non-existent scientific references, inventing authors, journal volumes, and DOIs. Presenting these fabricated citations violates the fundamental scientific principle of empirical traceability.\n- Data Falsification and Synthetic Observations:\n  Using AI to generate synthetic field trial data (e.g., fabricated plant heights, chlorophyll readings, soil test values) constitutes scientific fraud and grounds for immediate expulsion.\n\n3. Institutional Policy and Transparency Guidelines (ICAR / UGC / COPE Standards):\n- Mandatory Disclosure & Attribution: Students must explicitly disclose the use of GenAI tools in an 'AI Acknowledgments' section, detailing the prompts used and the specific sections assisted.\n- Human Responsibility: The student remains 100% accountable for the accuracy, factual integrity, and originality of every word and citation in their manuscript. Ignorance of an AI hallucination is never an acceptable defense.\n- Authentic Assessment Redesign: Universities are shifting assessments toward in-person oral vivas, practical field demonstrations, and handwritten reflections that verify genuine student mastery.",
      "outlinePoints": [
        "Introduction to GenAI in higher education scholarship",
        "Permissible uses: Conceptual explanation, grammar refinement, R/Python debugging, flashcards",
        "Unethical misconduct: Direct AI ghostwriting, hallucinated citations, synthetic data fabrication",
        "Institutional guidelines: Mandatory AI disclosure, author accountability, ethical boundaries",
        "Assessment evolution: Oral defense and hands-on practical field verification"
      ]
    },
    {
      "id": "AGR220-U2-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "questionText": "Explain the difference between LTI (Learning Tools Interoperability) and API (Application Programming Interface) in integrating third-party tools into a university LMS.",
      "contextScenario": "A university IT department is integrating an external virtual microscopy lab into their Moodle LMS.",
      "modelAnswer": "Modern digital educational architectures rely on standardized integration standards to connect external educational tools with core Learning Management Systems.\n\n1. LTI (Learning Tools Interoperability):\n- Standard Authority: Developed and maintained by 1EdTech (formerly IMS Global Learning Consortium).\n- Purpose: A plug-and-play educational standard that allows external web-based learning applications (virtual laboratories, interactive simulators, third-party quiz engines) to be embedded directly inside an LMS course page seamlessly.\n- Key Capabilities:\n  * Single Sign-On (SSO): The student clicks a link in Moodle and enters the external virtual lab without logging in again.\n  * Secure Context Passing: Passes course ID, user role (student/teacher), and user identity securely.\n  * Grade Return Services: When the student finishes the virtual lab simulation, LTI automatically passes the earned score back into the Moodle Gradebook without manual teacher entry.\n\n2. API (Application Programming Interface):\n- Purpose: A general software intermediary that allows two independent applications to exchange data directly at the backend through programmatic requests (RESTful endpoints using JSON/XML).\n- Architectural Difference:\n  * While LTI provides a standardized, user-facing classroom embedding standard with built-in educational roles, an API allows custom backend data synchronization (e.g., connecting university student ERP databases with LMS course enrollments).\n  * APIs require custom coding and development, whereas LTI integrations are standardized configurations.",
      "outlinePoints": [
        "Conceptual definitions of LTI (1EdTech standard) and API (general programmatic interface)",
        "LTI features: Single Sign-On, secure role context passing, automated grade passback",
        "API features: Backend programmatic data exchange and custom database syncing",
        "Comparative educational utility in LMS environments"
      ]
    },
    {
      "id": "AGR220-U2-SUB12",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "questionText": "A student manuscript has citations formatted in APA 7th edition. Demonstrate the formatting differences between APA 7th and Harvard style for a journal article with three authors, both in-text and in the reference list.",
      "contextScenario": "A student is adapting their master's research paper for submission to a journal that mandates Harvard referencing instead of APA.",
      "modelAnswer": "While both APA 7th and Harvard styles belong to the Author-Date citation family, they exhibit distinct punctuation and formatting conventions.\n\n1. Hypothetical Research Article Details:\n- Authors: Rajesh K. Sharma, Anita Verma, and David P. Wilson\n- Year: 2023\n- Title: Bioherbicide formulation using invert emulsions for Parthenium control\n- Journal: Indian Journal of Weed Science\n- Volume & Issue: Volume 55, Issue 2\n- Pages: 145-152\n- DOI: https://doi.org/10.5958/0974-8164.2023.00025.1\n\n2. In-Text Citation Comparison:\n- APA 7th Edition:\n  * Parenthetical: (Sharma et al., 2023)\n  * Narrative: Sharma et al. (2023)\n  * Note: In APA 7th, works with three or more authors are abbreviated to 'et al.' on the very first citation.\n- Harvard Style:\n  * Parenthetical: (Sharma, Verma and Wilson, 2023) on first citation, or (Sharma et al., 2023) depending on specific university variant.\n  * Narrative: Sharma, Verma and Wilson (2023)\n\n3. Reference List Entry Comparison:\n- APA 7th Edition:\n  Sharma, R. K., Verma, A., & Wilson, D. P. (2023). Bioherbicide formulation using invert emulsions for Parthenium control. *Indian Journal of Weed Science*, *55*(2), 145\u2013152. https://doi.org/10.5958/0974-8164.2023.00025.1\n  * Key Formatting Rules: Ampersand (&) before the final author; sentence case for article title; journal title and volume number in *italics*; issue number in parentheses without italics; active https://doi.org URL without 'DOI:' prefix.\n- Harvard Style:\n  Sharma, R.K., Verma, A. and Wilson, D.P. (2023) 'Bioherbicide formulation using invert emulsions for Parthenium control', *Indian Journal of Weed Science*, 55(2), pp. 145-152. doi: 10.5958/0974-8164.2023.00025.1.\n  * Key Formatting Rules: 'and' written out instead of ampersand; article title enclosed in single quotation marks; 'pp.' abbreviation preceding page numbers; volume in normal font.",
      "outlinePoints": [
        "Introduction to the Author-Date citation family",
        "Sample article metadata parameters",
        "In-text citation rules: APA 7th immediate 'et al.' vs Harvard multiple-author rules",
        "Reference list typography: Ampersand vs 'and', quotation marks around titles, italicized volume numbers, and page number prefixes ('pp.')",
        "DOI formatting differences"
      ]
    },
    {
      "id": "AGR220-U2-SUB13",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "questionText": "Compare Hierarchical Note-Taking (Notion) and Networked Note-Taking (Obsidian) with respect to data storage, mental models, interlinking capabilities, and long-term knowledge retention.",
      "contextScenario": "An agricultural research student is selecting software for their four-year doctoral research knowledge repository.",
      "modelAnswer": "Modern personal knowledge management (PKM) software is divided into two contrasting architectures: Hierarchical Folder Systems and Networked Graph Systems.\n\n1. Underlying Data Storage and Ownership:\n- Notion (Cloud-Based Proprietary Database):\n  * Storage Architecture: All notes, tables, and media reside on Notion's proprietary cloud servers (AWS). Notes exist as database blocks.\n  * Data Ownership: Dependent on internet connectivity and company server availability. Exporting complex nested relational databases to other platforms is technically difficult.\n- Obsidian (Local-First Plain Markdown):\n  * Storage Architecture: Operates directly on a local folder ('Vault') of plain-text Markdown (.md) files on the user's hard drive.\n  * Data Ownership: 100% user-owned, offline-functional, and future-proof. Even if Obsidian ceases to exist, plain Markdown files can be opened by any text editor 50 years from now.\n\n2. Mental Model and Organizational Paradigm:\n- Notion (Top-Down Hierarchical Taxonomy):\n  * Relies on structured nested pages, relational databases, kanban boards, and folders. Emphasizes structured planning, project management, and team collaboration.\n- Obsidian (Bottom-Up Networked Rhizome):\n  * Discards rigid folder categorization in favor of bidirectional hyperlinking ([[concept]]). Reflects the biological brain's associative neural network: thoughts link naturally across disciplines without forcing them into artificial folder silos.\n\n3. Interlinking and Graph Visualization:\n- Notion: Supports page linking and database relations, but lacks global associative discovery.\n- Obsidian: Features interactive local and global Graph Views that visually display nodes (notes) and connecting edges (hyperlinks). Clicking on unlinked mentions uncovers hidden conceptual connections across disparate lecture notes.\n\nRecommendation for Agriculture Scholars:\nUse Notion for active project management, semester course schedules, and collaborative group tasks. Use Obsidian for synthesizing scientific research, building literature matrices, and drafting doctoral dissertations.",
      "outlinePoints": [
        "Data storage & ownership: Cloud proprietary database (Notion) vs Local-first plain Markdown (Obsidian)",
        "Organizational paradigm: Top-down hierarchical taxonomy vs Bottom-up networked associative thinking",
        "Interlinking capabilities: Relational tables vs Bidirectional links and visual graph maps",
        "Long-term digital preservation and durability",
        "Practical recommendation for agricultural students"
      ]
    },
    {
      "id": "AGR220-U2-SUB14",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "questionText": "Interpret an anti-plagiarism similarity report generated by Turnitin or Ouriginal. Explain how to differentiate acceptable technical matches from genuine intellectual plagiarism.",
      "contextScenario": "A postgraduate thesis supervisor receives a Turnitin similarity report indicating a 24% overall similarity index on a student's dissertation draft.",
      "modelAnswer": "An anti-plagiarism report cannot replace academic human judgment; software generates a 'Similarity Index' indicating text matching, not an absolute 'Plagiarism Score'. An analytical review must distinguish benign matches from fraudulent intellectual appropriation.\n\n1. Decoding the Turnitin / Ouriginal Interface:\n- Overall Similarity Percentage: Displays aggregate matched text against: (a) Student paper repository, (b) Web crawled pages, and (c) Periodicals/journals.\n- Color-Coded Match Breakdown: Highlights matched text strings in corresponding colors linked to a ranked source list on the right sidebar.\n- Match Context View: Shows the original published source side-by-side with the submitted manuscript passage.\n\n2. Identifying Acceptable and Benign Similarities (False Positives):\n- Standard Laboratory Protocols & Materials: Common experimental descriptions ('soil samples were air-dried in shade, crushed with a wooden mortar, and passed through a 2 mm sieve') represent standardized technical language with limited alternative phrasing.\n- Binomial Taxonomic Nomenclature: Complete scientific species names and author citations (e.g., *Colletotrichum gloeosporioides* (Penz.) Penz. & Sacc.) match existing papers.\n- Properly Attributed Block Quotes: Verbatim text enclosed in quotation marks with explicit citations and page numbers.\n- Institutional Cover Pages & Statutory Certificates: Mandatory university thesis declarations, bonafide certificates, and supervisor approval sheets inflate baseline similarity.\n\n3. Diagnosing Genuine Unethical Plagiarism (True Positives):\n- Patchwriting in the Literature Review: Clusters of highlighted sentences from 3-4 papers stitched together with minor synonym substitutions and no attribution.\n- Results & Discussion Theft: The most egregious violation: matching paragraphs in the discussion section where the student claims another author's findings, interpretations, or hypotheses as their own original insights.\n- Single-Source Domination: If 15% out of the 24% total similarity originates from a single published paper, it reveals extensive copy-pasting of that specific manuscript.\n\nRemedial Action:\nConfigure software filters to exclude bibliography, quotations, and matches <1%. If the residual similarity index drops below 10% and Discussion matches disappear, the thesis is cleared.",
      "outlinePoints": [
        "Similarity index vs true plagiarism: Software detection limits",
        "Interface architecture: Color-coded text overlays and source comparison panels",
        "Acceptable matches: Standard lab procedures, botanical binomials, properly attributed quotes, cover templates",
        "Unethical matches: Discussion interpretation theft, mosaic patchwriting, single-source domination",
        "Corrective filtering protocols and thesis clearance"
      ]
    },
    {
      "id": "AGR220-U2-SUB15",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA",
      "questionText": "Explain the Open Access (OA) publishing movement. Differentiate between Gold Open Access and Green Open Access.",
      "contextScenario": "An agricultural research scholar is deciding whether to pay an Article Processing Charge (APC) for journal publication or self-archive in KrishiKosh.",
      "modelAnswer": "The Open Access (OA) movement emerged from the Budapest Open Access Initiative (2002) to remove subscription paywalls from scholarly scientific research, granting anyone with an internet connection free, unrestricted rights to read, download, copy, and distribute peer-reviewed research.\n\n1. Gold Open Access (Publisher-Hosted OA):\n- Mechanism: The final published article (Version of Record) is made freely and permanently accessible to the public immediately upon publication directly on the journal publisher's website under a Creative Commons license (typically CC BY).\n- Financial Model: Publication costs are typically covered by an Article Processing Charge (APC) paid by the author, their research institution, or funding agency (e.g., ICAR/DST grants).\n- Copyright: Authors generally retain copyright of their work.\n- Advantage: Immediate global visibility, high citation impact, and zero access barriers.\n\n2. Green Open Access (Self-Archiving OA):\n- Mechanism: The article is published in a traditional subscription-based paywalled journal, but the author is permitted to self-archive a version of the manuscript (usually the peer-reviewed Author Accepted Manuscript / postprint) in an open-access institutional repository (e.g., KrishiKosh) or subject repository (e.g., AgEcon Search).\n- Financial Model: Free of charge; no Article Processing Charges (APCs) are levied on authors.\n- Embargo Periods: Commercial publishers frequently mandate an embargo period (typically 6 to 12 months) during which the self-archived manuscript cannot be made publicly downloadable.\n- Advantage: Enables researchers with zero funding to make their research publicly accessible compliant with open science mandates.",
      "outlinePoints": [
        "Origins of the Open Access movement (Budapest Initiative 2002)",
        "Gold Open Access: Immediate publisher-hosted access, CC BY licensing, and APC funding",
        "Green Open Access: Self-archiving postprints in repositories (KrishiKosh) without APCs",
        "Key differences regarding embargo periods, costs, and copyright retention"
      ]
    },
    {
      "id": "AGR220-U2-SUB16",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts",
      "questionText": "Explain how Google Scholar's citation indexing works. Define the 'Cited by' feature, 'Create Alert' function, and Google Scholar Metrics (h5-index).",
      "contextScenario": "An agricultural undergraduate student wants to track emerging research on CRISPR gene editing in rice crops.",
      "modelAnswer": "Google Scholar is a free, multidisciplinary scholarly search engine that crawls university repositories, journal publishers, pre-print servers, and academic websites to index scholarly literature.\n\n1. The 'Cited by' Feature (Forward Citation Chaining):\n- Function: Beneath each search result, a hyperlink displays 'Cited by [N]' (e.g., 'Cited by 142').\n- Analytical Value: Clicking this link displays all subsequent published papers that cited the original work.\n- Research Application: Enables forward citation tracking. If a student finds a seminal foundational paper published in 2015, following the 'Cited by' link immediately uncovers recent studies from 2023-2026 that verified, challenged, or expanded upon that discovery.\n\n2. The 'Create Alert' Function (Automated Literature Surveillance):\n- Function: Located on the left sidebar of any search results page.\n- Research Application: Allows researchers to establish automated keyword notifications. For example, creating an alert for \"CRISPR gene editing\" AND \"rice blast\" prompts Google Scholar to scan daily crawl updates and deliver automated emails whenever a new article matching the query is indexed, eliminating manual re-searching.\n\n3. Google Scholar Metrics & the h5-index:\n- Definition: A bibliometric measure used by Google Scholar to evaluate and rank academic journals based on citations over a five-year rolling window.\n- Calculation: A journal has an h5-index of 30 if it published 30 articles in the last five full calendar years that have each received at least 30 citations.\n- The h5-median: The median citation count for the articles that make up the h5-index.\n- Research Utility: Helps students evaluate journal prestige and impact before selecting target reading lists.",
      "outlinePoints": [
        "Overview of Google Scholar web crawler architecture",
        "Forward citation chaining via the 'Cited by' hyperlink",
        "Automating research surveillance using the 'Create Alert' email feature",
        "Google Scholar Metrics: Definition and calculation of the h5-index and h5-median",
        "Utility for agricultural literature discovery"
      ]
    },
    {
      "id": "AGR220-U2-SUB17",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom",
      "questionText": "Compare Moodle, Canvas, and Google Classroom regarding hosting models, feature complexity, mobile usability, and institutional suitability for agricultural colleges.",
      "contextScenario": "An agricultural university ICT director is presenting an LMS evaluation report to the Vice-Chancellor.",
      "modelAnswer": "Agricultural colleges choose among diverse Learning Management Systems based on technical resources, budget, and pedagogical complexity.\n\n1. Hosting Architecture and Deployment:\n- Moodle: Open-source PHP software; typically self-hosted on institutional servers or managed via private cloud hosting (MoodleCloud). Requires dedicated campus IT administrators for server maintenance, security patching, and database backups.\n- Canvas: Cloud-native Software-as-a-Service (SaaS) hosted entirely on Amazon Web Services (AWS) by Instructure. Requires zero campus server hardware; automatic updates occur seamlessly in the cloud.\n- Google Classroom: Free cloud service integrated into Google Workspace for Education. Hosted entirely by Google with near-zero IT overhead.\n\n2. Feature Depth and Pedagogical Complexity:\n- Moodle: Highest feature complexity. Supports over 50 activity types, granular permission roles, advanced conditional access restrictions, SCORM packaging, and complex Gradebook formulas.\n- Canvas: Balanced complexity and modern design. Features SpeedGrader (rapid document preview and rubric scoring), discussion threads, outcomes tracking, and robust LTI integrations.\n- Google Classroom: Minimalist and lightweight. Essentially a streamlined document distribution and grading portal using Google Drive, Docs, and Forms. Lacks advanced gradebook formulas, timed quiz lockdown, or SCORM tracking.\n\n3. Mobile Responsiveness and Usability:\n- Moodle: Modern themes are mobile-friendly; official Moodle Mobile App supports offline downloading of content.\n- Canvas: Highly rated mobile apps (Canvas Student and Canvas Teacher) offering notification alerts and touch-screen grading.\n- Google Classroom: Clean, lightweight mobile app that operates reliably over low-speed 3G/4G connections on basic smartphones.\n\nInstitutional Recommendation:\nFor large agricultural universities managing formal semester examinations, multi-credit degree programs, and ICAR e-course curricula, Moodle or Canvas is essential. Google Classroom is ideal as a supplementary communication tool for single practical labs.",
      "outlinePoints": [
        "Hosting models: Self-hosted open-source (Moodle) vs Cloud SaaS (Canvas) vs Hosted Google Workspace",
        "Feature depth: Complex activity modules and gradebooks vs Lightweight document sharing",
        "Mobile usability and offline capability",
        "Institutional suitability for agricultural university degree management"
      ]
    },
    {
      "id": "AGR220-U2-SUB18",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)",
      "questionText": "Explain the concept of 'Academic Integrity'. Outline the fundamental values defined by the International Center for Academic Integrity (ICAI).",
      "contextScenario": "An agricultural university is conducting an academic integrity orientation for newly enrolled first-year students.",
      "modelAnswer": "Academic Integrity is the moral code and ethical policy of academia, encompassing the adherence to honest, transparent, and responsible scholarship in learning, teaching, and research.\n\nThe International Center for Academic Integrity (ICAI) defines six fundamental values that anchor genuine scholarship:\n\n1. Honesty:\nAcademic pursuits represent a quest for truth. Honesty requires truthful presentation of data, transparent acknowledgment of intellectual sources, and authentic completion of exams and assignments without deception.\n\n2. Trust:\nMutual trust fosters an environment where ideas can be shared openly without fear of intellectual theft. Faculty must trust that student submissions represent authentic effort; students must trust that grading is objective and fair.\n\n3. Fairness:\nEstablishing clear, predictable, and transparent evaluation standards applied impartially to all students, ensuring no learner receives unfair advantage through cheating or unauthorized aids.\n\n4. Respect:\nRecognizing and respecting the intellectual property and labor of peers, scholars, and instructors by citing sources accurately and participating constructively in academic discourse.\n\n5. Responsibility:\nPersonal accountability for one's learning and ethical choices. Students take ownership of their academic progress, resisting peer pressure to share exam questions or participate in collusion.\n\n6. Courage:\nHaving the moral fortitude to act on these values even in the face of academic adversity, tight deadlines, or peer pressure, and reporting academic misconduct when observed.\n\nIn agricultural sciences, academic integrity is paramount: falsifying field trial data or misreporting pesticide residues endangers food security, agricultural safety, and public health.",
      "outlinePoints": [
        "Conceptual definition of Academic Integrity in higher education",
        "The six ICAI fundamental values: Honesty, Trust, Fairness, Respect, Responsibility, Courage",
        "Detailed explanation of each ethical pillar",
        "Vital importance of integrity in agricultural food safety and research credibility"
      ]
    },
    {
      "id": "AGR220-U2-SUB19",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian",
      "questionText": "Discuss the 'Zettelkasten' method of knowledge management. Explain its core principles (atomicity, unique identification, bidirectional linking, and emergent structure) and describe how an agricultural student can implement it to synthesize literature for a research project.",
      "contextScenario": "A graduate student is preparing a comprehensive literature review on 'Microbial Biocontrol of Parasitic Weeds' and finds traditional folder-based notes too fragmented.",
      "modelAnswer": "The Zettelkasten (German for 'slip-box' or 'card index') is a knowledge management and thinking method formulated by 20th-century German sociologist Niklas Luhmann, who used it to publish over 70 books and 400 scientific articles.\n\n1. Core Architectural Principles of Zettelkasten:\n- Principle of Atomicity:\n  Each note ('Zettel') contains only one single, self-contained idea, written in the researcher's own words. Instead of creating a massive 20-page document covering an entire textbook chapter, the material is broken down into dozens of distinct, atomic concept notes.\n- Principle of Unique Identification:\n  Every note receives a permanent unique alphanumeric identifier (UID or timestamp, e.g., 202610301130) ensuring it can be addressed and linked without being altered by future reorganization.\n- Principle of Bidirectional Linking:\n  Notes are interconnected via explicit hyperlinks ([[Note Name]]), creating two-way associative connections identical to neural synapses. When Note A links to Note B, Note B automatically records a backlink to Note A.\n- Principle of Emergent Structure (No Pre-determined Hierarchy):\n  There are no rigid top-down folder hierarchies. Structure develops bottom-up as notes accumulate and cluster into organic thematic webs.\n\n2. Implementation Workflow for an Agricultural Research Review:\n- Step 1: Fleeting Notes (Temporary Capture):\n  While reading papers on Orobanche biocontrol on CeRA, jot down temporary thoughts and raw quotes in a digital scratchpad.\n- Step 2: Literature Notes (Source Summaries):\n  Create a bibliography entry in Zotero capturing author, date, and core findings.\n- Step 3: Permanent Notes (The Core Zettelkasten):\n  Transform literature notes into independent atomic thoughts written in your own words:\n  * Note 1: [[20261030-Colletotrichum germination requires 12h free moisture]]\n  * Note 2: [[20261030-Invert emulsions eliminate dew period requirement for mycoherbicides]]\n  * Note 3: [[20261030-Orobanche seed germination is triggered by host root strigolactones]]\n- Step 4: Interlinking and Synthesis:\n  Link Note 2 to Note 1: 'Because fungal spores require moisture [[Note 1]], formulating them in water-in-oil invert emulsions [[Note 2]] encapsulates water droplets around conidia, overcoming the atmospheric dew barrier.'\n- Step 5: Structure Notes (MOCs - Maps of Content):\n  When a cluster of interconnected notes reaches 15-20 cards, create a Structure Note summarizing the overarching narrative: [[MOC - Bioherbicide Formulation Strategies for Root Parasites]].\n\nOutcome:\nWhen drafting the final dissertation literature review, the student does not face a blank page; the narrative is already written in the interconnected permanent notes.",
      "outlinePoints": [
        "Historical origins of Niklas Luhmann's Zettelkasten methodology",
        "Four core principles: Atomicity, Unique Identification, Bidirectional Linking, Emergent Structure",
        "Five-step operational workflow: Fleeting notes, Literature notes, Permanent notes, Interlinking, Maps of Content (MOCs)",
        "Applied agricultural example: Synthesizing mycoherbicide formulation literature",
        "Eliminating writer's block through emergent scientific thinking"
      ]
    },
    {
      "id": "AGR220-U2-SUB20",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote",
      "questionText": "A student accidentally loses their laptop hard drive during thesis preparation. Formulate a resilient digital disaster recovery and synchronization strategy for reference management libraries, PDFs, and notes using cloud backup and the 3-2-1 backup rule.",
      "contextScenario": "An agricultural student experiences a sudden laptop hardware crash two weeks prior to dissertation submission, losing all un-synced local documents.",
      "modelAnswer": "Digital hardware failure, theft, ransomware, and file corruption represent severe risks during academic research. Implementing the industry-standard 3-2-1 Backup Strategy alongside automated cloud synchronization safeguards research assets against catastrophic loss.\n\n1. The 3-2-1 Backup Rule Defined:\n- 3 Copies of Data: Maintain the original working copy plus two distinct backups at all times.\n- 2 Different Media Types: Store copies across two different storage formats (e.g., internal laptop SSD and external physical USB hard drive or cloud object storage).\n- 1 Copy Offsite: Store at least one backup geographically offsite (in the cloud), protecting against local physical disasters (dormitory fire, flood, hardware theft).\n\n2. Concrete Disaster Recovery Setup for Zotero Research Libraries:\n- Native Zotero Cloud Sync (Metadata):\n  Enable automatic Zotero cloud sync under Preferences -> Sync. Bibliographic metadata, tags, notes, and collection folders sync continuously to the Zotero cloud server for free with zero storage caps.\n- WebDAV / Free Cloud PDF Synchronization:\n  Because the free Zotero cloud provides only 300 MB of file storage, link Zotero to a free 25 GB cloud storage account via WebDAV (e.g., Koofr, 4Shared) or utilize the free ZotFile / Attanger plugin to store PDF attachments inside a local Google Drive or OneDrive folder.\n- Zotero Data Directory Local Backup:\n  Locate the active Zotero data directory (containing the local SQLite database zotero.sqlite). Schedule an automated weekly backup script copying this folder to an external USB flash drive.\n\n3. Rapid Disaster Recovery Protocol (If Laptop is Stolen / Destroyed):\n- Step 1: Procure a replacement computer or borrow a university lab terminal.\n- Step 2: Install Zotero standalone and log in with your Zotero username and password.\n- Step 3: Click 'Sync'\u2014Zotero restores the complete library hierarchy, collections, notes, and citations from the cloud in under 5 minutes.\n- Step 4: Re-link WebDAV or Google Drive\u2014all attached research PDFs download instantly.\n- Step 5: Install the MS Word plugin and resume writing with zero lost citations.",
      "outlinePoints": [
        "The 3-2-1 Backup Strategy: 3 copies, 2 media formats, 1 offsite location",
        "Zotero native cloud metadata synchronization setup",
        "Free PDF storage via WebDAV / cloud drive integration",
        "Local SQLite database archiving to external USB drives",
        "Five-minute disaster recovery protocol on replacement hardware"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "AGR220-U2-FC01",
      "front": "What is an LMS?",
      "back": "Learning Management System: a web-based platform (e.g., Moodle, Canvas) for administering, delivering, tracking, and assessing digital courses.",
      "hint": "Platform for courses",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom"
    },
    {
      "id": "AGR220-U2-FC02",
      "front": "What is KrishiKosh?",
      "back": "The national institutional digital repository of ICAR and Indian Agricultural Universities hosting full-text theses, books, and reports.",
      "hint": "Indian agricultural theses repository",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA"
    },
    {
      "id": "AGR220-U2-FC03",
      "front": "What is CeRA?",
      "back": "Consortium for e-Resources in Agriculture: an ICAR initiative providing campus network access to thousands of international scientific journals.",
      "hint": "ICAR online journal consortium",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA"
    },
    {
      "id": "AGR220-U2-FC04",
      "front": "What is AGRIS?",
      "back": "International System for Agricultural Science and Technology: a global multilingual agricultural bibliographic database maintained by the FAO.",
      "hint": "FAO agricultural database",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA"
    },
    {
      "id": "AGR220-U2-FC05",
      "front": "What are the three page sections in the Cornell Note-Taking System?",
      "back": "1. Cue column (left); 2. Notes column (right); 3. Summary section (bottom).",
      "hint": "Left, right, bottom",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian"
    },
    {
      "id": "AGR220-U2-FC06",
      "front": "What is Zotero?",
      "back": "A free, open-source reference management software for collecting, organizing, citing, and sharing research sources.",
      "hint": "Open-source reference manager",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote"
    },
    {
      "id": "AGR220-U2-FC07",
      "front": "What is a DOI?",
      "back": "Digital Object Identifier: a permanent unique alphanumeric string linking directly to an electronic journal article or dataset on the web.",
      "hint": "Permanent electronic paper identifier",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts"
    },
    {
      "id": "AGR220-U2-FC08",
      "front": "What is Mosaic Plagiarism (Patchwriting)?",
      "back": "Borrowing text fragments from multiple sources and stitching them together with minor synonym changes without proper citation.",
      "hint": "Patchwork copying",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)"
    },
    {
      "id": "AGR220-U2-FC09",
      "front": "What similarity threshold represents Level 0 (acceptable tolerance) under UGC 2018 rules?",
      "back": "Similarities up to 10% are considered Level 0 with no penalty.",
      "hint": "Ten percent",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds"
    },
    {
      "id": "AGR220-U2-FC10",
      "front": "What penalty is imposed under UGC rules for Level 3 plagiarism (>60% similarity)?",
      "back": "The student's registration for the degree programme (Master's or Ph.D.) is permanently cancelled.",
      "hint": "Permanent degree cancellation",
      "syllabusTopic": "UGC regulations on academic integrity (2018) and similarity index thresholds"
    },
    {
      "id": "AGR220-U2-FC11",
      "front": "What is CAB Abstracts?",
      "back": "The premier global bibliographic database produced by CABI covering agriculture, forestry, and allied life sciences.",
      "hint": "CABI agricultural database",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts"
    },
    {
      "id": "AGR220-U2-FC12",
      "front": "What is an h-index?",
      "back": "A metric where an author has index h if h of their papers have at least h citations each.",
      "hint": "Author productivity and citation impact",
      "syllabusTopic": "Agricultural databases, indexing systems, and scholarly search: Google Scholar, Scopus, and CAB Abstracts"
    },
    {
      "id": "AGR220-U2-FC13",
      "front": "What is SCORM in e-learning?",
      "back": "Sharable Content Object Reference Model: technical standards enabling interactive courseware to package and run across any LMS.",
      "hint": "E-learning packaging standard",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom"
    },
    {
      "id": "AGR220-U2-FC14",
      "front": "What is Gold Open Access vs Green Open Access?",
      "back": "Gold OA is publisher-hosted immediate access (often with APCs); Green OA is author self-archiving in an institutional repository without fees.",
      "hint": "Publisher site vs Repository archiving",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA"
    },
    {
      "id": "AGR220-U2-FC15",
      "front": "What are the 4 tiers of the PARA note-taking system?",
      "back": "Projects (active deadlines), Areas (responsibilities), Resources (reference topics), Archives (completed inactive items).",
      "hint": "Projects, Areas, Resources, Archives",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian"
    },
    {
      "id": "AGR220-U2-FC16",
      "front": "What software powers KrishiKosh and university open-access repositories?",
      "back": "DSpace open-source repository software.",
      "hint": "Repository platform software",
      "syllabusTopic": "Digital libraries and repositories in agriculture: ICAR e-Courses, KrishiKosh, AGRIS, and CeRA"
    },
    {
      "id": "AGR220-U2-FC17",
      "front": "What is Markdown (.md)?",
      "back": "A lightweight plain-text markup language allowing easy formatting using simple characters (# for headings, ** for bold).",
      "hint": "Lightweight formatting syntax",
      "syllabusTopic": "Digital note-taking methodologies from online lectures: Cornell method, mind mapping, and Notion/Obsidian"
    },
    {
      "id": "AGR220-U2-FC18",
      "front": "What is LTI (Learning Tools Interoperability)?",
      "back": "A global standard allowing external educational tools (virtual labs, simulators) to plug seamlessly into an LMS with single sign-on and grade passback.",
      "hint": "LMS tool integration standard",
      "syllabusTopic": "Learning Management Systems (LMS) and e-learning platforms: Moodle, Canvas, and Google Classroom"
    },
    {
      "id": "AGR220-U2-FC19",
      "front": "What is Ouriginal (formerly Urkund)?",
      "back": "The automated text-similarity and plagiarism detection software provided to Indian universities by INFLIBNET under ShodhShuddhi.",
      "hint": "Indian university anti-plagiarism tool",
      "syllabusTopic": "Academic integrity, ethics, and plagiarism detection tools: Turnitin and Urkund (Ouriginal)"
    },
    {
      "id": "AGR220-U2-FC20",
      "front": "What is the 3-2-1 backup strategy for research data?",
      "back": "3 copies of data, on 2 different media formats, with 1 copy stored offsite in the cloud.",
      "hint": "3-2-1 data protection",
      "syllabusTopic": "Reference management and citation software: Zotero, Mendeley, and EndNote"
    }
  ]
};
