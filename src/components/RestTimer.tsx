import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2Icon, PauseIcon, PlayIcon, SkipForwardIcon, TimerIcon } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

interface RestTimerProps {
  /** Duração do descanso em segundos */
  duracao: number;
  /** Muda a cada série concluída para reiniciar a contagem */
  chave: number;
  /** Se o descanso já começou (após concluir uma série) */
  iniciado: boolean;
}

function formatar(segundos: number) {
  const m = Math.floor(segundos / 60);
  const s = segundos % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function RestTimer({ duracao, chave, iniciado }: RestTimerProps) {
  const { vibrar, vibracao } = useAccessibility();
  const [restante, setRestante] = useState(duracao);
  const [rodando, setRodando] = useState(false);
  const jaAvisou = useRef(false);

  useEffect(() => {
    setRestante(duracao);
    setRodando(iniciado);
    jaAvisou.current = false;
  }, [chave, duracao, iniciado]);

  useEffect(() => {
    if (!rodando || restante <= 0) return;
    const id = window.setInterval(() => setRestante((v) => Math.max(v - 1, 0)), 1000);
    return () => window.clearInterval(id);
  }, [rodando, restante]);

  useEffect(() => {
    if (restante === 0 && iniciado && !jaAvisou.current) {
      jaAvisou.current = true;
      setRodando(false);
      vibrar([200, 120, 200]);
    }
  }, [restante, iniciado, vibrar]);

  const terminou = restante === 0;
  const progresso = Math.round((duracao - restante) / duracao * 100);

  return (
    <section
      aria-labelledby="titulo-descanso"
      className={`mt-4 rounded-2xl border-2 p-4 ${
      terminou && iniciado ? 'border-brand bg-brand-soft' : 'border-line bg-ink-700'}`
      }>
      
      <div className="flex items-center justify-between gap-3">
        <h2
          id="titulo-descanso"
          className="flex items-center gap-2 text-[16px] font-extrabold text-text">
          
          {terminou && iniciado ?
          <CheckCircle2Icon className="h-5 w-5 text-brand" aria-hidden="true" /> :

          <TimerIcon className="h-5 w-5 text-brand" aria-hidden="true" />
          }
          Descanso
        </h2>
        <span
          className="text-[34px] font-extrabold leading-none tabular-nums text-text"
          aria-hidden="true">
          
          {formatar(restante)}
        </span>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={duracao}
        aria-valuenow={duracao - restante}
        aria-valuetext={`${formatar(restante)} restantes de descanso`}
        className="mt-3 h-3 w-full overflow-hidden rounded-full border-2 border-line bg-ink-600">
        
        <div
          className="h-full rounded-full bg-brand transition-[width] duration-300 ease-out"
          style={{ width: `${progresso}%` }} />
        
      </div>

      <p aria-live="assertive" className="mt-3 text-[15px] font-semibold text-text">
        {!iniciado ?
        'Descanso sugerido: 60 segundos entre as séries.' :
        terminou ?
        'Descanso concluído. Pode iniciar a próxima série.' :
        rodando ?
        `Faltam ${formatar(restante)} para a próxima série.` :
        `Descanso pausado em ${formatar(restante)}.`}
      </p>

      {iniciado && !terminou &&
      <div className="mt-3 flex gap-3">
          <button
          type="button"
          onClick={() => setRodando((v) => !v)}
          className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl border-2 border-line bg-ink-600 text-[15px] font-bold text-text transition-colors duration-150 ease-out hover:border-brand">
          
            {rodando ?
          <PauseIcon className="h-5 w-5" aria-hidden="true" /> :

          <PlayIcon className="h-5 w-5" aria-hidden="true" />
          }
            {rodando ? 'Pausar' : 'Retomar'}
          </button>
          <button
          type="button"
          onClick={() => setRestante(0)}
          className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl border-2 border-line bg-ink-600 text-[15px] font-bold text-text transition-colors duration-150 ease-out hover:border-brand">
          
            <SkipForwardIcon className="h-5 w-5" aria-hidden="true" />
            Pular
          </button>
        </div>
      }

      <p className="mt-3 text-[13px] font-medium text-text-muted">
        {vibracao ?
        'Aviso por vibração ativado — o app não usa som.' :
        'Aviso apenas visual — vibração desativada nas preferências.'}
      </p>
    </section>);

}