'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Store, Package, Users, Mail, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const mainNav = [
  { href: '/', label: 'Boutique', icon: <Package className="h-4 w-4" /> },
  { href: '/about', label: 'À propos', icon: <Users className="h-4 w-4" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
];

const adminNav = [
    { href: '/admin', label: 'Admin', icon: <Settings className="h-4 w-4" /> },
];

export function Header() {
  const pathname = usePathname();

  const navLinks = pathname.startsWith('/admin') ? adminNav : mainNav;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Store className="h-6 w-6" />
            <span className="font-headline text-xl">Boutique Express</span>
          </Link>
        </div>
        <nav className="flex-1 flex items-center justify-end space-x-6 text-sm font-medium">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'hidden sm:flex items-center gap-2 transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
                {item.icon}
                {item.label}
            </Link>
          ))}
           <Link href="/admin" passHref>
            <Button variant="ghost" size="sm">Admin</Button>
           </Link>
        </nav>
      </div>
    </header>
  );
}
