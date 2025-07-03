import Image from 'next/image';
import type { Product } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getCategoryById } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryById(product.category);
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint="product image"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        {category && (
            <Badge variant="secondary" className="mb-2">{category.name}</Badge>
        )}
        <CardTitle className="text-lg font-bold font-headline mb-1">{product.name}</CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <p className="text-lg font-semibold text-primary">
          {product.price.toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR',
          })}
        </p>
      </CardFooter>
    </Card>
  );
}
