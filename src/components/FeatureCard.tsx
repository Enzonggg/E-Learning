import type { FeatureCardProps } from '@/types';

export default function FeatureCard({ icon, title, description, colorClass }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className={`feature-icon ${colorClass}`}>
        <span className="material-icons">{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
