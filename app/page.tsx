import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Hero";
import MyWorks from "@/components/MyWorks";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <TechStack />
        <RecentProjects />
        <Experience />
        <MyWorks />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
