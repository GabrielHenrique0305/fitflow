import React from 'react';
import { CheckIcon, ContrastIcon, SmartphoneIcon, TypeIcon, XIcon } from 'lucide-react';
import { ScreenHeader } from '../components/ScreenHeader';
import { escalas, useAccessibility, type EscalaTexto } from '../contexts/AccessibilityContext';

interface AcessibilidadeProps {
  onVoltar: () => void;
}

const ordemEscalas: EscalaTexto[] = ['padrao', 'grande', 'maior'];

interface ToggleProps {
  Icon: typeof ContrastIcon;
  titulo: string;
  descricao: string;
  ativo: boolean;
  onChange: (ativo: boolean) => void;
}

function Toggle({ Icon, titulo, descricao, ativo, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={ativo}
      onClick={() => onChange(!ativo)}
      className="flex min-h-[80px] w-full items-center gap-3 rounded-2xl border-2 border-line bg-ink-700 p-3 text-left transition-colors duration-150 ease-out hover:border-brand hover:bg-ink-600">
      
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
        <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[16px] font-bold text-text">{titulo}</span>
        <span className="mt-0.5 block text-[14px] font-medium text-text-muted">{descricao}</span>
      </span>
      <span
        className={`flex shrink-0 items-center gap-1.5 rounded-full border-2 px-2.5 py-1.5 text-[13px] font-extrabold ${
        ativo ? 'border-brand bg-brand text-brand-ink' : 'border-line bg-ink-600 text-text-muted'}`
        }>
        
        {ativo ?
        <CheckIcon className="h-4 w-4" aria-hidden="true" /> :

        <XIcon className="h-4 w-4" aria-hidden="true" />
        }
        {ativo ? 'Ativado' : 'Desativado'}
      </span>
    </button>);

}

export function Acessibilidade({ onVoltar }: AcessibilidadeProps) {
  const { escalaTexto, setEscalaTexto, altoContraste, setAltoContraste, vibracao, setVibracao } =
  useAccessibility();

  return (
    <div className="pb-2">
      <ScreenHeader
        titulo="Acessibilidade"
        subtitulo="Ajustes aplicados em todas as telas do FitFlow"
        onBack={onVoltar}
        backLabel="Voltar para o perfil" />
      

      <section aria-labelledby="tamanho-texto">
        <h2 id="tamanho-texto" className="flex items-center gap-2 text-[18px] font-extrabold text-text">
          <TypeIcon className="h-5 w-5 text-brand" aria-hidden="true" />
          Tamanho do texto
        </h2>
        <p className="mt-1 text-[14px] font-medium text-text-muted">
          Aumenta o texto, os ícones e as áreas de toque de todo o app.
        </p>

        <div role="radiogroup" aria-labelledby="tamanho-texto" className="mt-3 flex flex-col gap-3">
          {ordemEscalas.map((chave) => {
            const opcao = escalas[chave];
            const selecionado = escalaTexto === chave;
            return (
              <button
                key={chave}
                type="button"
                role="radio"
                aria-checked={selecionado}
                onClick={() => setEscalaTexto(chave)}
                className={`flex min-h-[68px] w-full items-center gap-3 rounded-2xl border-2 p-3 text-left transition-colors duration-150 ease-out ${
                selecionado ?
                'border-brand bg-brand-soft' :
                'border-line bg-ink-700 hover:border-brand hover:bg-ink-600'}`
                }>
                
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-11 shrink-0 items-center justify-center rounded-lg border-2 font-extrabold ${
                  selecionado ? 'border-brand text-brand' : 'border-line text-text-muted'}`
                  }
                  style={{ fontSize: `${13 * opcao.fator}px` }}>
                  
                  Aa
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[16px] font-bold text-text">{opcao.rotulo}</span>
                  <span className="mt-0.5 block text-[14px] font-medium text-text-muted">
                    {opcao.descricao}
                  </span>
                </span>
                <span
                  className={`flex shrink-0 items-center gap-1.5 rounded-full border-2 px-2.5 py-1 text-[13px] font-extrabold ${
                  selecionado ?
                  'border-brand bg-brand text-brand-ink' :
                  'border-line bg-ink-600 text-text-muted'}`
                  }>
                  
                  {selecionado && <CheckIcon className="h-4 w-4" aria-hidden="true" />}
                  {selecionado ? 'Em uso' : 'Usar'}
                </span>
              </button>);

          })}
        </div>
      </section>

      <section aria-labelledby="outros-ajustes" className="mt-6">
        <h2 id="outros-ajustes" className="text-[18px] font-extrabold text-text">
          Visão e retorno tátil
        </h2>
        <div className="mt-3 flex flex-col gap-3">
          <Toggle
            Icon={ContrastIcon}
            titulo="Alto contraste"
            descricao="Fundo preto puro, bordas brancas e verde mais claro"
            ativo={altoContraste}
            onChange={setAltoContraste} />
          
          <Toggle
            Icon={SmartphoneIcon}
            titulo="Vibrar no fim do descanso"
            descricao="Aviso por vibração, sem depender de som"
            ativo={vibracao}
            onChange={setVibracao} />
          
        </div>
      </section>

      <p className="mt-6 rounded-2xl border-2 border-line bg-ink-700 p-4 text-[14px] font-medium leading-relaxed text-text-muted">
        O FitFlow não usa som para avisos: o fim do descanso é sinalizado por texto, mudança visual e
        vibração. Movimentos são reduzidos automaticamente quando o sistema pede.
      </p>
    </div>);

}