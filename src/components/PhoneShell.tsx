import React from 'react';
import { BatteryFullIcon, SignalIcon, WifiIcon } from 'lucide-react';

interface PhoneShellProps {
  /** Nome da tela, anunciado por leitores de tela ao entrar na região */
  screenName: string;
  /** Fator de ampliação vindo das preferências de acessibilidade */
  escala?: number;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function PhoneShell({ screenName, escala = 1, children, footer }: PhoneShellProps) {
  return (
    <div className="mx-auto flex h-[844px] w-full max-w-[390px] flex-col overflow-hidden rounded-[36px] border-2 border-line bg-ink-900 shadow-2xl">
      <div
        className="flex shrink-0 items-center justify-between px-6 pb-1 pt-3 text-[13px] font-semibold text-text"
        aria-hidden="true">
        
        <span>09:41</span>
        <div className="flex items-center gap-1.5">
          <SignalIcon className="h-4 w-4" />
          <WifiIcon className="h-4 w-4" />
          <BatteryFullIcon className="h-4 w-4" />
        </div>
      </div>

      <main
        aria-label={screenName}
        style={{ zoom: escala }}
        className="flex-1 overflow-y-auto px-5 pb-6 pt-2 [scrollbar-width:thin]">
        
        {children}
      </main>

      {footer && <div style={{ zoom: escala }}>{footer}</div>}
    </div>);

}