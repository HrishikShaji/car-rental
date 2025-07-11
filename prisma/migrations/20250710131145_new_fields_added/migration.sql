/*
  Warnings:

  - You are about to drop the column `description` on the `Listing` table. All the data in the column will be lost.
  - Added the required column `city` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNo` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fleetSize` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobTitle` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "description",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL,
ADD COLUMN     "contactNo" INTEGER NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fleetSize" TEXT NOT NULL,
ADD COLUMN     "jobTitle" TEXT NOT NULL;
