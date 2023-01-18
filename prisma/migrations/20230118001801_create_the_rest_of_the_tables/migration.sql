-- CreateTable
CREATE TABLE "habits_week_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "habit_id" TEXT NOT NULL,
    "week_day" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "day_habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "day_id" TEXT NOT NULL,
    "habits_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "habits_week_days_habit_id_week_day_key" ON "habits_week_days"("habit_id", "week_day");

-- CreateIndex
CREATE UNIQUE INDEX "Days_date_key" ON "Days"("date");

-- CreateIndex
CREATE UNIQUE INDEX "day_habits_day_id_habits_id_key" ON "day_habits"("day_id", "habits_id");
