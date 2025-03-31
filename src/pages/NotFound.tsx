
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-primary mb-6">404</h1>
          <p className="text-3xl font-bold mb-4">¡Destino no encontrado!</p>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Parece que te has perdido en el camino. Esta ruta no existe en nuestro mapa de viajes.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Volver a Inicio
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
