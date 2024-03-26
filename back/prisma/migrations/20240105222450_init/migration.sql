/*
  Warnings:

  - You are about to alter the column `lim_min_kwh` on the `Agent` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Agent" ALTER COLUMN "lim_min_kwh" SET DATA TYPE INTEGER;
