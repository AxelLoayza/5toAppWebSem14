import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { projects, personalInfo } from "@/lib/data";

// Lazy load de ProjectCard para mejor performance
const ProjectCard = dynamic(() => import("../components/ProjectCard"), {
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

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="text-center mb-20">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="rounded-full object-cover"
              fill
              sizes="128px"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            {personalInfo.name}
          </h1>

          <h2 className="text-xl text-gray-300 mb-6">
            {personalInfo.title}
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {personalInfo.description}
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Ver Proyectos
            </Link>

            <Link
              href="/about"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all border border-gray-700 hover:border-gray-600"
            >
              Sobre Mí
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 text-center">
          Proyectos Destacados
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
