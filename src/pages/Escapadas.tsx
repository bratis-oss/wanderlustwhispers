
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/hero-section';
import BentoGrid, { BentoItem } from '@/components/ui/bento-grid';
import FilterButtons from '@/components/ui/filter-buttons';

const Escapadas = () => {
  const heroBackground = "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb";
  
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const filterOptions = [
    { id: 'todos', label: 'Todas' },
    { id: 'fin-de-semana', label: 'Fin de semana' },
    { id: 'largas', label: 'Escapadas largas' },
    { id: 'playa', label: 'Playa' },
    { id: 'montana', label: 'Montaña' },
    { id: 'ciudad', label: 'Ciudad' },
  ];
  
  const escapadas = [
    {
      id: 1,
      title: "Mallorca en 3 días",
      image: "https://images.unsplash.com/photo-1586640868271-e336520add87",
      category: "Islas",
      date: "10 enero, 2023",
      description: "Un recorrido por lo mejor de la isla balear: calas paradisíacas, pueblos con encanto y gastronomía mediterránea.",
      link: "/escapadas/mallorca-tres-dias",
      tags: ["fin-de-semana", "playa"]
    },
    {
      id: 2,
      title: "Fin de semana en los Pirineos",
      image: "https://images.unsplash.com/photo-1646212484813-3c5df1769e7a",
      category: "Montaña",
      date: "15 febrero, 2023",
      description: "Actividades al aire libre, pueblos medievales y gastronomía tradicional en las montañas fronterizas.",
      link: "/escapadas/pirineos-fin-de-semana",
      tags: ["fin-de-semana", "montana"]
    },
    {
      id: 3,
      title: "Algarve portugués",
      image: "https://images.unsplash.com/photo-1535478044878-3ed83d5456ef",
      category: "Costa",
      date: "3 marzo, 2023",
      description: "Acantilados espectaculares, playas doradas y pueblos pesqueros en la región más meridional de Portugal.",
      link: "/escapadas/algarve",
      size: "large" as const,
      tags: ["largas", "playa"]
    },
    {
      id: 4,
      title: "Valencia: Ciudad de las Artes",
      image: "https://images.unsplash.com/photo-1558277482-3653fbfa4af6",
      category: "Ciudad",
      date: "20 marzo, 2023",
      description: "Un fin de semana en la ciudad del Turia: arquitectura futurista, playa urbana y la auténtica paella valenciana.",
      link: "/escapadas/valencia",
      tags: ["fin-de-semana", "ciudad", "playa"]
    },
    {
      id: 5,
      title: "Cinque Terre en 5 días",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      category: "Costa",
      date: "5 abril, 2023",
      description: "Recorre los cinco pintorescos pueblos de la costa italiana declarados Patrimonio de la Humanidad por la UNESCO.",
      link: "/escapadas/cinque-terre",
      tags: ["largas", "playa"]
    },
    {
      id: 6,
      title: "Sierra de Gredos",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
      category: "Montaña",
      date: "18 abril, 2023",
      description: "Naturaleza, senderismo y gastronomía abulense en una de las sierras más impresionantes del Sistema Central.",
      link: "/escapadas/sierra-gredos",
      tags: ["fin-de-semana", "montana"]
    },
    {
      id: 7,
      title: "Oporto: Ciudad del vino",
      image: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c",
      category: "Ciudad",
      date: "2 mayo, 2023",
      description: "Descubre la segunda ciudad de Portugal, sus bodegas, su gastronomía y su característico encanto a orillas del Duero.",
      link: "/escapadas/oporto",
      tags: ["fin-de-semana", "ciudad"]
    },
    {
      id: 8,
      title: "Ruta por la Toscana",
      image: "https://images.unsplash.com/photo-1568822226618-b4fa631acf4a",
      category: "Interior",
      date: "20 mayo, 2023",
      description: "Una semana recorriendo las ciudades históricas, viñedos y paisajes ondulados de la región italiana por excelencia.",
      link: "/escapadas/toscana",
      tags: ["largas", "ciudad"]
    },
    {
      id: 9,
      title: "Costa Brava en 4 días",
      image: "https://images.unsplash.com/photo-1551527828-b0d7e5ce466c",
      category: "Costa",
      date: "8 junio, 2023",
      description: "Descubre las calas secretas, los pueblos marineros y la deliciosa gastronomía del litoral catalán.",
      link: "/escapadas/costa-brava",
      tags: ["largas", "playa"]
    }
  ];
  
  const filteredEscapadas = activeFilter === 'todos'
    ? escapadas
    : escapadas.filter(escapada => escapada.tags.includes(activeFilter));

  return (
    <MainLayout>
      <HeroSection
        title="Escapadas Inolvidables"
        subtitle="Aventuras cortas pero intensas para cuando el tiempo apremia"
        backgroundImage={heroBackground}
      />
      
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <FilterButtons
              options={filterOptions}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              className="justify-center"
            />
          </div>
          
          <BentoGrid>
            {filteredEscapadas.map((escapada) => (
              <BentoItem
                key={escapada.id}
                title={escapada.title}
                image={escapada.image}
                category={escapada.category}
                date={escapada.date}
                description={escapada.description}
                link={escapada.link}
                size={escapada.size as "small" | "medium" | "large" | undefined}
              />
            ))}
          </BentoGrid>
          
          {filteredEscapadas.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">No hay escapadas que coincidan con el filtro seleccionado</h3>
              <p className="text-muted-foreground">Por favor, intenta con otro filtro o explora todas nuestras escapadas.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Escapadas;
