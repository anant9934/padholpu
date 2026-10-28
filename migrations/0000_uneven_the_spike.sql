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
CREATE TABLE "quiz_attempts" (
	"id" serial PRIMARY KEY NOT NULL,
	"quiz_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"score" integer NOT NULL,
	"total_questions" integer NOT NULL,
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
CREATE TABLE "resources" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"subject" text NOT NULL,
	"type" text NOT NULL,
	"url" text NOT NULL,
	"filename" text NOT NULL,
	"file_size" integer NOT NULL,
	"uploaded_by" integer NOT NULL,
	"uploader_name" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "session" (
	"sid" text PRIMARY KEY NOT NULL,
	"sess" jsonb NOT NULL,
	"expire" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"full_name" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "mentor_requests" ADD CONSTRAINT "mentor_requests_mentor_id_mentors_id_fk" FOREIGN KEY ("mentor_id") REFERENCES "public"."mentors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_quiz_id_quizzes_id_fk" FOREIGN KEY ("quiz_id") REFERENCES "public"."quizzes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resources" ADD CONSTRAINT "resources_uploaded_by_users_id_fk" FOREIGN KEY ("uploaded_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;