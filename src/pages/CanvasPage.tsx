import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './CanvasPage.css';

export const CanvasPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const prompt = location.state?.prompt || '';

  React.useEffect(() => {
    // Redirect to home if not authenticated
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="canvas-page">
      <header className="canvas-header">
        <div className="header-content">
          <h1 className="logo" onClick={() => navigate('/')}>Genie</h1>
          <div className="header-actions">
            <span className="user-email">{user.email}</span>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="canvas-main">
        <div className="canvas-content">
          <div className="coming-soon">
            <h2>Coming Soon</h2>
            <p>Your application canvas is being prepared...</p>
            {prompt && (
              <div className="prompt-display">
                <h3>Your Prompt:</h3>
                <p>{prompt}</p>
              </div>
            )}
            <button onClick={() => navigate('/')} className="back-btn">
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
