/*
  Warnings:

  - The values [USER,POST] on the enum `ImageableType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ImageableType_new" AS ENUM ('User', 'Post');
ALTER TABLE "Image" ALTER COLUMN "imageable_type" TYPE "ImageableType_new" USING ("imageable_type"::text::"ImageableType_new");
ALTER TYPE "ImageableType" RENAME TO "ImageableType_old";
ALTER TYPE "ImageableType_new" RENAME TO "ImageableType";
DROP TYPE "public"."ImageableType_old";
COMMIT;
