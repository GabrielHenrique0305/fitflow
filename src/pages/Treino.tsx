import React from 'react';
import { ChevronRightIcon, ClockIcon, DumbbellIcon } from 'lucide-react';
import { ScreenHeader } from '../components/ScreenHeader';
import { StatusBadge } from '../components/StatusBadge';
import { exercicios, treinoDeHoje } from '../data/fitflow';

interface TreinoProps {
  onAbrirExercicio: (id: string) => void;
  onVoltar: () => void;
}

export function Treino({ onAbrirExercicio, onVoltar }: TreinoProps) {
  const concluidos = exercicios.filter((e) => e.status === 'concluido').length;

  return (
    <div className="pb-2">
      <ScreenHeader
        titulo={treinoDeHoje.nome}
        subtitulo={`${treinoDeHoje.foco} · ${treinoDeHoje.duracaoMin} min estimados`}
        onBack={onVoltar}
        backLabel="Voltar para o início" />
      

      <p className="mb-4 flex items-center gap-2 rounded-2xl border-2 border-line bg-ink-700 px-4 py-3 text-[15px] font-semibold text-text">
        <ClockIcon className="h-5 w-5 text-brand" aria-hidden="true" />
        {concluidos} de {exercicios.length} exercícios concluídos
      </p>

      <h2 className="mb-3 text-[18px] font-extrabold text-text">Exercícios cadastrados</h2>

      <ul className="flex flex-col gap-3">
        {exercicios.map((exercicio, index) =>
        <li key={exercicio.id}>
            <button
            type="button"
            onClick={() => onAbrirExercicio(exercicio.id)}
            className="flex min-h-[84px] w-full items-center gap-3 rounded-2xl border-2 border-line bg-ink-700 p-3 text-left transition-colors duration-150 ease-out hover:border-brand hover:bg-ink-600">
            
              <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-ink-500 text-[16px] font-extrabold text-text">
                <span aria-hidden="true">{index + 1}</span>
                <span className="sr-only">Exercício {index + 1}</span>
                <DumbbellIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[17px] font-bold leading-snug text-text">
                  {exercicio.nome}
                </span>
                <span className="mt-0.5 block text-[14px] font-medium text-text-muted">
                  {exercicio.series} séries × {exercicio.reps} reps · {exercicio.cargaKg} kg
                </span>
                <span className="mt-2 block">
                  <StatusBadge status={exercicio.status} />
                </span>
              </span>

              <ChevronRightIcon className="h-6 w-6 shrink-0 text-text-muted" aria-hidden="true" />
            </button>
          </li>
        )}
      </ul>
    </div>);

}