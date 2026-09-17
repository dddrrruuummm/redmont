import { ContactSection, Hero, ProductGrid, ServicesSection, TrustBand } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid limit={8} />
      <TrustBand />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
