import React from 'react';
import {
  AccessibilityIcon,
  BellIcon,
  CalendarRangeIcon,
  ChevronRightIcon,
  ClockIcon,
  DumbbellIcon,
  InfoIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon } from
'lucide-react';
import { opcoesPerfil, usuario } from '../data/fitflow';

interface PerfilProps {
  onSair: () => void;
  onAbrirAcessibilidade: () => void;
}

const icones = {
  acessibilidade: AccessibilityIcon,
  dados: UserIcon,
  notificacoes: BellIcon,
  preferencias: SettingsIcon,
  sobre: InfoIcon
} as const;

export function Perfil({ onSair, onAbrirAcessibilidade }: PerfilProps) {
  return (
    <div className="pb-2">
      <h1 className="pt-1 text-[26px] font-extrabold leading-tight text-text">Meu perfil</h1>

      <section className="mt-4 flex items-center gap-4 rounded-xl2 border-2 border-line bg-ink-700 p-4">
        <img
          src={usuario.foto}
          alt=""
          className="h-16 w-16 shrink-0 rounded-full border-2 border-brand object-cover" />
        
        <div className="min-w-0">
          <p className="text-[20px] font-extrabold text-text">{usuario.nome}</p>
          <p className="mt-0.5 truncate text-[14px] font-medium text-text-muted">{usuario.email}</p>
        </div>
      </section>

      <section aria-label="Resumo da sua jornada" className="mt-4 flex gap-3">
        {[
        { Icon: DumbbellIcon, valor: '48', rotulo: 'treinos concluídos' },
        { Icon: ClockIcon, valor: '36,5h', rotulo: 'tempo total' },
        { Icon: CalendarRangeIcon, valor: '12', rotulo: 'semanas ativo' }].
        map(({ Icon, valor, rotulo }) =>
        <div
          key={rotulo}
          className="flex flex-1 flex-col gap-1 rounded-2xl border-2 border-line bg-ink-700 px-3 py-3">
          
            <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
            <span className="text-[19px] font-extrabold leading-tight text-text">{valor}</span>
            <span className="text-[13px] font-medium leading-snug text-text-muted">{rotulo}</span>
          </div>
        )}
      </section>

      <nav aria-label="Configurações da conta" className="mt-6">
        <h2 className="mb-3 text-[18px] font-extrabold text-text">Configurações</h2>
        <ul className="flex flex-col gap-3">
          {opcoesPerfil.map((opcao) => {
            const Icon = icones[opcao.id as keyof typeof icones];
            return (
              <li key={opcao.id}>
                <button
                  type="button"
                  onClick={opcao.id === 'acessibilidade' ? onAbrirAcessibilidade : undefined}
                  className="flex min-h-[72px] w-full items-center gap-3 rounded-2xl border-2 border-line bg-ink-700 p-3 text-left transition-colors duration-150 ease-out hover:border-brand hover:bg-ink-600">
                  
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[16px] font-bold text-text">{opcao.titulo}</span>
                    <span className="mt-0.5 block text-[14px] font-medium text-text-muted">
                      {opcao.descricao}
                    </span>
                  </span>
                  <ChevronRightIcon className="h-6 w-6 shrink-0 text-text-muted" aria-hidden="true" />
                </button>
              </li>);

          })}
        </ul>
      </nav>

      <button
        type="button"
        onClick={onSair}
        className="mt-6 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl border-2 border-alert bg-alert-soft text-[16px] font-extrabold text-alert transition-colors duration-150 ease-out hover:bg-ink-600">
        
        <LogOutIcon className="h-5 w-5" aria-hidden="true" />
        Sair do FitFlow
      </button>
    </div>);

}