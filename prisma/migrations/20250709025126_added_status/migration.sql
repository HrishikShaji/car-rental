-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
