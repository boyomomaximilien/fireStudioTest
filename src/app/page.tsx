import { getCategories, getProducts } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Category } from '@/lib/types';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Home({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = searchParams?.category;
  const products = getProducts();
  const categories = getCategories();

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-headline font-bold mb-2">
          Découvrez nos collections
        </h1>
        <p className="text-lg text-muted-foreground">
          Des produits uniques pour un style qui vous ressemble.
        </p>
      </header>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4 text-center md:text-left">Catégories</h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          <Link href="/" passHref>
             <Button variant={!selectedCategory ? 'default' : 'secondary'} size="sm">Tous</Button>
          </Link>
          {categories.map((category: Category) => (
            <Link href={`/?category=${category.id}`} key={category.id} passHref>
              <Button variant={selectedCategory === category.id ? 'default' : 'secondary'} size="sm">{category.name}</Button>
            </Link>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-muted-foreground">Aucun produit trouvé dans cette catégorie.</p>
        </div>
      )}
    </div>
  );
}
