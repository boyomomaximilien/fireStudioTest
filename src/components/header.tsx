'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Store, Package, Users, Mail, Settings, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from './ui/separator';

const mainNav = [
  { href: '/', label: 'Boutique', icon: <Package className="h-4 w-4" /> },
  { href: '/about', label: 'À propos', icon: <Users className="h-4 w-4" /> },
  { href: '/contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Store className="h-6 w-6" />
            <span className="font-headline text-xl">Boutique Express</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-2 px-3 py-2 transition-colors hover:text-primary rounded-md',
                pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
                {item.icon}
                {item.label}
            </Link>
          ))}
           <Link href="/admin" passHref>
            <Button variant={pathname.startsWith('/admin') ? 'secondary' : 'ghost'} size="sm">Admin</Button>
           </Link>
           <div className="pl-2">
             <ModeToggle />
           </div>
        </nav>

        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
                <SheetTitle className="sr-only">Menu</SheetTitle>
               <nav className="flex flex-col gap-2 mt-8">
                  <SheetClose asChild>
                     <Link href="/" className="flex items-center gap-2 font-bold mb-4">
                        <Store className="h-6 w-6" />
                        <span className="font-headline text-xl">Boutique Express</span>
                    </Link>
                  </SheetClose>

                  {mainNav.map((item) => (
                      <SheetClose asChild key={item.href}>
                          <Link
                          href={item.href}
                          className={cn(
                              'flex items-center gap-2 px-3 py-2 transition-colors hover:bg-accent rounded-md text-base font-medium',
                              pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                          )}
                          >
                              {item.icon}
                              {item.label}
                          </Link>
                      </SheetClose>
                  ))}
                  <Separator className="my-2" />
                  <SheetClose asChild>
                      <Link href="/admin" passHref>
                          <Button variant={pathname.startsWith('/admin') ? 'secondary' : 'ghost'} className="w-full justify-start gap-2 text-base font-medium">
                              <Settings className="h-4 w-4"/>
                              Admin
                          </Button>
                      </Link>
                  </SheetClose>
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
