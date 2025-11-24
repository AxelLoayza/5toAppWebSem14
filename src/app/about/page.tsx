import Image from 'next/image';
import { Metadata } from 'next';
import { personalInfo } from '@/lib/data'; // Asumo la ruta correcta

// Metadata para la página (Next.js App Router)
export const metadata: Metadata = {
  title: 'Acerca de Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}.`,
};

// Componente de la página AboutPage
export default function AboutPage() {

  // Definición de las habilidades técnicas
  const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js & Express',
    'PostgreSQL & MongoDB',
    'Tailwind CSS',
    'Git & GitHub',
    'Testing',
    'AWS',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-12">
      {/* Sección 'Sobre Mí' */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">Sobre Mí</h1>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Columna de la Imagen */}
          <div className="md:col-span-1">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Columna del Texto */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">
              ¡Hola, soy {personalInfo.name}!
            </h2>
            <div className="prose text-gray-400 space-y-4">
              <p>
                Soy un desarrollador full stack apasionado por crear experiencias 
                web excepcionales. Con más de X años de experiencia, me especializo 
                en construir aplicaciones modernas y escalables.
              </p>
              <p>
                Mi enfoque está en escribir código limpio, mantenible y eficiente, 
                siempre buscando las mejores prácticas y las últimas tecnologías 
                para entregar productos de alta calidad.
              </p>
              <p>
                Cuando no estoy programando, me gusta contribuir a proyectos de 
                código abierto, escribir artículos técnicos y aprender nuevas 
                tecnologías.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Separador (solo para indicar la sección siguiente en el diseño) */}
      <hr className="my-12 border-gray-700" aria-hidden="true" />
      
      {/* Sección 'Habilidades Técnicas' */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">Habilidades Técnicas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill}
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all border border-gray-700 hover:border-blue-500/50"
            >
              <p className="font-semibold text-white">{skill}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}