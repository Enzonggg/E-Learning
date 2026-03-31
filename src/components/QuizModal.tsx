import { useEffect } from 'react';
import type { QuizModalProps } from '@/types';
import { useQuiz } from '@/hooks';

export default function QuizModal({ isOpen, onClose, lesson, onComplete }: QuizModalProps) {
  const { answers, result, submitted, allAnswered, answer, submit, reset } = useQuiz(lesson.questions);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = submit();
    if (res) onComplete?.(res);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const getScoreClass = () => {
    if (!result) return '';
    const pct = result.score / result.total;
    if (pct >= 0.8) return 'score-box--success';
    if (pct >= 0.4) return 'score-box--warn';
    return 'score-box--error';
  };

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="quiz-title">
        {/* Header */}
        <div className="modal__header">
          <div>
            <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.5)', marginBottom: 3 }}>
              LESSON {lesson.id}
            </div>
            <h2 id="quiz-title" style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700 }}>
              {lesson.title} Quiz
            </h2>
          </div>
          <button className="modal__close" onClick={handleClose} aria-label="Close">
            <span className="material-icons" style={{ fontSize: 18 }}>close</span>
          </button>
        </div>

        {/* Body */}
        <form id="quiz-form" onSubmit={handleSubmit}>
          <div className="modal__body">
            {/* Score box */}
            {submitted && result && (
              <div className={`score-box ${getScoreClass()}`}>
                {result.score >= 4 ? '🎉' : '📚'} You scored{' '}
                <strong>{result.score}/{result.total}</strong>{' '}
                ({Math.round((result.score / result.total) * 100)}%)
              </div>
            )}

            {/* Unanswered warning */}
            {!allAnswered && submitted === false && (
              <div className="score-box score-box--warn" style={{ display: 'none' }} />
            )}

            {/* Feedback */}
            {submitted && result && (
              <div className="feedback">
                {result.feedback.every((f) => f.correct) ? (
                  <div className="feedback__item feedback__item--ok">✓ All answers correct! Excellent!</div>
                ) : (
                  result.feedback
                    .filter((f) => !f.correct)
                    .map((f) => (
                      <div key={f.questionId} className="feedback__item feedback__item--bad">
                        ✗ Question {f.questionId.replace(/\D/g, '').slice(-1)} — Correct:{' '}
                        {f.correctAnswer.toUpperCase()}
                      </div>
                    ))
                )}
              </div>
            )}

            {/* Questions */}
            {lesson.questions.map((q, qi) => (
              <div className="q-block" key={q.id}>
                <div className="q-label">
                  {qi + 1}. {q.text}
                </div>
                {q.options.map((opt) => (
                  <div className="q-option" key={opt.value}>
                    <input
                      type="radio"
                      id={`${q.id}-${opt.value}`}
                      name={q.id}
                      value={opt.value}
                      checked={answers[q.id] === opt.value}
                      onChange={() => answer(q.id, opt.value)}
                      disabled={submitted}
                    />
                    <label htmlFor={`${q.id}-${opt.value}`}>{opt.label}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="modal__footer">
            <button type="button" className="btn btn--soft btn--sm" onClick={handleClose}>
              Close
            </button>
            {submitted ? (
              <button type="button" className="btn btn--soft btn--sm" onClick={reset}>
                <span className="material-icons" style={{ fontSize: 16 }}>refresh</span>
                Try Again
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn--accent btn--sm"
                disabled={!allAnswered}
                style={{ opacity: allAnswered ? 1 : 0.6 }}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
