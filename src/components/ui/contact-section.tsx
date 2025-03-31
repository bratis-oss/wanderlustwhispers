
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "¿Tienes alguna pregunta?",
  subtitle = "Nos encantaría saber de ti. Envíanos un mensaje y te responderemos lo antes posible.",
  className = '',
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="max-w-2xl mx-auto grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Nombre
              </label>
              <Input id="name" placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Asunto
            </label>
            <Input id="subject" placeholder="¿Sobre qué quieres hablar?" />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Mensaje
            </label>
            <Textarea
              id="message"
              placeholder="Tu mensaje aquí..."
              rows={6}
            />
          </div>
          
          <Button size="lg" className="w-full md:w-auto">
            Enviar mensaje
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
