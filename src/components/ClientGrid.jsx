import { clients } from "@/data/site";

export default function ClientGrid() {
  return (
    <div className="logo-grid">
      {clients.map((client) => (
        <div className="logo-card" key={client.name}>
          <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
