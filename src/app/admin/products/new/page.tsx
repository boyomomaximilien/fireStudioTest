import { ProductForm } from "@/components/product-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewProductPage() {
    return (
        <div>
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Nouveau Produit</CardTitle>
                    <CardDescription>Remplissez les informations ci-dessous pour ajouter un nouveau produit à votre boutique.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ProductForm />
                </CardContent>
            </Card>
        </div>
    )
}
