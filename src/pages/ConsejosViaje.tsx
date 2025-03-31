
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/hero-section';
import BentoGrid, { BentoItem } from '@/components/ui/bento-grid';
import FilterButtons from '@/components/ui/filter-buttons';

const ConsejosViaje = () => {
  const heroBackground = "https://images.unsplash.com/photo-1472396961693-142e6e269027";
  
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const filterOptions = [
    { id: 'todos', label: 'Todos' },
    { id: 'preparacion', label: 'Guías de preparación' },
    { id: 'practicos', label: 'Consejos prácticos' },
    { id: 'ahorro', label: 'Ahorro en viajes' },
    { id: 'tecnologia', label: 'Tecnología para viajeros' },
    { id: 'seguridad', label: 'Seguridad' },
  ];
  
  const consejos = [
    {
      id: 1,
      title: "Cómo preparar un viaje de larga duración",
      image: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de1",
      category: "Preparación",
      date: "10 enero, 2023",
      description: "Guía completa para planificar una aventura de varios meses: desde la documentación hasta el equipaje y el presupuesto.",
      link: "/consejos-de-viaje/viaje-larga-duracion",
      tags: ["preparacion"]
    },
    {
      id: 2,
      title: "Las mejores aplicaciones para viajar",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      category: "Tecnología",
      date: "15 febrero, 2023",
      description: "Descubre las apps imprescindibles para cada fase de tu viaje: planificación, transporte, alojamiento y experiencias locales.",
      link: "/consejos-de-viaje/mejores-aplicaciones-viajar",
      tags: ["tecnologia", "practicos"]
    },
    {
      id: 3,
      title: "Viajar ligero: El arte del equipaje minimalista",
      image: "https://images.unsplash.com/photo-1553531384-09764d00ca8f",
      category: "Equipaje",
      date: "3 marzo, 2023",
      description: "Aprende a reducir tu equipaje al mínimo sin renunciar a lo esencial. Técnicas de organización y productos versátiles.",
      link: "/consejos-de-viaje/viajar-ligero",
      size: "large" as const,
      tags: ["practicos", "preparacion"]
    },
    {
      id: 4,
      title: "Cómo encontrar vuelos baratos",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      category: "Ahorro",
      date: "20 marzo, 2023",
      description: "Estrategias, herramientas y consejos para conseguir las mejores ofertas en billetes de avión a cualquier destino.",
      link: "/consejos-de-viaje/vuelos-baratos",
      tags: ["ahorro"]
    },
    {
      id: 5,
      title: "Seguridad en destinos exóticos",
      image: "https://images.unsplash.com/photo-1540835296355-c04f7a063cbb",
      category: "Seguridad",
      date: "5 abril, 2023",
      description: "Recomendaciones para viajar seguro a destinos menos convencionales: salud, pertenencias personales y precauciones culturales.",
      link: "/consejos-de-viaje/seguridad-destinos-exoticos",
      tags: ["seguridad", "practicos"]
    },
    {
      id: 6,
      title: "Fotografía de viajes para principiantes",
      image: "https://images.unsplash.com/photo-1452790435524-3eda2a32a37e",
      category: "Fotografía",
      date: "18 abril, 2023",
      description: "Consejos básicos para capturar los mejores momentos de tus viajes sin necesidad de equipo profesional.",
      link: "/consejos-de-viaje/fotografia-viajes",
      tags: ["tecnologia", "practicos"]
    },
    {
      id: 7,
      title: "Cómo organizar un viaje en grupo",
      image: "https://images.unsplash.com/photo-1527631120902-378417754324",
      category: "Planificación",
      date: "2 mayo, 2023",
      description: "Claves para coordinar un viaje con amigos o familia sin conflictos: desde la elección del destino hasta la gestión del presupuesto.",
      link: "/consejos-de-viaje/viaje-grupo",
      tags: ["preparacion"]
    },
    {
      id: 8,
      title: "Viajar por menos de 30€ al día",
      image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b",
      category: "Ahorro",
      date: "20 mayo, 2023",
      description: "Guía práctica para recorrer el mundo con un presupuesto ajustado: alojamiento, comida y experiencias a precios mínimos.",
      link: "/consejos-de-viaje/viaje-bajo-presupuesto",
      tags: ["ahorro", "practicos"]
    },
    {
      id: 9,
      title: "Qué hacer en caso de pérdida de documentación",
      image: "https://images.unsplash.com/photo-1544717295-2970d11932d8",
      category: "Seguridad",
      date: "8 junio, 2023",
      description: "Pasos a seguir si pierdes tu pasaporte, tarjetas o dinero durante un viaje. Recursos, contactos y procedimientos.",
      link: "/consejos-de-viaje/perdida-documentacion",
      tags: ["seguridad", "practicos"]
    }
  ];
  
  const filteredConsejos = activeFilter === 'todos'
    ? consejos
    : consejos.filter(consejo => consejo.tags.includes(activeFilter));

  return (
    <MainLayout>
      <HeroSection
        title="Consejos de Viaje"
        subtitle="Trucos, recomendaciones y guías para que tu viaje sea perfecto"
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
            {filteredConsejos.map((consejo) => (
              <BentoItem
                key={consejo.id}
                title={consejo.title}
                image={consejo.image}
                category={consejo.category}
                date={consejo.date}
                description={consejo.description}
                link={consejo.link}
                size={consejo.size as "small" | "medium" | "large" | undefined}
              />
            ))}
          </BentoGrid>
          
          {filteredConsejos.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">No hay consejos que coincidan con el filtro seleccionado</h3>
              <p className="text-muted-foreground">Por favor, intenta con otro filtro o explora todos nuestros consejos de viaje.</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default ConsejosViaje;
