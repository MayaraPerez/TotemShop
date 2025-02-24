import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodOption from "./components/ConsumptionMethodOption";

interface RestaurantPageProps {
  params: { slug: string };
}

const Restaurant = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl ?? "/fallback-image.png"}
          alt={restaurant.name ?? "Nome indisponível"}
          width={82}
          height={82}
        />
      </div>

      {/* TÍTULO */}
      <h2 className="font-semibold">{restaurant.name}</h2>

      {/* SEJA BEM-VINDO */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos oferecendo
          praticidade e sabor em cada detalhe!
        </p>
      </div>

      {/* OPÇÕES DE CONSUMO */}
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          imageUrl="/dine-in.png"
          imageAlt="Para comer aqui"
          buttonText="Para comer aqui"
        />

        <ConsumptionMethodOption
          imageUrl="/to-take.png"
          imageAlt="Para levar"
          buttonText="Para levar"
        />
      </div>
    </div>
  );
};

export default Restaurant;
