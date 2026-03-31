import { Link } from 'react-router-dom';
import type { Lesson } from '@/types';

interface LessonRowProps {
  lesson: Lesson;
  isActive?: boolean;
  isCompleted?: boolean;
  showDesc?: boolean;
  compact?: boolean;
}

export default function LessonRow({
  lesson,
  isActive = false,
  isCompleted = false,
  showDesc = false,
  compact = false,
}: LessonRowProps) {
  const classes = [
    'lesson-row',
    isActive ? 'lesson-row--active' : '',
  ].filter(Boolean).join(' ');

  const padding = compact ? '7px 8px' : undefined;
  const fontSize = compact ? '0.84rem' : undefined;

  return (
    <Link
      to={`/lessons/${lesson.slug}`}
      className={classes}
      style={{ padding, fontSize }}
    >
      <div
        className="lesson-num"
        style={compact ? { width: 22, height: 22, fontSize: '0.7rem' } : undefined}
      >
        {lesson.id}
      </div>

      {showDesc ? (
        <div className="lesson-row__meta">
          <div className="lesson-row__name">{lesson.title}</div>
          <div className="lesson-row__desc">{lesson.duration}</div>
        </div>
      ) : (
        <span style={{ flex: 1 }}>{compact ? lesson.shortTitle : lesson.title}</span>
      )}

      {isCompleted && (
        <span className="material-icons lesson-row__completed">check_circle</span>
      )}

      {!isCompleted && (
        <span
          className="material-icons"
          style={{
            marginLeft: 'auto',
            color: 'var(--muted)',
            fontSize: 18,
            transition: 'transform .25s',
          }}
        >
          chevron_right
        </span>
      )}
    </Link>
  );
}
