CREATE TABLE "daily_rewards" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer NOT NULL,
	"date" text NOT NULL,
	"silver_earned" integer DEFAULT 0 NOT NULL,
	"quiz_rewards_count" integer DEFAULT 0 NOT NULL,
	"has_daily_bonus" boolean DEFAULT false NOT NULL,
	CONSTRAINT "daily_rewards_user_date_unique" UNIQUE("user_id","date")
);
--> statement-breakpoint
CREATE TABLE "resource_reward_status" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"resource_id" integer NOT NULL,
	"reward_type" text NOT NULL,
	"awarded_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "resource_reward_unique" UNIQUE("resource_id","reward_type")
);
--> statement-breakpoint
CREATE TABLE "unlock_quizzes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer NOT NULL,
	"quiz_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "unlock_quizzes_user_quiz_unique" UNIQUE("user_id","quiz_id")
);
--> statement-breakpoint
CREATE TABLE "unlock_resources" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer NOT NULL,
	"resource_id" integer NOT NULL,
	"unlocked_at" timestamp DEFAULT now(),
	CONSTRAINT "unlock_resources_user_resource_unique" UNIQUE("user_id","resource_id")
);
--> statement-breakpoint
ALTER TABLE "resource_ownership" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "resource_ownership" CASCADE;--> statement-breakpoint
ALTER TABLE "quizzes" ADD COLUMN "is_premium" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "quizzes" ADD COLUMN "price_gold" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "resources" ADD COLUMN "price_gold" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "daily_rewards" ADD CONSTRAINT "daily_rewards_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resource_reward_status" ADD CONSTRAINT "resource_reward_status_resource_id_resources_id_fk" FOREIGN KEY ("resource_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "unlock_quizzes" ADD CONSTRAINT "unlock_quizzes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "unlock_quizzes" ADD CONSTRAINT "unlock_quizzes_quiz_id_quizzes_id_fk" FOREIGN KEY ("quiz_id") REFERENCES "public"."quizzes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "unlock_resources" ADD CONSTRAINT "unlock_resources_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "unlock_resources" ADD CONSTRAINT "unlock_resources_resource_id_resources_id_fk" FOREIGN KEY ("resource_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "daily_rewards_user_date_idx" ON "daily_rewards" USING btree ("user_id","date");--> statement-breakpoint
CREATE INDEX "unlock_quizzes_user_id_idx" ON "unlock_quizzes" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "unlock_resources_user_id_idx" ON "unlock_resources" USING btree ("user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "unique_utr" ON "orders" USING btree ("utr") WHERE "orders"."utr" IS NOT NULL;--> statement-breakpoint
ALTER TABLE "resources" DROP COLUMN "premium_price";--> statement-breakpoint
ALTER TABLE "ledger" ADD CONSTRAINT "ledger_reference_currency_unique" UNIQUE("reference_id","currency","type");--> statement-breakpoint
ALTER TABLE "quizzes" ADD CONSTRAINT "quiz_price_gold_check" CHECK ("quizzes"."price_gold" >= 0);--> statement-breakpoint
ALTER TABLE "resources" ADD CONSTRAINT "price_gold_check" CHECK ("resources"."price_gold" >= 0);