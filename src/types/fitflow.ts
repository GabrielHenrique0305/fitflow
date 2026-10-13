export type ExerciseStatus = 'concluido' | 'em_andamento' | 'pendente';

export interface Exercise {
  id: string;
  nome: string;
  grupo: string;
  series: number;
  reps: number;
  cargaKg: number;
  status: ExerciseStatus;
}

export interface DayProgress {
  dia: string;
  diaCompleto: string;
  minutos: number;
  treinou: boolean;
}

export interface Activity {
  id: string;
  nome: string;
  data: string;
  duracao: string;
  exercicios: number;
}

export interface ProfileOption {
  id: string;
  titulo: string;
  descricao: string;
}