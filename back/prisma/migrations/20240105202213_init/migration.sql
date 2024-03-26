/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Agent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link_logo" TEXT NOT NULL,
    "state_origin" TEXT NOT NULL,
    "cost_kwh" INTEGER NOT NULL,
    "lim_min_kwh" BIGINT NOT NULL,
    "total_customers" INTEGER NOT NULL,
    "evaluation_customers" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agent_name_key" ON "Agent"("name");
