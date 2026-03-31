import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import LessonRow from '@/components/LessonRow';
import ProgressBar from '@/components/ProgressBar';
import QuizModal from '@/components/QuizModal';
import { COURSE } from '@/data/course';
import { useProgress } from '@/context/ProgressContext';
import type { QuizResult } from '@/types';

export default function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const [quizOpen, setQuizOpen] = useState(false);
  const { markCompleted, isCompleted, getScore, completedCount } = useProgress();

  const lesson = COURSE.lessons.find((l) => l.slug === slug);
  if (!lesson) return <Navigate to="/courses" replace />;

  const totalLessons = COURSE.lessons.length;
  const lessonIndex = COURSE.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = lessonIndex > 0 ? COURSE.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < totalLessons - 1 ? COURSE.lessons[lessonIndex + 1] : null;

  const progressPct = Math.round(((lessonIndex + 1) / totalLessons) * 100);
  const overallPct  = Math.round((completedCount / totalLessons) * 100);
  const score = getScore(lesson.id);
  const completed = isCompleted(lesson.id);

  const handleQuizComplete = (result: QuizResult) => {
    markCompleted(lesson.id, result);
  };

  return (
    <>
      <Navbar />

      <main className="lesson-page" style={{ flex: 1 }}>
        <div className="container">
          <div className="lesson-page__grid">

            {/* ── MAIN COLUMN ── */}
            <div>
              <Link to="/courses" className="back-link">
                <span className="material-icons" style={{ fontSize: 16 }}>arrow_back</span>
                Back to Courses
              </Link>

              <div className="lesson-badge">Lesson {lesson.id} of {totalLessons}</div>
              <h1>{lesson.title}</h1>

              {/* Video */}
              <Reveal>
                <div className="video-card">
                  <iframe
                    src={`https://www.youtube.com/embed/${lesson.videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={lesson.title}
                  />
                </div>
              </Reveal>

              {/* Quiz trigger */}
              <Reveal delay={100}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <button className="quiz-btn" onClick={() => setQuizOpen(true)}>
                    <span className="pulse-dot" />
                    <span className="material-icons" style={{ fontSize: 20 }}>quiz</span>
                    Take the Quiz
                  </button>

                  {completed && (
                    <span style={{ fontSize: '.85rem', color: 'var(--accent3)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span className="material-icons" style={{ fontSize: 18 }}>check_circle</span>
                      Completed{score !== undefined ? ` · ${score}/${lesson.questions.length}` : ''}
                    </span>
                  )}
                </div>
              </Reveal>

              {/* Lesson nav */}
              <Reveal delay={150}>
                <div className="lesson-nav">
                  <div>
                    <div className="lesson-nav__dir">← Previous</div>
                    {prevLesson ? (
                      <Link to={`/lessons/${prevLesson.slug}`} className="lesson-nav__name">
                        {prevLesson.title}
                      </Link>
                    ) : (
                      <span className="lesson-nav__name lesson-nav__name--muted">No previous lesson</span>
                    )}
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="lesson-nav__dir">Next →</div>
                    {nextLesson ? (
                      <Link to={`/lessons/${nextLesson.slug}`} className="lesson-nav__name">
                        {nextLesson.title}
                      </Link>
                    ) : (
                      <span className="lesson-nav__name lesson-nav__name--muted">
                        {completed ? 'Course Complete! 🎉' : 'Last Lesson'}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ── SIDEBAR ── */}
            <aside>
              {/* Lesson info */}
              <Reveal>
                <div className="info-card">
                  <div className="info-card__title">Lesson Info</div>
                  <div className="info-row">
                    <span className="material-icons">schedule</span> {lesson.duration}
                  </div>
                  <div className="info-row">
                    <span className="material-icons">bar_chart</span> Beginner Level
                  </div>
                  <div className="info-row">
                    <span className="material-icons">quiz</span> {lesson.questions.length} Questions
                  </div>
                  <div className="info-row">
                    <span className="material-icons">translate</span> English
                  </div>
                </div>
              </Reveal>

              {/* Lesson progress */}
              <Reveal delay={100}>
                <div className="info-card">
                  <div className="info-card__title">Lesson Progress</div>
                  <div className="progress-labels">
                    <span>Lesson {lesson.id}</span>
                    <span>{lesson.id}/{totalLessons}</span>
                  </div>
                  <ProgressBar value={progressPct} />
                </div>
              </Reveal>

              {/* Overall course progress */}
              <Reveal delay={150}>
                <div className="info-card">
                  <div className="info-card__title">Course Progress</div>
                  <div className="progress-labels">
                    <span>Completed</span>
                    <span>{completedCount}/{totalLessons}</span>
                  </div>
                  <ProgressBar value={overallPct} />
                </div>
              </Reveal>

              {/* All lessons */}
              <Reveal delay={200}>
                <div className="info-card">
                  <div className="info-card__title">All Lessons</div>
                  {COURSE.lessons.map((l) => (
                    <LessonRow
                      key={l.id}
                      lesson={l}
                      isActive={l.id === lesson.id}
                      isCompleted={isCompleted(l.id)}
                      compact
                    />
                  ))}
                </div>
              </Reveal>
            </aside>

          </div>
        </div>
      </main>

      <Footer />

      {/* Quiz Modal */}
      <QuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        lesson={lesson}
        onComplete={handleQuizComplete}
      />
    </>
  );
}
