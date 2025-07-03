import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-headline font-bold mb-4">Contactez-nous</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Une question ? Une suggestion ? N'hésitez pas à nous écrire. Notre
          équipe vous répondra dans les plus brefs délais.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
