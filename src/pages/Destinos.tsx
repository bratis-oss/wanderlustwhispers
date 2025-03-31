
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/hero-section';
import BentoGrid, { BentoItem } from '@/components/ui/bento-grid';
import FilterButtons from '@/components/ui/filter-buttons';

const Destinos = () => {
  const heroBackground = "https://images.unsplash.com/photo-1469474968028-56623f02e42e";
  
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const filterOptions = [
    { id: 'todos', label: 'Todos' },
    { id: 'populares', label: 'Destinos populares' },
    { id: 'europa', label: 'Europa' },
    { id: 'asia', label: 'Asia' },
    { id: 'america', label: 'América' },
    { id: 'africa', label: 'África' },
    { id: 'oceania', label: 'Oceanía' },
    { id: 'espana', label: 'España' },
  ];
  
  const destinations = [
    {
      id: 1,
      title: "Tokio: Tradición y modernidad",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
      category: "Asia",
      date: "10 enero, 2023",
      description: "Descubre el fascinante contraste entre la tradición ancestral y la vanguardia tecnológica en la vibrante capital japonesa.",
      link: "/destinos/tokio",
      tags: ["populares", "asia"]
    },
    {
      id: 2,
      title: "La magia de Marrakech",
      image: "https://images.unsplash.com/photo-1548018560-c7196548e1d3",
      category: "África",
      date: "15 febrero, 2023",
      description: "Piérdete en los laberínticos zocos, disfruta de su gastronomía y vive la experiencia única de los riads tradicionales.",
      link: "/destinos/marrakech",
      tags: ["africa"]
    },
    {
      id: 3,
      title: "Islandia: Tierra de hielo y fuego",
      image: "https://images.unsplash.com/photo-1504047281489-1a31e0bba215",
      category: "Europa",
      date: "3 marzo, 2023",
      description: "Un recorrido por los increíbles paisajes islandeses: cascadas, glaciares, géiseres y aguas termales en estado puro.",
      link: "/destinos/islandia",
      size: "large" as const,
      tags: ["populares", "europa"]
    },
    {
      id: 4,
      title: "Nueva York en 7 días",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      category: "América",
      date: "20 marzo, 2023",
      description: "La guía definitiva para exprimir al máximo la Gran Manzana: desde Manhattan hasta Brooklyn pasando por Queens.",
      link: "/destinos/nueva-york",
      tags: ["populares", "america"]
    },
    {
      id: 5,
      title: "Sydney y la costa este australiana",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
      category: "Oceanía",
      date: "5 abril, 2023",
      description: "Descubre la ciudad más poblada de Australia y sus alrededores, con playas espectaculares y una naturaleza única.",
      link: "/destinos/sydney",
      tags: ["oceania"]
    },
    {
      id: 6,
      title: "Ruta por la Andalucía blanca",
      image: "https://images.unsplash.com/photo-1559304822-9eb2813c9844",
      category: "España",
      date: "18 abril, 2023",
      description: "Un recorrido por los pueblos blancos andaluces, con su encanto tradicional, gastronomía local y paisajes espectaculares.",
      link: "/destinos/pueblos-blancos-andalucia",
      tags: ["espana"]
    },
    {
      id: 7,
      title: "Praga: La ciudad de las cien torres",
      image: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef",
      category: "Europa",
      date: "2 mayo, 2023",
      description: "Recorre las calles empedradas de la capital checa y déjate llevar por su atmósfera medieval y su rico patrimonio cultural.",
      link: "/destinos/praga",
      tags: ["europa"]
    },
    {
      id: 8,
      title: "La Riviera Maya: Paraíso caribeño",
      image: "https://images.unsplash.com/photo-1682553064048-c13999f4b25b",
      category: "América",
      date: "20 mayo, 2023",
      description: "Playas de arena blanca, cenotes misteriosos y vestigios mayas en uno de los destinos más atractivos de México.",
      link: "/destinos/riviera-maya",
      tags: ["populares", "america"]
    },
    {
      id: 9,
      title: "Asturias: Paraíso natural",
      image: "https://images.unsplash.com/photo-1695667240248-901e8929dbc3",
      category: "España",
      date: "8 junio, 2023",
      description: "Montañas, playas, gastronomía y hospitalidad en una de las regiones más verdes y auténticas del norte de España.",
      link: "/destinos/asturias",
      tags: ["espana"]
    }
  ];
  
  const filteredDestinations = activeFilter === 'todos'
    ? destinations
    : destinations.filter(dest => dest.tags.includes(activeFilter));

  return (
    <MainLayout>
      <HeroSection
        title="Destinos que inspiran"
        subtitle="Explora nuestros destinos favoritos alrededor del mundo"
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
            {filteredDestinations.map((destination) => (
              <BentoItem
                key={destination.id}
                title={destination.title}
                image={destination.image}
                category={destination.category}
                date={destination.date}
                description={destination.description}
                link={destination.link}
                size={destination.size as "small" | "medium" | "large" | undefined}
              />
            ))}
          </BentoGrid>
          
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">No hay destinos que coincidan con el filtro seleccionado</h3>
              <p className="text-muted-foreground">Por favor, intenta con otro filtro o explora nuestras recomendaciones populares.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Destinos;
