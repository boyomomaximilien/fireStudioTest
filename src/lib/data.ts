import type { Product, Category } from './types';

const categories: Category[] = [
  { id: 'vetements', name: 'Vêtements' },
  { id: 'accessoires', name: 'Accessoires' },
  { id: 'chaussures', name: 'Chaussures' },
  { id: 'deco', name: 'Décoration' },
];

const products: Product[] = [
  {
    id: '1',
    name: 'T-shirt en coton bio',
    description: 'Un t-shirt doux et confortable, parfait pour toutes les occasions.',
    price: 29.99,
    imageUrl: 'https://placehold.co/600x400',
    category: 'vetements',
    stock: 150,
  },
  {
    id: '2',
    name: 'Sac à dos en cuir végan',
    description: 'Élégant et pratique, ce sac à dos vous suivra partout.',
    price: 89.99,
    imageUrl: 'https://placehold.co/600x400',
    category: 'accessoires',
    stock: 75,
  },
  {
    id: '3',
    name: 'Baskets de ville',
    description: 'Des baskets au style moderne et à la semelle confortable.',
    price: 120.0,
    imageUrl: 'https://placehold.co/600x400',
    category: 'chaussures',
    stock: 120,
  },
  {
    id: '4',
    name: 'Vase en céramique',
    description: 'Une pièce unique pour sublimer votre intérieur.',
    price: 45.5,
    imageUrl: 'https://placehold.co/600x400',
    category: 'deco',
    stock: 40,
  },
  {
    id: '5',
    name: 'Jean slim fit',
    description: 'Un classique intemporel qui s\'adapte à toutes les morphologies.',
    price: 75.0,
    imageUrl: 'https://placehold.co/600x400',
    category: 'vetements',
    stock: 200,
  },
  {
    id: '6',
    name: 'Montre minimaliste',
    description: 'L\'élégance discrète à votre poignet.',
    price: 150.0,
    imageUrl: 'https://placehold.co/600x400',
    category: 'accessoires',
    stock: 60,
  },
  {
    id: '7',
    name: 'Mocassins en daim',
    description: 'Le confort et le style pour vos journées de travail ou de détente.',
    price: 99.0,
    imageUrl: 'https://placehold.co/600x400',
    category: 'chaussures',
    stock: 90,
  },
  {
    id: '8',
    name: 'Affiche décorative',
    description: 'Une touche artistique pour vos murs.',
    price: 19.99,
    imageUrl: 'https://placehold.co/600x400',
    category: 'deco',
    stock: 300,
  },
];

export const getProducts = () => products;
export const getCategories = () => categories;
export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getCategoryById = (id: string) => categories.find((c) => c.id === id);
