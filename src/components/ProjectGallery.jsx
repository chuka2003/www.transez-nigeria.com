import { projectPhotos } from "@/data/site";

export default function ProjectGallery({ limit }) {
  const photos = limit ? projectPhotos.slice(0, limit) : projectPhotos;

  return (
    <div className="project-grid">
      {photos.map((photo) => (
        <article className="project-card" key={photo.image}>
          <img src={photo.image} alt={photo.title} loading="lazy" />
          <div>
            <p className="eyebrow">{photo.category}</p>
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
