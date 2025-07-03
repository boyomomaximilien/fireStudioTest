'use server';

import { generateProductDescription } from '@/ai/flows/generate-product-description';
import { z } from 'zod';

const schema = z.object({
  keywords: z.string().min(3, { message: 'Veuillez entrer au moins 3 caractères.' }),
});

type State = {
    message: 'success' | 'error' | '';
    description: string | null;
    errors: { keywords?: string[] } | null;
}

export async function createDescriptionAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = schema.safeParse({
    keywords: formData.get('keywords'),
  });

  if (!validatedFields.success) {
    return {
      message: 'error',
      description: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateProductDescription({ keywords: validatedFields.data.keywords });
    if (result.description) {
        return {
            message: 'success',
            description: result.description,
            errors: null,
        };
    } else {
        return {
            message: 'error',
            description: null,
            errors: { keywords: ["L'IA n'a pas pu générer de description."] }
        }
    }
  } catch (e) {
    console.error(e);
    return {
      message: 'error',
      description: null,
      errors: { keywords: ['Une erreur est survenue lors de la génération.'] },
    };
  }
}
