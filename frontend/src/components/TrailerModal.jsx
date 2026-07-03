import React, { useEffect } from 'react';

const TrailerModal = ({ open, trailerKey, loading, error, onClose }) => {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="trailer-modal-overlay" onClick={onClose}>
      <div
        className="trailer-modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="trailer-modal-close"
          type="button"
          aria-label="Close trailer"
          onClick={onClose}
        >
          ×
        </button>

        <div className="trailer-modal-body">
          {loading ? (
            <div className="trailer-modal-loader">Loading trailer...</div>
          ) : error ? (
            <div className="trailer-modal-error">{error}</div>
          ) : trailerKey ? (
            <div className="trailer-modal-video">
              <iframe
                title="Movie trailer"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="trailer-modal-error">
              Trailer unavailable. Please try another movie.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
