import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import LessonRow from '@/components/LessonRow';
import ProgressBar from '@/components/ProgressBar';
import { COURSE } from '@/data/course';
import { useProgress } from '@/context/ProgressContext';

export default function CoursesPage() {
  const { completedCount, isCompleted } = useProgress();
  const total = COURSE.lessons.length;
  const pct = Math.round((completedCount / total) * 100);

  return (
    <>
      <Navbar />

      <main style={{ flex: 1 }}>
        {/* ── PAGE HEADER ── */}
        <section className="page-header" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero__dot-bg" />
          <div className="hero__orb hero__orb--1" style={{ opacity: 0.5 }} />
          <div className="container" style={{ position: 'relative' }}>
            <div className="hero__badge" style={{ marginBottom: '1rem' }}>
              <span className="material-icons" style={{ fontSize: 13 }}>menu_book</span>
              Web Development Track
            </div>
            <h1>Available Courses</h1>
            <p>Choose a lesson and start building your web development skills, one step at a time.</p>
          </div>
        </section>

        {/* ── COURSE LIST ── */}
        <section className="course-list">
          <div className="container">
            <div className="course-list__center">

              {/* Progress strip */}
              <Reveal>
                <div className="progress-strip">
                  <div className="progress-strip__top">
                    <span className="progress-strip__label">Your Progress</span>
                    <span className="progress-strip__count">
                      {completedCount} / {total} Completed
                    </span>
                  </div>
                  <ProgressBar value={pct} />
                </div>
              </Reveal>

              {/* Lesson list */}
              <Reveal delay={100}>
                <div className="course-card">
                  {COURSE.lessons.map((lesson, i) => (
                    <div key={lesson.id}>
                      <LessonRow
                        lesson={lesson}
                        isCompleted={isCompleted(lesson.id)}
                        showDesc
                      />
                      {i < COURSE.lessons.length - 1 && <div className="lesson-sep" />}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={150}>
                <p className="lesson-hint">
                  <span className="material-icons" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 4 }}>info</span>
                  Each lesson includes a video + quiz to test your knowledge
                </p>
              </Reveal>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
