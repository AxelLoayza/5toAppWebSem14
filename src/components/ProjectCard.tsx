import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../types'

// Define la interfaz para las propiedades del componente
interface ProjectCardProps {
  project: Project;
}

// Componente funcional ProjectCard
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    // Contenedor principal con Link de Next.js
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
    >
      <div className="relative h-48 overflow-hidden">
        {/* Imagen con lazy loading */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        />
      </div>

      <div className="p-6">
        {/* Título del proyecto */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Descripción del proyecto */}
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        {/* Lista de tecnologías */}
        <div className="flex flex-wrap gap-2">
          {/* Muestra las primeras 5 tecnologías */}
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30"
            >
              {tech}
            </span>
          ))}

          {/* Muestra el conteo de tecnologías restantes si hay más de 5 */}
          {project.technologies.length > 5 && (
            <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}