// Interfaz para definir la estructura de un proyecto
export interface Project {
  slug: string; // Identificador único y amigable para la URL (p. ej., "mi-proyecto-web")
  title: string;
  description: string;
  image: string; // URL o ruta de la imagen principal del proyecto
  technologies: string[]; // Arreglo de tecnologías utilizadas (p. ej., ["React", "Tailwind CSS"])
  demoUrl?: string; // URL opcional del demo desplegado (el '?' lo hace opcional)
  githubUrl?: string; // URL opcional del repositorio de GitHub
  featured: boolean; // Indicador si el proyecto debe destacarse
}

// Interfaz para la configuración de metadatos (comúnmente usado para SEO)
export interface Metadata {
  title: string;
  description: string;
  keywords?: string[]; // Palabras clave opcionales para SEO
  author?: string; // Autor opcional
  ogImage?: string; // URL opcional de la imagen para Open Graph (redes sociales)
}