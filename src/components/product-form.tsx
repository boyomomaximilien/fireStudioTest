'use client';

import { useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormState, useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getCategories } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { createDescriptionAction } from '@/app/actions';
import { Sparkles, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Le nom est requis."),
  keywords: z.string().optional(),
  description: z.string().min(10, "La description est requise."),
  price: z.coerce.number().min(0.01, "Le prix est requis."),
  category: z.string().min(1, "La catégorie est requise."),
  stock: z.coerce.number().min(0, "Le stock est requis."),
  imageUrl: z.string().url("L'URL de l'image n'est pas valide."),
});

type ProductFormValues = z.infer<typeof formSchema>;

function GeneratorButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} size="sm">
            {pending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Sparkles className="mr-2 h-4 w-4" />
            )}
            Générer
        </Button>
    )
}

function DescriptionGenerator() {
    const form = useFormContext<ProductFormValues>();
    const [state, formAction] = useFormState(createDescriptionAction, {
        message: '',
        description: null,
        errors: null,
    });

    useEffect(() => {
        if (state.description) {
            form.setValue('description', state.description);
        }
        if (state.message === 'error' && state.errors?.keywords) {
             form.setError('keywords', { type: 'manual', message: state.errors.keywords[0] });
        }
    }, [state, form]);

    return (
        <form action={formAction} className="space-y-2">
            <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Mots-clés pour la description</FormLabel>
                    <div className="flex gap-2">
                        <FormControl>
                            <Input placeholder="ex: t-shirt, coton, été" {...field} />
                        </FormControl>
                        <GeneratorButton />
                    </div>
                    <FormDescription>
                        L'IA générera une description à partir de ces mots-clés.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
        </form>
    )
}

export function ProductForm() {
  const { toast } = useToast();
  const categories = getCategories();
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      keywords: '',
      description: '',
      price: 0,
      category: '',
      stock: 0,
      imageUrl: '',
    },
  });

  function onSubmit(data: ProductFormValues) {
    console.log(data);
    toast({
      title: 'Produit ajouté !',
      description: `Le produit "${data.name}" a été créé avec succès.`,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du produit</FormLabel>
              <FormControl>
                <Input placeholder="T-shirt en coton" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <DescriptionGenerator />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description détaillée du produit..."
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-8">
            <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Prix</FormLabel>
                <FormControl>
                    <Input type="number" step="0.01" placeholder="29.99" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Stock</FormLabel>
                <FormControl>
                    <Input type="number" placeholder="100" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Catégorie</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une catégorie" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL de l'image</FormLabel>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Enregistrer le produit</Button>
      </form>
    </Form>
  );
}
