import React from 'react';
import { CheckIcon, ClockIcon, DumbbellIcon, FlameIcon, PlayIcon } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { semana, treinoDeHoje, usuario } from '../data/fitflow';

interface DashboardProps {
  onComecarTreino: () => void;
}

export function Dashboard({ onComecarTreino }: DashboardProps) {
  const maxMinutos = Math.max(...semana.map((d) => d.minutos), 60);

  return (
    <div className="pb-2">
      <header className="pt-1">
        <h1 className="text-[26px] font-extrabold leading-tight text-text">
          Olá, {usuario.primeiroNome}!
        </h1>
        <p className="mt-1 text-[15px] font-medium text-text-muted">
          Pronto para o treino de hoje?
        </p>
      </header>

      <section
        aria-labelledby="treino-hoje"
        className="mt-5 rounded-xl2 border-2 border-brand bg-brand-soft p-5">
        
        <p className="text-[13px] font-bold uppercase tracking-wide text-brand">Treino de hoje</p>
        <h2 id="treino-hoje" className="mt-1 text-[22px] font-extrabold text-text">
          {treinoDeHoje.nome}
        </h2>
        <p className="mt-1 text-[15px] font-medium text-text-muted">
          {treinoDeHoje.foco} · {treinoDeHoje.totalExercicios} exercícios ·{' '}
          {treinoDeHoje.duracaoMin} min
        </p>
        <button
          type="button"
          onClick={onComecarTreino}
          className="mt-4 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-brand text-[17px] font-extrabold text-brand-ink transition-colors duration-150 ease-out hover:bg-brand-strong">
          
          <PlayIcon className="h-5 w-5" aria-hidden="true" />
          Começar treino
        </button>
      </section>

      <section aria-labelledby="resumo-semana" className="mt-6">
        <h2 id="resumo-semana" className="sr-only">
          Resumo da semana
        </h2>
        <div className="flex gap-3">
          <StatCard Icon={DumbbellIcon} valor="4" unidade="" rotulo="Treinos na semana" />
          <StatCard Icon={ClockIcon} valor="3,5" unidade="h" rotulo="Tempo treinado" />
          <StatCard Icon={FlameIcon} valor="12" unidade="" rotulo="Exercícios feitos" />
        </div>
      </section>

      <section aria-labelledby="seu-progresso" className="mt-6">
        <h2 id="seu-progresso" className="text-[18px] font-extrabold text-text">
          Seu progresso na semana
        </h2>
        <p className="mt-1 text-[14px] font-medium text-text-muted">
          Minutos treinados por dia. Dias com treino têm o sinal de check.
        </p>

        <ul className="mt-4 flex items-end justify-between gap-2 rounded-2xl border-2 border-line bg-ink-700 px-3 pb-3 pt-4">
          {semana.map((dia) =>
          <li key={dia.dia} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-[12px] font-bold text-text">
                {dia.treinou ? `${dia.minutos}m` : '—'}
              </span>
              <div className="flex h-[92px] w-full items-end justify-center">
                <div
                role="img"
                aria-label={`${dia.diaCompleto}: ${
                dia.treinou ? `${dia.minutos} minutos treinados` : 'sem treino'}`
                }
                style={{ height: `${Math.max(dia.minutos / maxMinutos * 92, 8)}px` }}
                className={`w-full rounded-lg border-2 ${
                dia.treinou ? 'border-brand bg-brand' : 'border-line bg-ink-500'}`
                } />
              
              </div>
              <span className="flex h-5 items-center justify-center">
                {dia.treinou ?
              <CheckIcon className="h-4 w-4 text-brand" aria-hidden="true" /> :

              <span aria-hidden="true" className="text-[13px] font-bold text-text-faint">
                    –
                  </span>
              }
              </span>
              <span className="text-[13px] font-semibold text-text-muted">{dia.dia}</span>
            </li>
          )}
        </ul>
      </section>
    </div>);

}