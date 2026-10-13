import React, { useEffect, useState } from 'react';
import { PhoneShell } from './components/PhoneShell';
import { TabBar, type TabId } from './components/TabBar';
import {
  AccessibilityProvider,
  escalas,
  useAccessibility,
  type EscalaTexto } from
'./contexts/AccessibilityContext';
import { Acessibilidade } from './pages/Acessibilidade';
import { Dashboard } from './pages/Dashboard';
import { ExercicioDetalhe } from './pages/ExercicioDetalhe';
import { Login } from './pages/Login';
import { Perfil } from './pages/Perfil';
import { Progresso } from './pages/Progresso';
import { Treino } from './pages/Treino';
import { useScreenInit } from './useScreenInit.js';

type Tela =
'login' |
'dashboard' |
'treino' |
'exercicio' |
'progresso' |
'perfil' |
'acessibilidade';

interface AppProps {
  /** Tela exibida ao abrir o protótipo */
  telaInicial?: 'login' | 'dashboard' | 'treino' | 'exercicio' | 'progresso' | 'perfil' | 'acessibilidade';
  /** Ampliação de texto aplicada em todas as telas */
  escalaTexto?: 'padrao' | 'grande' | 'maior';
  /** Abre o app já no modo de alto contraste */
  altoContraste?: boolean;
}

const nomesDeTela: Record<Tela, string> = {
  login: 'Tela de login',
  dashboard: 'Início',
  treino: 'Treino do dia',
  exercicio: 'Detalhe do exercício',
  progresso: 'Progresso',
  perfil: 'Perfil',
  acessibilidade: 'Preferências de acessibilidade'
};

function FitFlow({ telaInicial }: {telaInicial: Tela;}) {
  const { escalaTexto, altoContraste } = useAccessibility();
  const [tela, setTela] = useState<Tela>(telaInicial);
  const [exercicioId, setExercicioId] = useState('supino-reto');
  const [anuncio, setAnuncio] = useState('');

  useEffect(() => {
    setAnuncio(`${nomesDeTela[tela]} — tela aberta`);
  }, [tela]);

  const abaAtiva: TabId =
  tela === 'exercicio' ?
  'treino' :
  tela === 'acessibilidade' ?
  'perfil' :
  tela === 'login' ?
  'dashboard' :
  tela as TabId;

  return (
    <div className={`min-h-screen w-full bg-ink-900 py-6 ${altoContraste ? 'contraste-alto' : ''}`}>
      {/* Região viva: anuncia a troca de tela para leitores de tela */}
      <p aria-live="polite" className="sr-only">
        {anuncio}
      </p>

      <PhoneShell
        screenName={nomesDeTela[tela]}
        escala={escalas[escalaTexto].fator}
        footer={
        tela !== 'login' ?
        <TabBar active={abaAtiva} onChange={(tab) => setTela(tab)} /> :
        undefined
        }>
        
        {tela === 'login' && <Login onEntrar={() => setTela('dashboard')} />}

        {tela === 'dashboard' && <Dashboard onComecarTreino={() => setTela('treino')} />}

        {tela === 'treino' &&
        <Treino
          onVoltar={() => setTela('dashboard')}
          onAbrirExercicio={(id) => {
            setExercicioId(id);
            setTela('exercicio');
          }} />

        }

        {tela === 'exercicio' &&
        <ExercicioDetalhe exercicioId={exercicioId} onVoltar={() => setTela('treino')} />
        }

        {tela === 'progresso' && <Progresso />}

        {tela === 'perfil' &&
        <Perfil
          onSair={() => setTela('login')}
          onAbrirAcessibilidade={() => setTela('acessibilidade')} />

        }

        {tela === 'acessibilidade' && <Acessibilidade onVoltar={() => setTela('perfil')} />}
      </PhoneShell>
    </div>);

}

export function App({
  telaInicial = 'login',
  escalaTexto = 'padrao',
  altoContraste = false
}: AppProps) {
  const screenInit = useScreenInit() as Partial<{
    tela: Tela;
    escalaTexto: EscalaTexto;
    altoContraste: boolean;
  }>;

  return (
    <AccessibilityProvider
      escalaInicial={(screenInit.escalaTexto ?? escalaTexto) as EscalaTexto}
      altoContrasteInicial={screenInit.altoContraste ?? altoContraste}>
      
      <FitFlow telaInicial={screenInit.tela ?? telaInicial} />
    </AccessibilityProvider>);

}