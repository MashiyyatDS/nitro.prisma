-- RenameForeignKey
ALTER TABLE "Image" RENAME CONSTRAINT "post_imageableId" TO "post_imageable_id";

-- RenameForeignKey
ALTER TABLE "Image" RENAME CONSTRAINT "user_imageableId" TO "user_imageable_id";
