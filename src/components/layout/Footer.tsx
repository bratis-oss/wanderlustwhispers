
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 dark:bg-secondary/20 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">NomadGo</h3>
            <p className="text-muted-foreground mb-4">
              Explorando el mundo, un destino a la vez. Inspiramos tu próxima aventura con consejos de viaje y relatos auténticos.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button size="icon" variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Button>
              <Button size="icon" variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Button>
              <Button size="icon" variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/destinos" className="text-muted-foreground hover:text-primary transition-colors">
                  Destinos
                </NavLink>
              </li>
              <li>
                <NavLink to="/escapadas" className="text-muted-foreground hover:text-primary transition-colors">
                  Escapadas
                </NavLink>
              </li>
              <li>
                <NavLink to="/consejos-de-viaje" className="text-muted-foreground hover:text-primary transition-colors">
                  Consejos de viaje
                </NavLink>
              </li>
              <li>
                <NavLink to="/vida-nomada" className="text-muted-foreground hover:text-primary transition-colors">
                  Vida nómada
                </NavLink>
              </li>
              <li>
                <NavLink to="/sobre-nomadgo" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre NomadGo
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de privacidad
                </NavLink>
              </li>
              <li>
                <NavLink to="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos y condiciones
                </NavLink>
              </li>
              <li>
                <NavLink to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de cookies
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Suscríbete para recibir las últimas actualizaciones y ofertas de viaje.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Tu email" className="w-full" />
              <Button variant="default">
                Unirse
              </Button>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NomadGo. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Diseñado y desarrollado con ❤️ para viajeros
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
