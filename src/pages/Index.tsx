
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/hero-section';
import BentoGrid, { BentoItem } from '@/components/ui/bento-grid';
import { Button } from '@/components/ui/button';
import ContactSection from '@/components/ui/contact-section';

const Index = () => {
  // Image URLs (Replace with actual images in a real implementation)
  const heroBackground = "https://images.unsplash.com/photo-1501854140801-50d01698950b";
  
  const featuredTrips = [
    {
      id: 1,
      title: "Exploración de los fiordos noruegos",
      image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3",
      category: "Europa",
      date: "15 abril, 2023",
      description: "Descubre la majestuosidad de los fiordos noruegos en un viaje lleno de paisajes impresionantes y aventuras inolvidables.",
      link: "/destinos/fiordos-noruegos"
    },
    {
      id: 2,
      title: "La ruta del sake en Japón",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
      category: "Asia",
      date: "22 mayo, 2023",
      description: "Un recorrido cultural por las mejores destilerías de sake en Japón, combinando tradición, gastronomía y paisajes urbanos únicos.",
      link: "/destinos/ruta-sake-japon",
      size: "large" as const
    },
    {
      id: 3,
      title: "Patagonia: Tierra de contrastes",
      image: "https://images.unsplash.com/photo-1494587351196-bbf5f29cff42",
      category: "Sudamérica",
      date: "8 junio, 2023",
      description: "Aventúrate en los impresionantes paisajes patagónicos entre Argentina y Chile, donde la naturaleza salvaje te espera.",
      link: "/destinos/patagonia"
    }
  ];
  
  const shortTrips = [
    {
      id: 1,
      title: "Fin de semana en Lisboa",
      image: "https://images.unsplash.com/photo-1580323956656-26bbb1206e34",
      category: "Europa",
      date: "3 marzo, 2023",
      description: "48 horas intensas para descubrir lo mejor de la capital portuguesa: gastronomía, cultura y vistas increíbles.",
      link: "/escapadas/lisboa-fin-de-semana"
    },
    {
      id: 2,
      title: "Escapada a los pueblos de la Costa Brava",
      image: "https://images.unsplash.com/photo-1559735614-e35ef860a156",
      category: "España",
      date: "12 abril, 2023",
      description: "Recorre los pintorescos pueblos costeros del Mediterráneo catalán en una escapada perfecta para desconectar.",
      link: "/escapadas/pueblos-costa-brava"
    },
    {
      id: 3,
      title: "Un día en Toledo",
      image: "https://images.unsplash.com/photo-1558799401-7c3ffbd6093f",
      category: "España",
      date: "5 mayo, 2023",
      description: "La ciudad de las tres culturas te espera con sus callejuelas medievales, monumentos históricos y gastronomía tradicional.",
      link: "/escapadas/toledo-un-dia"
    }
  ];
  
  const latestPosts = [
    {
      id: 1,
      title: "10 consejos para hacer las maletas como un profesional",
      image: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de1",
      category: "Consejos",
      date: "28 junio, 2023",
      description: "Aprende a maximizar el espacio y organizar tu equipaje de forma eficiente para cualquier tipo de viaje.",
      link: "/consejos-de-viaje/maletas-profesional"
    },
    {
      id: 2,
      title: "Trabajar como nómada digital en el sudeste asiático",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      category: "Vida nómada",
      date: "15 julio, 2023",
      description: "Todo lo que necesitas saber sobre coworkings, visados y costes de vida para trabajar remotamente desde Tailandia, Vietnam o Bali.",
      link: "/vida-nomada/nomada-digital-sudeste-asiatico"
    },
    {
      id: 3,
      title: "Los mejores miradores secretos de Barcelona",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
      category: "España",
      date: "2 agosto, 2023",
      description: "Descubre rincones poco conocidos de la ciudad condal para disfrutar de vistas panorámicas lejos de las multitudes.",
      link: "/destinos/miradores-barcelona"
    }
  ];

  return (
    <MainLayout>
      <HeroSection
        title="Explora el mundo con NomadGo"
        subtitle="Viajar no es solo visitar lugares, es crear recuerdos para toda la vida"
        backgroundImage={heroBackground}
        height="large"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Descubrir destinos
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
            Últimos artículos
          </Button>
        </div>
      </HeroSection>
      
      {/* Featured Trips Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Viajes Destacados</h2>
              <p className="text-muted-foreground">Destinos impresionantes seleccionados por nuestros expertos viajeros</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              Ver todos los destinos
            </Button>
          </div>
          
          <BentoGrid>
            {featuredTrips.map((trip) => (
              <BentoItem
                key={trip.id}
                title={trip.title}
                image={trip.image}
                category={trip.category}
                date={trip.date}
                description={trip.description}
                link={trip.link}
                size={trip.size as "small" | "medium" | "large" | undefined}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
      
      {/* Short Trips Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Escapadas Cortas</h2>
              <p className="text-muted-foreground">Viajes perfectos para cuando no dispones de mucho tiempo</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              Ver todas las escapadas
            </Button>
          </div>
          
          <BentoGrid>
            {shortTrips.map((trip) => (
              <BentoItem
                key={trip.id}
                title={trip.title}
                image={trip.image}
                category={trip.category}
                date={trip.date}
                description={trip.description}
                link={trip.link}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
      
      {/* Latest Posts Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Últimos Artículos</h2>
              <p className="text-muted-foreground">Las experiencias y consejos más recientes de nuestros viajeros</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              Ver todos los artículos
            </Button>
          </div>
          
          <BentoGrid>
            {latestPosts.map((post) => (
              <BentoItem
                key={post.id}
                title={post.title}
                image={post.image}
                category={post.category}
                date={post.date}
                description={post.description}
                link={post.link}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection className="bg-secondary/30" />
    </MainLayout>
  );
};

export default Index;
