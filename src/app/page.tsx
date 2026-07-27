import { LandingWireframe } from "@/components/sections/landing-wireframe";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <LandingWireframe />
      <SiteFooter />
    </main>
  );
}
