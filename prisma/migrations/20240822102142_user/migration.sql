/*
  Warnings:

  - You are about to drop the column `rol` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `rol`,
    ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'user';
