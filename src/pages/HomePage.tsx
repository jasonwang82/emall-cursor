import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AuthModal } from '../components/AuthModal';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!prompt.trim()) return;
    
    if (!user) {
      // Show auth modal if user is not logged in
      setAuthModalMode('login');
      setShowAuthModal(true);
      return;
    }
    
    // Navigate to canvas with the prompt
    navigate('/canvas', { state: { prompt } });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthModalMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="header-content">
          <h1 className="logo">Genie</h1>
          <div className="header-actions">
            {user ? (
              <>
                <span className="user-email">{user.email}</span>
                <button onClick={logout} className="logout-btn">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={() => openAuthModal('login')} className="header-btn">
                  Login
                </button>
                <button onClick={() => openAuthModal('register')} className="header-btn header-btn-primary">
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="home-main">
        <div className="home-content">
          <div className="home-intro">
            <h2 className="home-title">Build Apps with AI</h2>
            <p className="home-subtitle">
              Describe your application idea, and Genie will generate it for you
            </p>
          </div>

          <div className="prompt-container">
            <form onSubmit={handleSubmit} className="prompt-form">
              <textarea
                className="prompt-input"
                placeholder="Describe your application idea... (e.g., 'A task management app with drag and drop')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                rows={4}
              />
              <div className="prompt-actions">
                <p className="prompt-hint">
                  Press Enter or click Submit to continue
                  {!user && <span className="auth-required"> (login required)</span>}
                </p>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={!prompt.trim()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authModalMode}
      />
    </div>
  );
};
