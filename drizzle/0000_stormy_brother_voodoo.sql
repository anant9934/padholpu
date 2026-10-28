CREATE TABLE "contact_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"email" text NOT NULL,
	"category" text NOT NULL,
	"subject" text,
	"message" text NOT NULL,
	"organization" text,
	"created_at" timestamp DEFAULT now()
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
CREATE TABLE "mentor_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"student_name" text NOT NULL,
	"student_email" text NOT NULL,
	"goal" text NOT NULL,
	"message" text NOT NULL,
	"mentor_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "mentors" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"title" text NOT NULL,
	"category" text NOT NULL,
	"expertise" text[] NOT NULL,
	"badge" text NOT NULL,
	"status" text NOT NULL,
	"image_url" text,
	"linkedin_url" text,
	"rating" real DEFAULT 4.8,
	"sessions_completed" integer DEFAULT 0,
	"session_duration" text DEFAULT '45 min',
	"created_at" timestamp DEFAULT now()
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
CREATE TABLE "quiz_attempts" (
	"id" serial PRIMARY KEY NOT NULL,
	"quiz_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"score" integer NOT NULL,
	"total_questions" integer NOT NULL,
	"percentage" real DEFAULT 0 NOT NULL,
	"completed_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "quizzes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"subject" text NOT NULL,
	"difficulty" text NOT NULL,
	"questions" jsonb NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "resource_downloads" (
	"id" serial PRIMARY KEY NOT NULL,
	"resource_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "resources" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"subject" text NOT NULL,
	"type" text NOT NULL,
	"url" text NOT NULL,
	"filename" text NOT NULL,
	"file_size" integer NOT NULL,
	"uploader_id" integer NOT NULL,
	"uploader_name" text NOT NULL,
	"uploader_username" text NOT NULL,
	"is_boosted" boolean DEFAULT false,
	"boost_expiry" timestamp,
	"created_at" timestamp DEFAULT now(),
	"bonus_awarded" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "session" (
	"sid" text PRIMARY KEY NOT NULL,
	"sess" jsonb NOT NULL,
	"expire" timestamp NOT NULL
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
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text,
	"reset_token" text,
	"reset_token_expires" timestamp,
	"password" text NOT NULL,
	"full_name" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"score" real DEFAULT 0,
	"slo_coins" real DEFAULT 0,
	"last_active_date" timestamp,
	"streak_count" integer DEFAULT 0,
	"bio" text,
	"avatar_url" text,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "exam_attempts_detailed" ADD CONSTRAINT "exam_attempts_detailed_session_id_exam_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."exam_sessions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_attempts_detailed" ADD CONSTRAINT "exam_attempts_detailed_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_questions" ADD CONSTRAINT "exam_questions_session_id_exam_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."exam_sessions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_questions" ADD CONSTRAINT "exam_questions_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_sessions" ADD CONSTRAINT "exam_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "leaderboard" ADD CONSTRAINT "leaderboard_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mentor_requests" ADD CONSTRAINT "mentor_requests_mentor_id_mentors_id_fk" FOREIGN KEY ("mentor_id") REFERENCES "public"."mentors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_quiz_id_quizzes_id_fk" FOREIGN KEY ("quiz_id") REFERENCES "public"."quizzes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resource_downloads" ADD CONSTRAINT "resource_downloads_resource_id_resources_id_fk" FOREIGN KEY ("resource_id") REFERENCES "public"."resources"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resource_downloads" ADD CONSTRAINT "resource_downloads_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resources" ADD CONSTRAINT "resources_uploader_id_users_id_fk" FOREIGN KEY ("uploader_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topics" ADD CONSTRAINT "topics_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "units" ADD CONSTRAINT "units_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_subject_scores" ADD CONSTRAINT "user_subject_scores_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "is_boosted_idx" ON "resources" USING btree ("is_boosted");--> statement-breakpoint
CREATE INDEX "user_subject_idx" ON "user_subject_scores" USING btree ("user_id","subject_name");--> statement-breakpoint
CREATE INDEX "subject_marks_idx" ON "user_subject_scores" USING btree ("subject_name","marks");--> statement-breakpoint
CREATE INDEX "users_score_idx" ON "users" USING btree ("score");--> statement-breakpoint
CREATE INDEX "users_coins_idx" ON "users" USING btree ("slo_coins");