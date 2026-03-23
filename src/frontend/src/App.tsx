import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import MenuHighlights from "./components/MenuHighlights";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-cafe-cream font-sans">
        <Navbar />
        <main>
          <Hero />
          <MenuHighlights />
          <About />
          <Location />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
