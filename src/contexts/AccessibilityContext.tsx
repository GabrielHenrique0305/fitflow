import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export type EscalaTexto = 'padrao' | 'grande' | 'maior';

interface AccessibilityValue {
  escalaTexto: EscalaTexto;
  setEscalaTexto: (escala: EscalaTexto) => void;
  altoContraste: boolean;
  setAltoContraste: (ativo: boolean) => void;
  vibracao: boolean;
  setVibracao: (ativo: boolean) => void;
  /** Dispara vibração curta, respeitando a preferência do usuário */
  vibrar: (padrao: number | number[]) => void;
}

export const escalas: Record<EscalaTexto, {fator: number;rotulo: string;descricao: string;}> = {
  padrao: { fator: 1, rotulo: 'Padrão', descricao: 'Tamanho original do app' },
  grande: { fator: 1.15, rotulo: 'Grande', descricao: '15% maior em todo o app' },
  maior: { fator: 1.3, rotulo: 'Muito grande', descricao: '30% maior em todo o app' }
};

const AccessibilityContext = createContext<AccessibilityValue | null>(null);

interface ProviderProps {
  children: React.ReactNode;
  escalaInicial?: EscalaTexto;
  altoContrasteInicial?: boolean;
}

export function AccessibilityProvider({
  children,
  escalaInicial = 'padrao',
  altoContrasteInicial = false
}: ProviderProps) {
  const [escalaTexto, setEscalaTexto] = useState<EscalaTexto>(escalaInicial);
  const [altoContraste, setAltoContraste] = useState(altoContrasteInicial);
  const [vibracao, setVibracao] = useState(true);

  const vibrar = useCallback(
    (padrao: number | number[]) => {
      if (!vibracao) return;
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(padrao);
      }
    },
    [vibracao]
  );

  const value = useMemo(
    () => ({
      escalaTexto,
      setEscalaTexto,
      altoContraste,
      setAltoContraste,
      vibracao,
      setVibracao,
      vibrar
    }),
    [escalaTexto, altoContraste, vibracao, vibrar]
  );

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}

export function useAccessibility(): AccessibilityValue {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibility precisa estar dentro de AccessibilityProvider');
  return ctx;
}