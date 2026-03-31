import { Routes, Route } from 'react-router-dom';
import { ProgressProvider } from '@/context/ProgressContext';
import HomePage from '@/pages/HomePage';
import CoursesPage from '@/pages/CoursesPage';
import LessonPage from '@/pages/LessonPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <ProgressProvider>
      <Routes>
        <Route path="/"                element={<HomePage />} />
        <Route path="/courses"         element={<CoursesPage />} />
        <Route path="/lessons/:slug"   element={<LessonPage />} />
        <Route path="*"                element={<NotFoundPage />} />
      </Routes>
    </ProgressProvider>
  );
}
