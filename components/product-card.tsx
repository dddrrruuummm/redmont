import Image from "next/image";
import { products } from "@/lib/site";

type Product = (typeof products)[number];

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group border-t border-ink/20 bg-transparent pt-5 transition">
      <div className="relative aspect-[5/4] overflow-hidden bg-mist">
        <Image src={product.image} alt={`${product.name} product category`} fill className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="py-5">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-wine">{product.category}</p>
        <h3 className="mt-3 text-2xl text-ink">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/60">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="border border-ink/10 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-ink/55">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
