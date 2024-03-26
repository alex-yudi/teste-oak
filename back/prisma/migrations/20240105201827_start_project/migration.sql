-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link_logo" TEXT NOT NULL,
    "state_origin" TEXT NOT NULL,
    "cost_kwh" INTEGER NOT NULL,
    "lim_min_kwh" BIGINT NOT NULL,
    "total_customers" INTEGER NOT NULL,
    "evaluation_customers" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");
