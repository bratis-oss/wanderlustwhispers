
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/ui/hero-section';
import ContactSection from '@/components/ui/contact-section';
import { Button } from '@/components/ui/button';

const SobreNomadGo = () => {
  const heroBackground = "https://images.unsplash.com/photo-1469474968028-56623f02e42e";

  return (
    <MainLayout>
      <HeroSection
        title="Sobre NomadGo"
        subtitle="Nuestra historia, misión y pasión por los viajes"
        backgroundImage={heroBackground}
      />
      
      {/* Nuestra Historia */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Historia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">2018</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Los inicios</h3>
                <p className="text-muted-foreground">
                  NomadGo nació como un pequeño blog personal donde compartíamos nuestras experiencias de viaje con amigos y familiares.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">2020</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Crecimiento</h3>
                <p className="text-muted-foreground">
                  El blog comenzó a ganar popularidad y decidimos convertirlo en una plataforma más completa de consejos de viaje y destinos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hoy</h3>
                <p className="text-muted-foreground">
                  Actualmente, NomadGo es una comunidad de viajeros que comparten su pasión y experiencias en todo el mundo.
                </p>
              </div>
            </div>
            
            <p className="text-lg mb-6">
              NomadGo nació del amor por los viajes y la necesidad de compartir experiencias auténticas. Lo que comenzó como un diario personal de viajes se ha convertido en una comunidad vibrante de exploradores que buscan inspiración y consejos prácticos.
            </p>
            
            <p className="text-lg mb-6">
              Creemos que viajar es una de las formas más enriquecedoras de aprender sobre el mundo, sobre los demás y sobre uno mismo. Cada destino tiene historias por contar, cada cultura ofrece nuevas perspectivas y cada viaje nos transforma de alguna manera.
            </p>
            
            <p className="text-lg">
              A lo largo de estos años, hemos recorrido decenas de países, probado cientos de platos típicos, conocido a personas increíbles y acumulado innumerables anécdotas que ahora compartimos contigo a través de NomadGo.
            </p>
          </div>
        </div>
      </section>
      
      {/* Conoce al Viajero */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Conoce al Viajero</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
                  alt="Ana Martínez - Fundadora de NomadGo"
                  className="rounded-xl shadow-md w-full"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Ana Martínez</h3>
                <p className="text-primary font-medium mb-4">Fundadora y Viajera Incansable</p>
                
                <p className="text-lg mb-4">
                  Tras más de 10 años trabajando en el mundo corporativo, decidí dar un giro a mi vida y dedicarme a mi verdadera pasión: viajar y escribir sobre ello.
                </p>
                
                <p className="text-lg mb-4">
                  He visitado más de 45 países en 5 continentes, siempre buscando experiencias auténticas y fuera de los circuitos turísticos convencionales.
                </p>
                
                <p className="text-lg mb-6">
                  Mis especialidades son los viajes de aventura, la fotografía y descubrir la gastronomía local. Soy una firme defensora del turismo sostenible y responsable.
                </p>
                
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nuestra Filosofía de Viaje */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Nuestra Filosofía de Viaje</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-background rounded-xl shadow-sm border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Viaje Responsable</h3>
                <p className="text-muted-foreground">
                  Promovemos un turismo que respeta las comunidades locales, su cultura y el medio ambiente.
                </p>
              </div>
              
              <div className="text-center p-6 bg-background rounded-xl shadow-sm border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Experiencias Auténticas</h3>
                <p className="text-muted-foreground">
                  Buscamos y compartimos experiencias genuinas, más allá de las rutas turísticas convencionales.
                </p>
              </div>
              
              <div className="text-center p-6 bg-background rounded-xl shadow-sm border border-border">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 16c0-4-4-7-7-4"></path>
                    <path d="M9 7c1.462.087 2.456 1.51 2 3"></path>
                    <circle cx="3" cy="16" r="1"></circle>
                    <circle cx="21" cy="16" r="1"></circle>
                    <circle cx="12" cy="3" r="1"></circle>
                    <circle cx="8" cy="3" r="1"></circle>
                    <circle cx="16" cy="9" r="1"></circle>
                    <circle cx="8" cy="12" r="1"></circle>
                    <circle cx="12" cy="16" r="1"></circle>
                    <circle cx="16" cy="16" r="1"></circle>
                    <circle cx="21" cy="12" r="1"></circle>
                    <circle cx="21" cy="8" r="1"></circle>
                    <circle cx="16" cy="3" r="1"></circle>
                    <circle cx="12" cy="7" r="1"></circle>
                    <circle cx="3" cy="12" r="1"></circle>
                    <circle cx="3" cy="8" r="1"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Comunidad Global</h3>
                <p className="text-muted-foreground">
                  Creemos en el poder de conectar viajeros y compartir experiencias que enriquecen nuestra visión del mundo.
                </p>
              </div>
            </div>
            
            <p className="text-lg mb-6">
              En NomadGo creemos que viajar va más allá de coleccionar sellos en el pasaporte o fotos para las redes sociales. Para nosotros, viajar significa conectar con nuevas culturas, aprender continuamente y crecer como personas.
            </p>
            
            <p className="text-lg mb-6">
              Apostamos por un turismo consciente y responsable, que beneficie a las comunidades locales y respete el medio ambiente. Creemos en viajar más despacio, profundizando en cada destino en lugar de correr de un lugar a otro.
            </p>
            
            <p className="text-lg">
              Nuestra misión es inspirarte a explorar el mundo de una forma auténtica y significativa, proporcionándote la información y los consejos necesarios para que puedas vivir tus propias aventuras.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection 
        title="¿Quieres colaborar con nosotros?"
        subtitle="Si eres un viajero apasionado, un destino turístico o una marca relacionada con el sector, nos encantaría conocerte."
        className="bg-secondary/30" 
      />
    </MainLayout>
  );
};

export default SobreNomadGo;
