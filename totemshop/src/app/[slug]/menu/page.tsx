import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantHeader from "./component/header";

interface RestaurantMenuPageProps {
  params: { slug: string };
  searchParams: { consumptionMethod: string };
}

const isComsuptionMethodValid = (consumptionMethod: string) => {
  return ["TAKE_AWAY", "DINE_IN"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = params;
  const { consumptionMethod } = searchParams;

  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }

  if (!isComsuptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />
    </div>
  );
};

export default RestaurantMenuPage;
