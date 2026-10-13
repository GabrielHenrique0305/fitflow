import React, { useState } from 'react';
import { DumbbellIcon, EyeIcon, EyeOffIcon, LockIcon, LogInIcon, MailIcon } from 'lucide-react';

interface LoginProps {
  onEntrar: () => void;
}

export function Login({ onEntrar }: LoginProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="flex min-h-full flex-col">
      <section className="rounded-xl2 border-2 border-brand bg-brand-soft px-5 py-7 text-center">
        <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand">
          <DumbbellIcon className="h-7 w-7 text-brand-ink" aria-hidden="true" />
        </span>
        <h1 className="text-[30px] font-extrabold tracking-tight text-brand">FITFLOW</h1>
        <p className="mt-1 text-[14px] font-semibold uppercase tracking-wide text-text">
          Intensifique · Academia + Treinos
        </p>
      </section>

      <div className="mt-7">
        <h2 className="text-[24px] font-extrabold text-text">Bem-vindo de volta!</h2>
        <p className="mt-1 text-[15px] font-medium text-text-muted">
          Faça login para retomar seus treinos
        </p>
      </div>

      <form
        className="mt-6 flex flex-col gap-5"
        onSubmit={(event) => {
          event.preventDefault();
          onEntrar();
        }}>
        
        <div>
          <label htmlFor="email" className="mb-2 block text-[15px] font-bold text-text">
            Seu e-mail
          </label>
          <div className="flex items-center gap-3 rounded-2xl border-2 border-line bg-ink-700 px-4 focus-within:border-brand">
            <MailIcon className="h-5 w-5 shrink-0 text-text-muted" aria-hidden="true" />
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="joao.silva@email.com"
              defaultValue="joao.silva@email.com"
              className="h-14 w-full bg-transparent text-[16px] font-medium text-text placeholder:text-text-faint focus:outline-none" />
            
          </div>
        </div>

        <div>
          <label htmlFor="senha" className="mb-2 block text-[15px] font-bold text-text">
            Sua senha
          </label>
          <div className="flex items-center gap-3 rounded-2xl border-2 border-line bg-ink-700 pl-4 pr-1 focus-within:border-brand">
            <LockIcon className="h-5 w-5 shrink-0 text-text-muted" aria-hidden="true" />
            <input
              id="senha"
              type={mostrarSenha ? 'text' : 'password'}
              autoComplete="current-password"
              defaultValue="minhasenhasegura"
              aria-describedby="dica-senha"
              className="h-14 w-full bg-transparent text-[16px] font-medium text-text placeholder:text-text-faint focus:outline-none" />
            
            <button
              type="button"
              onClick={() => setMostrarSenha((v) => !v)}
              aria-pressed={mostrarSenha}
              className="flex h-12 min-w-[48px] shrink-0 items-center gap-1.5 rounded-xl px-2 text-[13px] font-bold text-text transition-colors duration-150 ease-out hover:bg-ink-600">
              
              {mostrarSenha ?
              <EyeOffIcon className="h-5 w-5" aria-hidden="true" /> :

              <EyeIcon className="h-5 w-5" aria-hidden="true" />
              }
              {mostrarSenha ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          <p id="dica-senha" className="mt-2 text-[13px] font-medium text-text-muted">
            Mínimo de 8 caracteres.
          </p>
        </div>

        <button
          type="button"
          className="min-h-[48px] self-start rounded-xl px-1 text-[15px] font-bold text-brand underline underline-offset-4 transition-colors duration-150 ease-out hover:text-brand-strong">
          
          Esqueci minha senha
        </button>

        <button
          type="submit"
          className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-brand text-[17px] font-extrabold text-brand-ink transition-colors duration-150 ease-out hover:bg-brand-strong">
          
          <LogInIcon className="h-5 w-5" aria-hidden="true" />
          Entrar
        </button>
      </form>

      <p className="mt-6 text-center text-[15px] font-medium text-text-muted">
        Ainda não tem conta?{' '}
        <button
          type="button"
          className="min-h-[44px] font-bold text-brand underline underline-offset-4">
          
          Criar cadastro
        </button>
      </p>
    </div>);

}