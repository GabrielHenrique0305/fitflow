import React from 'react';
import { BarChart3Icon, DumbbellIcon, HomeIcon, UserIcon } from 'lucide-react';

export type TabId = 'dashboard' | 'treino' | 'progresso' | 'perfil';

interface TabBarProps {
  active: TabId;
  onChange: (tab: TabId) => void;
}

const tabs: {id: TabId;label: string;Icon: typeof HomeIcon;}[] = [
{ id: 'dashboard', label: 'Início', Icon: HomeIcon },
{ id: 'treino', label: 'Treino', Icon: DumbbellIcon },
{ id: 'progresso', label: 'Progresso', Icon: BarChart3Icon },
{ id: 'perfil', label: 'Perfil', Icon: UserIcon }];


export function TabBar({ active, onChange }: TabBarProps) {
  return (
    <nav
      aria-label="Navegação principal"
      className="shrink-0 border-t-2 border-line bg-ink-800 px-2 pb-3 pt-1">
      
      <ul className="flex items-stretch">
        {tabs.map(({ id, label, Icon }) => {
          const isActive = id === active;
          return (
            <li key={id} className="flex-1">
              <button
                type="button"
                onClick={() => onChange(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex min-h-[60px] w-full flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 transition-colors duration-150 ease-out ${
                isActive ?
                'bg-brand-soft text-brand' :
                'text-text-muted hover:bg-ink-700 hover:text-text'}`
                }>
                
                <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={isActive ? 2.6 : 2} />
                <span className={`text-[13px] leading-none ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {label}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-1 w-6 rounded-full ${isActive ? 'bg-brand' : 'bg-transparent'}`} />
                
                {isActive && <span className="sr-only">(tela atual)</span>}
              </button>
            </li>);

        })}
      </ul>
    </nav>);

}