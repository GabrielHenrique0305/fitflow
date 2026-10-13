import React from 'react';
import { ArrowLeftIcon } from 'lucide-react';

interface ScreenHeaderProps {
  titulo: string;
  subtitulo?: string;
  onBack?: () => void;
  backLabel?: string;
}

export function ScreenHeader({ titulo, subtitulo, onBack, backLabel = 'Voltar' }: ScreenHeaderProps) {
  return (
    <header className="mb-4 pt-1">
      {onBack &&
      <button
        type="button"
        onClick={onBack}
        className="-ml-2 mb-3 inline-flex min-h-[48px] items-center gap-2 rounded-xl px-2 text-[15px] font-bold text-text transition-colors duration-150 ease-out hover:bg-ink-700">
        
          <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
          {backLabel}
        </button>
      }
      <h1 className="text-[26px] font-extrabold leading-tight text-text">{titulo}</h1>
      {subtitulo && <p className="mt-1 text-[15px] font-medium text-text-muted">{subtitulo}</p>}
    </header>);

}