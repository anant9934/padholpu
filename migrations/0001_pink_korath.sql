CREATE TABLE "action_log" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"action_type" text NOT NULL,
	"ip" text,
	"score_awarded" real DEFAULT 0,
	"percentage" real,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "admin_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"admin_id" integer NOT NULL,
	"action" text NOT NULL,
	"target_type" text,
	"target_id" text,
	"before_state" jsonb,
	"after_state" jsonb,
	"ip" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exam_attempts_detailed" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	"selected_option" text,
	"is_correct" boolean,
	"marks_awarded" numeric DEFAULT '0',
	"answered_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "exam_questions" (
	"id" serial PRIMARY KEY NOT NULL,
	"session_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	"order_index" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exam_sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"subject" text NOT NULL,
	"difficulty" text NOT NULL,
	"total_questions" integer NOT NULL,
	"duration_minutes" integer NOT NULL,
	"negative_marking" boolean DEFAULT false,
	"marks_per_correct" numeric DEFAULT '1',
	"marks_per_wrong" numeric DEFAULT '0',
	"status" text DEFAULT 'ongoing' NOT NULL,
	"score" numeric DEFAULT '0',
	"percentage" real DEFAULT 0,
	"correct_count" integer DEFAULT 0,
	"wrong_count" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "leaderboard" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"subject" text NOT NULL,
	"score" numeric NOT NULL,
	"rank" integer,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "ledger" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer NOT NULL,
	"type" text NOT NULL,
	"currency" text NOT NULL,
	"source" text NOT NULL,
	"amount" integer NOT NULL,
	"reference_id" text,
	"status" text DEFAULT 'CONFIRMED' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "ledger_type_check" CHECK ("ledger"."type" IN ('CREDIT', 'DEBIT')),
	CONSTRAINT "ledger_currency_check" CHECK ("ledger"."currency" IN ('SILVER', 'GOLD')),
	CONSTRAINT "ledger_source_check" CHECK ("ledger"."source" IN ('UPI', 'REWARD', 'REDEMPTION', 'ADMIN')),
	CONSTRAINT "ledger_amount_check" CHECK ("ledger"."amount" > 0),
	CONSTRAINT "ledger_status_check" CHECK ("ledger"."status" IN ('PENDING', 'CONFIRMED'))
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer NOT NULL,
	"amount_inr" integer NOT NULL,
	"gold_coins" integer NOT NULL,
	"utr" text,
	"screenshot_url" text,
	"status" text DEFAULT 'PENDING' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "orders_utr_unique" UNIQUE("utr"),
	CONSTRAINT "orders_amount_check" CHECK ("orders"."amount_inr" > 0),
	CONSTRAINT "orders_gold_check" CHECK ("orders"."gold_coins" > 0),
	CONSTRAINT "orders_status_check" CHECK ("orders"."status" IN ('PENDING', 'UPLOADED', 'VERIFIED', 'REJECTED'))
);
--> statement-breakpoint
CREATE TABLE "questions" (
	"id" serial PRIMARY KEY NOT NULL,
	"subject_id" integer,
	"unit_id" integer,
	"topic_id" integer,
	"subject" text NOT NULL,
	"unit" text NOT NULL,
	"topic" text,
	"difficulty" text NOT NULL,
	"question_type" text DEFAULT 'MCQ' NOT NULL,
	"question" text NOT NULL,
	"option_a" text NOT NULL,
	"option_b" text NOT NULL,
	"option_c" text NOT NULL,
	"option_d" text NOT NULL,
	"correct_option" text NOT NULL,
	"explanation" text,
	"formula" text,
	"tags" text[],
	"estimated_time" integer,
	"created_by" integer,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "quiz_usage" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer NOT NULL,
	"month" text NOT NULL,
	"count" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "quiz_usage_user_month_unique" UNIQUE("user_id","month")
);
--> statement-breakpoint
CREATE TABLE "resource_downloads" (
	"id" serial PRIMARY KEY NOT NULL,
	"resource_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "resource_ownership" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"resource_id" integer NOT NULL,
	"unlocked_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "score_audit_log" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"action" text NOT NULL,
	"field" text NOT NULL,
	"delta" real NOT NULL,
	"new_total" real NOT NULL,
	"ip" text,
	"metadata" jsonb,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "subjects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"code" text NOT NULL,
	"total_units" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "subjects_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer NOT NULL,
	"type" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "subscriptions_type_check" CHECK ("subscriptions"."type" = 'UNLIMITED_QUIZ')
);
--> statement-breakpoint
CREATE TABLE "topics" (
	"id" serial PRIMARY KEY NOT NULL,
	"unit_id" integer NOT NULL,
	"topic_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "units" (
	"id" serial PRIMARY KEY NOT NULL,
	"subject_id" integer NOT NULL,
	"unit_number" integer NOT NULL,
	"unit_name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_subject_scores" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"subject_name" text NOT NULL,
	"marks" integer DEFAULT 0 NOT NULL,
	"last_updated" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "quiz_attempts" DROP CONSTRAINT "quiz_attempts_quiz_id_quizzes_id_fk";
--> statement-breakpoint
ALTER TABLE "quiz_attempts" DROP CONSTRAINT "quiz_attempts_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "resources" DROP CONSTRAINT "resources_uploaded_by_users_id_fk";
--> statement-breakpoint
ALTER TABLE "resources" ALTER COLUMN "uploaded_by" SET DEFAULT 1;--> statement-breakpoint
ALTER TABLE "contact_messages" ADD COLUMN "ticket_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "contact_messages" ADD COLUMN "priority" text DEFAULT 'normal' NOT NULL;--> statement-breakpoint
ALTER TABLE "contact_messages" ADD COLUMN "status" text DEFAULT 'new' NOT NULL;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD COLUMN "percentage" real DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "uploader_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "uploader_username" text NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "is_boosted" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "boost_expiry" timestamp;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "bonus_awarded" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "is_premium" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "premium_price" integer DEFAULT 5;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "reset_token" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "reset_token_expires" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "score" real DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "slo_coins" real DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_active_date" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "streak_count" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "bio" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "avatar_url" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "is_admin" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "is_shadow_banned" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "trust_level" text DEFAULT 'normal';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_action_at" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "daily_score_accumulated" real DEFAULT 0;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "daily_score_date" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "silver_coins" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "gold_coins" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" text DEFAULT 'USER' NOT NULL;--> statement-breakpoint
ALTER TABLE "action_log" ADD CONSTRAINT "action_log_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "admin_logs" ADD CONSTRAINT "admin_logs_admin_id_users_id_fk" FOREIGN KEY ("admin_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_attempts_detailed" ADD CONSTRAINT "exam_attempts_detailed_session_id_exam_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."exam_sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_attempts_detailed" ADD CONSTRAINT "exam_attempts_detailed_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_questions" ADD CONSTRAINT "exam_questions_session_id_exam_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."exam_sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_questions" ADD CONSTRAINT "exam_questions_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_sessions" ADD CONSTRAINT "exam_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "leaderboard" ADD CONSTRAINT "leaderboard_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ledger" ADD CONSTRAINT "ledger_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_usage" ADD CONSTRAINT "quiz_usage_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resource_downloads" ADD CONSTRAINT "resource_downloads_resource_id_resources_id_fk" FOREIGN KEY ("resource_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resource_downloads" ADD CONSTRAINT "resource_downloads_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resource_ownership" ADD CONSTRAINT "resource_ownership_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resource_ownership" ADD CONSTRAINT "resource_ownership_resource_id_resources_id_fk" FOREIGN KEY ("resource_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "score_audit_log" ADD CONSTRAINT "score_audit_log_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topics" ADD CONSTRAINT "topics_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "units" ADD CONSTRAINT "units_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_subject_scores" ADD CONSTRAINT "user_subject_scores_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "al_user_created_idx" ON "action_log" USING btree ("user_id","created_at");--> statement-breakpoint
CREATE INDEX "al_ip_created_idx" ON "action_log" USING btree ("ip","created_at");--> statement-breakpoint
CREATE INDEX "admin_logs_admin_id_idx" ON "admin_logs" USING btree ("admin_id");--> statement-breakpoint
CREATE INDEX "admin_logs_action_idx" ON "admin_logs" USING btree ("action");--> statement-breakpoint
CREATE INDEX "admin_logs_created_at_idx" ON "admin_logs" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "ledger_user_id_idx" ON "ledger" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "ledger_user_currency_idx" ON "ledger" USING btree ("user_id","currency");--> statement-breakpoint
CREATE INDEX "ledger_created_at_idx" ON "ledger" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "orders_user_id_idx" ON "orders" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "orders_status_idx" ON "orders" USING btree ("status");--> statement-breakpoint
CREATE INDEX "quiz_usage_user_id_idx" ON "quiz_usage" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "sal_user_created_idx" ON "score_audit_log" USING btree ("user_id","created_at");--> statement-breakpoint
CREATE INDEX "subscriptions_user_id_idx" ON "subscriptions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "subscriptions_expires_at_idx" ON "subscriptions" USING btree ("expires_at");--> statement-breakpoint
CREATE INDEX "user_subject_idx" ON "user_subject_scores" USING btree ("user_id","subject_name");--> statement-breakpoint
CREATE INDEX "subject_marks_idx" ON "user_subject_scores" USING btree ("subject_name","marks");--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_quiz_id_quizzes_id_fk" FOREIGN KEY ("quiz_id") REFERENCES "public"."quizzes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resources" ADD CONSTRAINT "resources_uploader_id_users_id_fk" FOREIGN KEY ("uploader_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "is_boosted_idx" ON "resources" USING btree ("is_boosted");--> statement-breakpoint
CREATE INDEX "users_score_idx" ON "users" USING btree ("score");--> statement-breakpoint
CREATE INDEX "users_coins_idx" ON "users" USING btree ("slo_coins");--> statement-breakpoint
CREATE INDEX "users_trust_idx" ON "users" USING btree ("trust_level");--> statement-breakpoint
CREATE INDEX "users_shadow_idx" ON "users" USING btree ("is_shadow_banned");--> statement-breakpoint
CREATE INDEX "users_role_idx" ON "users" USING btree ("role");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "silver_coins_check" CHECK ("users"."silver_coins" >= 0);--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "gold_coins_check" CHECK ("users"."gold_coins" >= 0);--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "role_check" CHECK ("users"."role" IN ('USER', 'ADMIN', 'SUPER_ADMIN', 'MENTOR'));