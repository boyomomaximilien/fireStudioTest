import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Tag } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-4xl font-headline font-bold mb-8">Tableau de bord</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-6 w-6" />
              <span>Gérer les Produits</span>
            </CardTitle>
            <CardDescription>
              Ajoutez, modifiez ou supprimez des produits de votre boutique.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/products" passHref>
              <Button>Voir les produits</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tag className="h-6 w-6" />
              <span>Gérer les Catégories</span>
            </CardTitle>
            <CardDescription>
              Organisez vos produits en créant des catégories.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button disabled>Bientôt disponible</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
