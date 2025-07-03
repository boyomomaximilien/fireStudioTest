import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-headline font-bold mb-6">
            Notre Histoire
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Bienvenue chez Boutique Express, votre destination pour des produits
            uniques et de qualité. Notre mission est de vous offrir une
_x000D_ expérience d'achat exceptionnelle avec une sélection soignée d'articles
_x000D_ qui allient style, innovation et durabilité.
          </p>
          <p className="mb-4">
            Fondée en 2024, notre boutique est née d'une passion pour le design et
            l'artisanat. Nous parcourons le monde pour dénicher des trésors et
            collaborer avec des créateurs talentueux qui partagent nos valeurs.
          </p>
          <p>
            Chaque produit que nous proposons est choisi avec soin pour sa
            qualité, son originalité et son histoire. Nous croyons que les
            objets qui nous entourent doivent être beaux, fonctionnels et
            inspirants.
          </p>
        </div>
        <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
           <Image
            src="https://placehold.co/600x400"
            alt="À propos de nous"
            fill
            className="object-cover"
            data-ai-hint="team smiling"
          />
        </div>
      </div>
    </div>
  );
}
