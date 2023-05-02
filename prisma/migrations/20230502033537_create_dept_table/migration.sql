-- CreateTable
CREATE TABLE "Dept" (
    "id" SERIAL NOT NULL,
    "aka" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Dept_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dept_aka_key" ON "Dept"("aka");

-- CreateIndex
CREATE UNIQUE INDEX "Dept_desc_key" ON "Dept"("desc");
