import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutGrid, Package, Settings, Tag } from "lucide-react";
import Link from "next/link";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
        <div className="container mx-auto py-10">
            {children}
        </div>
    </div>
  );
}
