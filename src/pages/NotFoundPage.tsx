import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 1rem', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🔍</div>
          <h1 style={{ marginBottom: '.75rem' }}>Page Not Found</h1>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
            The page you're looking for doesn't exist.
          </p>
          <Link to="/" className="btn btn--accent">
            <span className="material-icons" style={{ fontSize: 18 }}>home</span>
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
