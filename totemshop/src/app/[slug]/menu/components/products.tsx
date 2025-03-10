import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
interface ProdutsProps {
  products: Product[];
}

const Products = ({ products }: ProdutsProps) => {
  return (
    <div className="space-y-3 px-5">
      {products.map((product) => (
        <Link
          key={product.id}
          href="/"
          className="flex items-center justify-between gap-10 py-3 border-b"
        >
          {/* ESQUERDA */}
          <div>
            <h3 className="font-median text-sm">{product.name}</h3>
            <p className="text-muted-foreground line-clamp-2 text-sm">
              {product.description}
            </p>
            <p className="pt-3 text-sm font-semibold">
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>
          {/* DIREITA */}
          <div className="min-h[82px]min -w-[120px] relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
