import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { ProgressMap, QuizResult } from '@/types';

// ─── Context Shape ───────────────────────────────────────────────────────────

interface ProgressContextValue {
  progress: ProgressMap;
  completedCount: number;
  markCompleted: (lessonId: number, quizResult?: QuizResult) => void;
  isCompleted: (lessonId: number) => boolean;
  getScore: (lessonId: number) => number | undefined;
  reset: () => void;
}

// ─── Context & Provider ──────────────────────────────────────────────────────

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressMap>({});

  const completedCount = Object.values(progress).filter((p) => p.completed).length;

  const markCompleted = useCallback((lessonId: number, quizResult?: QuizResult) => {
    setProgress((prev) => ({
      ...prev,
      [lessonId]: {
        lessonId,
        completed: true,
        quizScore: quizResult?.score,
      },
    }));
  }, []);

  const isCompleted = useCallback(
    (lessonId: number) => Boolean(progress[lessonId]?.completed),
    [progress],
  );

  const getScore = useCallback(
    (lessonId: number) => progress[lessonId]?.quizScore,
    [progress],
  );

  const reset = useCallback(() => setProgress({}), []);

  return (
    <ProgressContext.Provider value={{ progress, completedCount, markCompleted, isCompleted, getScore, reset }}>
      {children}
    </ProgressContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside <ProgressProvider>');
  return ctx;
}
