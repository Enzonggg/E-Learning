// ─── Lesson / Course Types ─────────────────────────────────────────────────

export interface QuizOption {
  value: 'a' | 'b' | 'c';
  label: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  correctAnswer: 'a' | 'b' | 'c';
}

export interface Lesson {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  videoId: string;
  duration: string;
  questions: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

// ─── Quiz State Types ───────────────────────────────────────────────────────

export type QuizAnswers = Record<string, 'a' | 'b' | 'c'>;

export interface QuizResult {
  score: number;
  total: number;
  answers: QuizAnswers;
  feedback: Array<{ questionId: string; correct: boolean; correctAnswer: string }>;
}

// ─── Progress Types ─────────────────────────────────────────────────────────

export interface LessonProgress {
  lessonId: number;
  completed: boolean;
  quizScore?: number;
}

export type ProgressMap = Record<number, LessonProgress>;

// ─── UI Component Props ─────────────────────────────────────────────────────

export interface NavbarProps {
  currentPath?: string;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  colorClass: 'icon-a' | 'icon-b' | 'icon-c';
}

export interface LessonItemProps {
  lesson: Lesson;
  isActive?: boolean;
  isCompleted?: boolean;
}

export interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: Lesson;
  onComplete?: (result: QuizResult) => void;
}

export interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  animated?: boolean;
}
