import React from 'react';
import { CheckCircle2Icon, CircleDashedIcon, PlayCircleIcon } from 'lucide-react';
import type { ExerciseStatus } from '../types/fitflow';

const map: Record<ExerciseStatus, {label: string;Icon: typeof CheckCircle2Icon;classes: string;}> = {
  concluido: {
    label: 'Concluído',
    Icon: CheckCircle2Icon,
    classes: 'bg-brand-soft text-brand border-brand'
  },
  em_andamento: {
    label: 'Em andamento',
    Icon: PlayCircleIcon,
    classes: 'bg-ink-600 text-text border-text-muted'
  },
  pendente: {
    label: 'A fazer',
    Icon: CircleDashedIcon,
    classes: 'bg-ink-700 text-text-muted border-line'
  }
};

export function StatusBadge({ status }: {status: ExerciseStatus;}) {
  const { label, Icon, classes } = map[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-1 text-[12px] font-bold ${classes}`}>
      
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
    </span>);

}