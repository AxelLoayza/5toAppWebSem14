import { Metadata } from "next";
import dynamic from "next/dynamic";
import { projects } from "@/lib/data";

// Lazy load de ProjectCard
const ProjectCard = dynamic(() => import("../../components/ProjectCard"), {
  loading: () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-96 animate-pulse">
      <div className="h-48 bg-gray-200"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Explora mi colección de proyectos de desarrollo web y aplicaciones.",
  openGraph: {
    title: "Proyectos – Portafolio",
    description: "Explora mi colección de proyectos de desarrollo web",
    images: ["/og-proyectos.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">Mis Proyectos</h1>
      <p className="text-lg text-gray-400 mb-12">
        Una colección de proyectos en los que he trabajado
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      </div>
    </div>
  );
}
