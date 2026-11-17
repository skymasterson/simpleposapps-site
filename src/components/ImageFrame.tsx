import { useState } from 'react';

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  fallbackTitle: string;
}

export function ImageFrame({
  src,
  alt,
  className = '',
  aspectClass = 'aspect-video',
  fallbackTitle,
}: ImageFrameProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 border border-slate-200 text-slate-600 p-6 ${aspectClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          className="w-10 h-10 text-slate-400 mb-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 15l5-5 4 4 3-3 6 6" />
        </svg>
        <span className="text-sm font-medium text-slate-700 text-center">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${aspectClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
