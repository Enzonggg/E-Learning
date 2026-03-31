import { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;  // 0–100
  animated?: boolean;
  delay?: number;
}

export default function ProgressBar({ value, animated = true, delay = 400 }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!animated) { setWidth(value); return; }
    const t = setTimeout(() => setWidth(value), delay);
    return () => clearTimeout(t);
  }, [value, animated, delay]);

  return (
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${width}%` }} />
    </div>
  );
}
