-- CreateEnum
CREATE TYPE "MetaTagsEnum" AS ENUM ('Robots', 'Viewport', 'Charset', 'Content_type', 'Refresh', 'Author', 'Copyright', 'Title', 'Description', 'Keywords');

-- CreateEnum
CREATE TYPE "ExhibitorCategoryEnum" AS ENUM ('business', 'development', 'design', 'management', 'analytic', 'education', 'content', 'IT');

-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('image', 'video');

-- CreateEnum
CREATE TYPE "VisibleCostEnum" AS ENUM ('yes', 'no', 'text_only');

-- CreateEnum
CREATE TYPE "ConnectionTypeEnum" AS ENUM ('parent', 'child');

-- CreateEnum
CREATE TYPE "ProductTypeEnum" AS ENUM ('product', 'service');

-- CreateEnum
CREATE TYPE "PossibilityOfPurchaseEnum" AS ENUM ('wholesale', 'retail');

-- CreateEnum
CREATE TYPE "PaymentMethodEnum" AS ENUM ('cash', 'non_cash');

-- CreateEnum
CREATE TYPE "DeliveryMethodEnum" AS ENUM ('courier', 'fast_courier', 'mail', 'cdek');

-- CreateEnum
CREATE TYPE "StandardEnum" AS ENUM ('gost', 'iso');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tokenVersion" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "url" VARCHAR(512) NOT NULL,
    "type" "MediaType" NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "is_moderate" BOOLEAN NOT NULL DEFAULT false,
    "moderate_verdict" BOOLEAN NOT NULL DEFAULT false,
    "moderate_message" TEXT,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Catalog" (
    "id" SERIAL NOT NULL,
    "is_visible_cost" "VisibleCostEnum" NOT NULL,
    "authorId" INTEGER NOT NULL,
    "is_moderate" BOOLEAN NOT NULL DEFAULT false,
    "moderate_verdict" BOOLEAN NOT NULL DEFAULT false,
    "moderate_message" TEXT,

    CONSTRAINT "Catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exhibitor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(512) NOT NULL,
    "meta_tags" "MetaTagsEnum"[],
    "category" "ExhibitorCategoryEnum" NOT NULL,
    "description" TEXT,
    "company_description" TEXT,
    "logoId" INTEGER,
    "mail_logoId" INTEGER,
    "site_url" VARCHAR(512),
    "login" TEXT,
    "password" TEXT,
    "email" TEXT[],
    "notification_email" TEXT,
    "phone" TEXT,
    "contact_person" TEXT,
    "inn" TEXT,
    "legal_adress" TEXT,
    "factory_adress" TEXT,
    "location_table" TEXT,
    "partners_table" TEXT,
    "clients" TEXT,
    "portfolio" TEXT,
    "import_substitution" TEXT,
    "is_import_substitution" BOOLEAN DEFAULT false,
    "catalogId" INTEGER,
    "userId" INTEGER,
    "is_moderate" BOOLEAN DEFAULT false,
    "moderate_verdict" BOOLEAN DEFAULT false,
    "moderate_message" TEXT,

    CONSTRAINT "Exhibitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "adress" TEXT,
    "gps_coords" TEXT,
    "name" TEXT,
    "cooperation_type" TEXT,
    "partner_site_url" TEXT,
    "exhibitorId" INTEGER NOT NULL,
    "is_visible" BOOLEAN NOT NULL DEFAULT false,
    "is_moderate" BOOLEAN NOT NULL DEFAULT false,
    "moderate_verdict" BOOLEAN NOT NULL DEFAULT false,
    "moderate_message" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "display_order" SERIAL,
    "is_published" BOOLEAN DEFAULT false,
    "mediaId" INTEGER,
    "exhibitorId" INTEGER NOT NULL,
    "is_moderate" BOOLEAN NOT NULL DEFAULT false,
    "moderate_verdict" BOOLEAN NOT NULL DEFAULT false,
    "moderate_message" TEXT,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT,
    "rate" INTEGER,
    "companyId" INTEGER,
    "is_published" BOOLEAN DEFAULT false,
    "exhibitorId" INTEGER,
    "is_moderate" BOOLEAN NOT NULL DEFAULT false,
    "moderate_verdict" BOOLEAN NOT NULL DEFAULT false,
    "moderate_message" TEXT,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "connection_type" "ConnectionTypeEnum",
    "sub_category" INTEGER,
    "is_published" BOOLEAN DEFAULT false,
    "catalogId" INTEGER,
    "exhibitorId" INTEGER,
    "is_moderate" BOOLEAN NOT NULL DEFAULT false,
    "moderate_verdict" BOOLEAN NOT NULL DEFAULT false,
    "moderate_message" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "ProductTypeEnum",
    "manufacturer" TEXT,
    "brand" TEXT,
    "name" TEXT,
    "description" TEXT,
    "cost" DOUBLE PRECISION,
    "meta_tags" "MetaTagsEnum"[],
    "possibility_of_purchase" "PossibilityOfPurchaseEnum"[],
    "min_batch" INTEGER,
    "payment_method" "PaymentMethodEnum"[],
    "delivery_method" "DeliveryMethodEnum"[],
    "standards" "StandardEnum"[],
    "analogs" TEXT,
    "is_published" BOOLEAN DEFAULT false,
    "is_import_substitution" BOOLEAN DEFAULT false,
    "catalogId" INTEGER,
    "mediaId" INTEGER,
    "categoryId" INTEGER,
    "exhibitorId" INTEGER,
    "is_moderate" BOOLEAN NOT NULL DEFAULT false,
    "moderate_verdict" BOOLEAN NOT NULL DEFAULT false,
    "moderate_message" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "partner_site_url" TEXT,
    "content_type" "MediaType",
    "html_content" TEXT,
    "video_url" TEXT,
    "is_published" BOOLEAN DEFAULT false,
    "is_import_substitution" BOOLEAN DEFAULT false,
    "exhibitorId" INTEGER,
    "is_moderate" BOOLEAN NOT NULL DEFAULT false,
    "moderate_verdict" BOOLEAN NOT NULL DEFAULT false,
    "moderate_message" TEXT,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FeedbackToMedia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_medias" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Media_url_key" ON "Media"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Exhibitor_userId_key" ON "Exhibitor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_FeedbackToMedia_AB_unique" ON "_FeedbackToMedia"("A", "B");

