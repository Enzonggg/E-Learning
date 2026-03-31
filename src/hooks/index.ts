import { useState, useEffect, useRef, useCallback } from 'react';

// ─── useCounter ──────────────────────────────────────────────────────────────
/** Animates a number from 0 to `target` over `duration` ms. */
export function useCounter(target: number, duration = 1600, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOut
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, start]);

  return value;
}

// ─── useInView ───────────────────────────────────────────────────────────────
/** Returns `true` once the element enters the viewport. */
export function useInView<T extends Element>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── useQuiz ────────────────────────────────────────────────────────────────
import type { QuizQuestion, QuizAnswers, QuizResult } from '@/types';

export function useQuiz(questions: QuizQuestion[]) {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const answer = useCallback((questionId: string, value: 'a' | 'b' | 'c') => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const submit = useCallback((): QuizResult | null => {
    if (questions.some((q) => !answers[q.id])) return null;

    let score = 0;
    const feedback = questions.map((q) => {
      const correct = answers[q.id] === q.correctAnswer;
      if (correct) score++;
      return { questionId: q.id, correct, correctAnswer: q.correctAnswer };
    });

    const res: QuizResult = { score, total: questions.length, answers, feedback };
    setResult(res);
    setSubmitted(true);
    return res;
  }, [questions, answers]);

  const reset = useCallback(() => {
    setAnswers({});
    setResult(null);
    setSubmitted(false);
  }, []);

  const allAnswered = questions.every((q) => Boolean(answers[q.id]));

  return { answers, result, submitted, allAnswered, answer, submit, reset };
}
