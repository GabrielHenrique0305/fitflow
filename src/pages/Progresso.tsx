import React from 'react';
import { CalendarCheckIcon, CheckIcon, ClockIcon, DumbbellIcon, FlameIcon } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { atividades, diasTreinados } from '../data/fitflow';

const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const diasDoMes = Array.from({ length: 28 }, (_, i) => i + 1);

export function Progresso() {
  return (
    <div className="pb-2">
      <header className="pt-1">
        <h1 className="text-[26px] font-extrabold leading-tight text-text">
          Histórico e desempenho
        </h1>
        <p className="mt-1 text-[15px] font-medium text-text-muted">
          Acompanhe sua constância nos últimos treinos
        </p>
      </header>

      <section aria-label="Resumo geral" className="mt-5 flex gap-3">
        <StatCard Icon={DumbbellIcon} valor="18" unidade="" rotulo="Treinos concluídos" />
        <StatCard Icon={ClockIcon} valor="14,2" unidade="h" rotulo="Tempo total" />
        <StatCard Icon={FlameIcon} valor="5" unidade="dias" rotulo="Sequência atual" />
      </section>

      <section aria-labelledby="frequencia" className="mt-6">
        <h2 id="frequencia" className="text-[18px] font-extrabold text-text">
          Frequência mensal — Fevereiro
        </h2>
        <p className="mt-1 text-[14px] font-medium text-text-muted">
          {diasTreinados.length} dias com treino registrado neste mês.
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold">
          <span className="inline-flex items-center gap-1.5 text-text">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-brand">
              <CheckIcon className="h-3.5 w-3.5 text-brand-ink" aria-hidden="true" />
            </span>
            Dia com treino
          </span>
          <span className="inline-flex items-center gap-1.5 text-text-muted">
            <span className="h-5 w-5 rounded-md border-2 border-line bg-ink-600" aria-hidden="true" />
            Dia sem treino
          </span>
        </div>

        <div className="mt-4 rounded-2xl border-2 border-line bg-ink-700 p-3">
          <div className="grid grid-cols-7 gap-1.5" role="presentation">
            {diasSemana.map((d) =>
            <span
              key={d}
              className="py-1 text-center text-[12px] font-bold uppercase text-text-muted">
              
                {d}
              </span>
            )}
          </div>
          <ul className="mt-1 grid grid-cols-7 gap-1.5">
            {diasDoMes.map((dia) => {
              const treinou = diasTreinados.includes(dia);
              return (
                <li key={dia}>
                  <span
                    aria-label={`${dia} de fevereiro: ${treinou ? 'treino realizado' : 'sem treino'}`}
                    className={`flex h-10 w-full flex-col items-center justify-center rounded-lg border-2 text-[13px] font-bold ${
                    treinou ?
                    'border-brand bg-brand text-brand-ink' :
                    'border-line bg-ink-600 text-text-muted'}`
                    }>
                    
                    <span aria-hidden="true">{dia}</span>
                    {treinou && <CheckIcon className="h-3 w-3" aria-hidden="true" />}
                  </span>
                </li>);

            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="atividades" className="mt-6">
        <h2 id="atividades" className="text-[18px] font-extrabold text-text">
          Atividades recentes
        </h2>
        <ul className="mt-3 flex flex-col gap-3">
          {atividades.map((atividade) =>
          <li
            key={atividade.id}
            className="flex min-h-[72px] items-center gap-3 rounded-2xl border-2 border-line bg-ink-700 p-3">
            
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                <CalendarCheckIcon className="h-5 w-5 text-brand" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[16px] font-bold text-text">{atividade.nome}</p>
                <p className="mt-0.5 text-[14px] font-medium text-text-muted">
                  {atividade.data} · {atividade.exercicios} exercícios
                </p>
              </div>
              <span className="shrink-0 rounded-full border-2 border-line bg-ink-600 px-2.5 py-1 text-[13px] font-bold text-text">
                {atividade.duracao}
              </span>
            </li>
          )}
        </ul>
      </section>
    </div>);

}