
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/hero-section';
import BentoGrid, { BentoItem } from '@/components/ui/bento-grid';

const VidaNomada = () => {
  const heroBackground = "https://images.unsplash.com/photo-1501854140801-50d01698950b";
  
  const nomadaPosts = [
    {
      id: 1,
      title: "Cómo empezar tu vida como nómada digital",
      image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e",
      category: "Primeros pasos",
      date: "10 enero, 2023",
      description: "Todo lo que necesitas saber para dar el salto y comenzar a trabajar mientras viajas por el mundo.",
      link: "/vida-nomada/empezar-nomada-digital",
      size: "large" as const
    },
    {
      id: 2,
      title: "Los mejores destinos para nómadas digitales en 2023",
      image: "https://images.unsplash.com/photo-1605216663980-173a563fd8b9",
      category: "Destinos",
      date: "15 febrero, 2023",
      description: "Ciudades con buena conexión a internet, coste de vida asequible y comunidades de expatriados para trabajar remotamente.",
      link: "/vida-nomada/destinos-nomadas-digitales",
    },
    {
      id: 3,
      title: "Visados para nómadas digitales alrededor del mundo",
      image: "https://images.unsplash.com/photo-1571867424485-54a22483c467",
      category: "Legal",
      date: "3 marzo, 2023",
      description: "Guía completa de las diferentes opciones de visado para trabajadores remotos en distintos países.",
      link: "/vida-nomada/visados-nomadas-digitales",
    },
    {
      id: 4,
      title: "Organizando las finanzas como nómada digital",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031a831",
      category: "Finanzas",
      date: "20 marzo, 2023",
      description: "Cómo gestionar tus ingresos, impuestos, seguros y ahorros mientras vives viajando y trabajando en remoto.",
      link: "/vida-nomada/finanzas-nomada-digital",
    },
    {
      id: 5,
      title: "Equipaje esencial para nómadas digitales",
      image: "https://images.unsplash.com/photo-1545060894-9b7a7f8c07b8",
      category: "Equipamiento",
      date: "5 abril, 2023",
      description: "La lista definitiva de gadgets, ropa y accesorios para viajar ligero sin renunciar a lo necesario para trabajar.",
      link: "/vida-nomada/equipaje-nomada-digital",
    },
    {
      id: 6,
      title: "Coworkings alrededor del mundo",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      category: "Trabajo",
      date: "18 abril, 2023",
      description: "Los mejores espacios de coworking en destinos populares para nómadas digitales, con buenas instalaciones y networking.",
      link: "/vida-nomada/coworkings-nomadas",
      size: "large" as const
    },
    {
      id: 7,
      title: "La soledad del nómada digital",
      image: "https://images.unsplash.com/photo-1558019032-0c39bfb80c6b",
      category: "Salud mental",
      date: "2 mayo, 2023",
      description: "Cómo afrontar el aislamiento y construir conexiones significativas mientras viajas y trabajas en solitario.",
      link: "/vida-nomada/soledad-nomada-digital",
    },
    {
      id: 8,
      title: "Encontrar alojamiento como nómada digital",
      image: "https://images.unsplash.com/photo-1562619935-b2c89bb2c6f4",
      category: "Alojamiento",
      date: "20 mayo, 2023",
      description: "Estrategias para conseguir buenas opciones de alojamiento a medio plazo en diferentes destinos.",
      link: "/vida-nomada/alojamiento-nomada-digital",
    },
    {
      id: 9,
      title: "Herramientas y apps imprescindibles para trabajar en remoto",
      image: "https://images.unsplash.com/photo-1470350576089-539d5a852bf7",
      category: "Productividad",
      date: "8 junio, 2023",
      description: "El software y las aplicaciones que todo nómada digital necesita para mantener su productividad desde cualquier lugar.",
      link: "/vida-nomada/herramientas-nomada-digital",
    }
  ];

  return (
    <MainLayout>
      <HeroSection
        title="Vida Nómada"
        subtitle="Trabajar y viajar por el mundo: una forma de vida cada vez más accesible"
        backgroundImage={heroBackground}
      />
      
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Libertad, Flexibilidad y Aventura</h2>
            <p className="text-muted-foreground">
              La vida nómada digital combina lo mejor de dos mundos: la libertad de viajar y descubrir nuevos lugares 
              mientras mantienes tu carrera profesional. En esta sección compartimos experiencias, consejos 
              y recursos para quienes ya son nómadas digitales o sueñan con serlo.
            </p>
          </div>
          
          <BentoGrid>
            {nomadaPosts.map((post) => (
              <BentoItem
                key={post.id}
                title={post.title}
                image={post.image}
                category={post.category}
                date={post.date}
                description={post.description}
                link={post.link}
                size={post.size as "small" | "medium" | "large" | undefined}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
    </MainLayout>
  );
};

export default VidaNomada;
