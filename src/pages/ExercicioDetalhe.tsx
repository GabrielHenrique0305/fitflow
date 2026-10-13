import React, { useState } from 'react';
import { CheckIcon, LayersIcon, RepeatIcon, WeightIcon } from 'lucide-react';
import { ScreenHeader } from '../components/ScreenHeader';
import { RestTimer } from '../components/RestTimer';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { exercicios, fotoExercicio } from '../data/fitflow';

interface ExercicioDetalheProps {
  exercicioId: string;
  onVoltar: () => void;
}

export function ExercicioDetalhe({ exercicioId, onVoltar }: ExercicioDetalheProps) {
  const exercicio = exercicios.find((e) => e.id === exercicioId) ?? exercicios[0];
  const { vibrar } = useAccessibility();
  const [serieAtual, setSerieAtual] = useState(2);
  const [seriesFeitas, setSeriesFeitas] = useState(0);

  const concluido = serieAtual > exercicio.series;
  const progresso = Math.min(Math.round((serieAtual - 1) / exercicio.series * 100), 100);

  return (
    <div className="pb-2">
      <ScreenHeader
        titulo={exercicio.nome}
        subtitulo={`${exercicio.grupo} · Membros superiores`}
        onBack={onVoltar}
        backLabel="Voltar para a lista" />
      

      <img
        src={fotoExercicio}
        alt={`Demonstração do exercício ${exercicio.nome}: atleta deitado no banco empurrando a barra para cima`}
        className="h-[210px] w-full rounded-xl2 border-2 border-line object-cover" />
      

      <ul className="mt-4 flex gap-3">
        {[
        { Icon: LayersIcon, valor: `${exercicio.series}`, rotulo: 'séries' },
        { Icon: RepeatIcon, valor: `${exercicio.reps}`, rotulo: 'repetições' },
        { Icon: WeightIcon, valor: `${exercicio.cargaKg} kg`, rotulo: 'carga' }].
        map(({ Icon, valor, rotulo }) =>
        <li
          key={rotulo}
          className="flex flex-1 flex-col gap-1 rounded-2xl border-2 border-line bg-ink-700 px-3 py-3">
          
            <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
            <span className="text-[19px] font-extrabold leading-tight text-text">{valor}</span>
            <span className="text-[13px] font-medium text-text-muted">{rotulo}</span>
          </li>
        )}
      </ul>

      <section aria-labelledby="progresso-serie" className="mt-5">
        <div className="flex items-baseline justify-between">
          <h2 id="progresso-serie" className="text-[17px] font-extrabold text-text">
            {concluido ? 'Exercício concluído' : `Série ${serieAtual} de ${exercicio.series}`}
          </h2>
          <span className="text-[15px] font-bold text-brand">{progresso}%</span>
        </div>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progresso}
          aria-valuetext={`${progresso} por cento do exercício concluído`}
          className="mt-2 h-3 w-full overflow-hidden rounded-full border-2 border-line bg-ink-700">
          
          <div className="h-full rounded-full bg-brand" style={{ width: `${progresso}%` }} />
        </div>
      </section>

      <button
        type="button"
        disabled={concluido}
        onClick={() => {
          setSerieAtual((s) => Math.min(s + 1, exercicio.series + 1));
          setSeriesFeitas((n) => n + 1);
          vibrar(60);
        }}
        className={`mt-5 flex min-h-[60px] w-full items-center justify-center gap-2 rounded-2xl text-[17px] font-extrabold transition-colors duration-150 ease-out ${
        concluido ?
        'cursor-not-allowed border-2 border-line bg-ink-700 text-text-muted' :
        'bg-brand text-brand-ink hover:bg-brand-strong'}`
        }>
        
        <CheckIcon className="h-5 w-5" aria-hidden="true" />
        {concluido ? 'Todas as séries concluídas' : 'Concluir série'}
      </button>

      <RestTimer duracao={60} chave={seriesFeitas} iniciado={seriesFeitas > 0} />
    </div>);

}