-- CreateIndex
CREATE INDEX "_FeedbackToMedia_B_index" ON "_FeedbackToMedia"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_medias_AB_unique" ON "_medias"("A", "B");

-- CreateIndex
CREATE INDEX "_medias_B_index" ON "_medias"("B");

-- AddForeignKey
ALTER TABLE "Catalog" ADD CONSTRAINT "Catalog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Exhibitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exhibitor" ADD CONSTRAINT "Exhibitor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exhibitor" ADD CONSTRAINT "Exhibitor_logoId_fkey" FOREIGN KEY ("logoId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exhibitor" ADD CONSTRAINT "Exhibitor_mail_logoId_fkey" FOREIGN KEY ("mail_logoId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exhibitor" ADD CONSTRAINT "Exhibitor_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "Catalog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_exhibitorId_fkey" FOREIGN KEY ("exhibitorId") REFERENCES "Exhibitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_exhibitorId_fkey" FOREIGN KEY ("exhibitorId") REFERENCES "Exhibitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_exhibitorId_fkey" FOREIGN KEY ("exhibitorId") REFERENCES "Exhibitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Exhibitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "Catalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_exhibitorId_fkey" FOREIGN KEY ("exhibitorId") REFERENCES "Exhibitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "Catalog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_exhibitorId_fkey" FOREIGN KEY ("exhibitorId") REFERENCES "Exhibitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Case" ADD CONSTRAINT "Case_exhibitorId_fkey" FOREIGN KEY ("exhibitorId") REFERENCES "Exhibitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeedbackToMedia" ADD FOREIGN KEY ("A") REFERENCES "Feedback"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FeedbackToMedia" ADD FOREIGN KEY ("B") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_medias" ADD FOREIGN KEY ("A") REFERENCES "Media"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_medias" ADD FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
