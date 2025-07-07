import type { Product, Category } from './types';

const categories: Category[] = [
  { id: 'smartphones', name: 'Smartphones' },
  { id: 'laptops', name: 'Ordinateurs Portables' },
  { id: 'headphones', name: 'Casques & Écouteurs' },
  { id: 'accessories', name: 'Accessoires' },
];

const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone X-Pro 12',
    description: 'Le dernier cri de la technologie mobile, avec un appareil photo révolutionnaire et une puce ultra-rapide.',
    price: 999.99,
    imageUrl: 'https://placehold.co/600x400',
    category: 'smartphones',
    stock: 50,
  },
  {
    id: '2',
    name: 'Ultrabook Z-Book Air',
    description: 'Finesse, légèreté et puissance. L\'ordinateur portable idéal pour les professionnels en déplacement.',
    price: 1499.0,
    imageUrl: 'https://placehold.co/600x400',
    category: 'laptops',
    stock: 30,
  },
  {
    id: '3',
    name: 'Casque Audio "Aura"',
    description: 'Plongez dans un son immersif avec une réduction de bruit active de pointe.',
    price: 349.5,
    imageUrl: 'https://placehold.co/600x400',
    category: 'headphones',
    stock: 120,
  },
  {
    id: '4',
    name: 'Chargeur sans fil "QuickCharge"',
    description: 'Rechargez vos appareils compatibles rapidement et sans effort.',
    price: 49.99,
    imageUrl: 'https://placehold.co/600x400',
    category: 'accessories',
    stock: 200,
  },
  {
    id: '5',
    name: 'Smartphone Nova 5G',
    description: 'La vitesse de la 5G dans un design élégant et abordable. Capturez et partagez vos moments instantanément.',
    price: 499.0,
    imageUrl: 'https://placehold.co/600x400',
    category: 'smartphones',
    stock: 80,
  },
  {
    id: '6',
    name: 'Batterie externe PowerCore 20000mAh',
    description: 'Ne tombez plus jamais en panne de batterie. Capacité énorme pour de multiples recharges.',
    price: 59.99,
    imageUrl: 'https://placehold.co/600x400',
    category: 'accessories',
    stock: 150,
  },
  {
    id: '7',
    name: 'Écouteurs sans fil "SoundPods"',
    description: 'Liberté totale avec un son cristallin. Parfaits pour le sport et les appels.',
    price: 179.0,
    imageUrl: 'https://placehold.co/600x400',
    category: 'headphones',
    stock: 250,
  },
  {
    id: '8',
    name: 'Station de jeu "Gamer-X"',
    description: 'Performances extrêmes pour les gamers exigeants. Carte graphique de dernière génération et écran 144Hz.',
    price: 2199.0,
    imageUrl: 'https://placehold.co/600x400',
    category: 'laptops',
    stock: 25,
  },
];

export const getProducts = () => products;
export const getCategories = () => categories;
export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getCategoryById = (id: string) => categories.find((c) => c.id === id);
