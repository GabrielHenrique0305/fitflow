import type { Activity, DayProgress, Exercise, ProfileOption } from '../types/fitflow';

export const usuario = {
  nome: 'João Silva',
  primeiroNome: 'João',
  email: 'joao.silva@email.com',
  foto: "/b3731d5f-e93b-40f7-bcb6-3ee2f3bd48c0.jpg"
};

export const treinoDeHoje = {
  nome: 'Peito + Tríceps',
  foco: 'Força e hipertrofia',
  duracaoMin: 45,
  totalExercicios: 6
};

export const exercicios: Exercise[] = [
{
  id: 'supino-reto',
  nome: 'Supino reto',
  grupo: 'Peitoral',
  series: 4,
  reps: 10,
  cargaKg: 80,
  status: 'em_andamento'
},
{
  id: 'supino-inclinado',
  nome: 'Supino inclinado',
  grupo: 'Peitoral superior',
  series: 4,
  reps: 10,
  cargaKg: 60,
  status: 'pendente'
},
{
  id: 'crucifixo',
  nome: 'Crucifixo',
  grupo: 'Peitoral',
  series: 3,
  reps: 12,
  cargaKg: 22,
  status: 'pendente'
},
{
  id: 'triceps-pulley',
  nome: 'Tríceps pulley',
  grupo: 'Tríceps',
  series: 4,
  reps: 12,
  cargaKg: 35,
  status: 'pendente'
},
{
  id: 'triceps-frances',
  nome: 'Tríceps francês',
  grupo: 'Tríceps',
  series: 3,
  reps: 12,
  cargaKg: 25,
  status: 'pendente'
},
{
  id: 'triceps-testa',
  nome: 'Tríceps testa',
  grupo: 'Tríceps',
  series: 3,
  reps: 12,
  cargaKg: 30,
  status: 'pendente'
}];


export const fotoExercicio = "/288d5c25-46b4-46c8-b840-a3eb9ba450a3.jpg";


export const semana: DayProgress[] = [
{ dia: 'Seg', diaCompleto: 'segunda-feira', minutos: 52, treinou: true },
{ dia: 'Ter', diaCompleto: 'terça-feira', minutos: 0, treinou: false },
{ dia: 'Qua', diaCompleto: 'quarta-feira', minutos: 45, treinou: true },
{ dia: 'Qui', diaCompleto: 'quinta-feira', minutos: 38, treinou: true },
{ dia: 'Sex', diaCompleto: 'sexta-feira', minutos: 60, treinou: true },
{ dia: 'Sáb', diaCompleto: 'sábado', minutos: 0, treinou: false },
{ dia: 'Dom', diaCompleto: 'domingo', minutos: 0, treinou: false }];


export const atividades: Activity[] = [
{ id: 'a1', nome: 'Peito + Tríceps', data: 'Hoje, 07:20', duracao: '48 min', exercicios: 6 },
{ id: 'a2', nome: 'Costas + Bíceps', data: 'Ontem, 07:05', duracao: '52 min', exercicios: 7 },
{ id: 'a3', nome: 'Pernas Completo', data: '26 fev, 18:40', duracao: '61 min', exercicios: 8 }];


/* Dias do mês de fevereiro em que houve treino */
export const diasTreinados = [2, 3, 5, 7, 9, 10, 12, 14, 16, 17, 19, 21, 23, 24, 26, 27, 28];

export const opcoesPerfil: ProfileOption[] = [
{
  id: 'acessibilidade',
  titulo: 'Acessibilidade',
  descricao: 'Tamanho do texto, alto contraste e vibração'
},
{ id: 'dados', titulo: 'Meus dados', descricao: 'Nome, e-mail e medidas corporais' },
{ id: 'notificacoes', titulo: 'Notificações', descricao: 'Lembretes de treino e descanso' },
{ id: 'preferencias', titulo: 'Preferências', descricao: 'Unidades, idioma e metas semanais' },
{ id: 'sobre', titulo: 'Sobre o app', descricao: 'Versão 2.4.0 e termos de uso' }];