
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Destinos from "./pages/Destinos";
import Escapadas from "./pages/Escapadas";
import ConsejosViaje from "./pages/ConsejosViaje";
import VidaNomada from "./pages/VidaNomada";
import SobreNomadGo from "./pages/SobreNomadGo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/escapadas" element={<Escapadas />} />
          <Route path="/consejos-de-viaje" element={<ConsejosViaje />} />
          <Route path="/vida-nomada" element={<VidaNomada />} />
          <Route path="/sobre-nomadgo" element={<SobreNomadGo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
