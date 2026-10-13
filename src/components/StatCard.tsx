import React from "react";
import { BoxIcon } from "lucide-react";
interface StatCardProps {
  Icon: BoxIcon;
  valor: string;
  unidade: string;
  rotulo: string;
}
export function StatCard({
  Icon,
  valor,
  unidade,
  rotulo
}: StatCardProps) {
  return <div className="flex flex-1 flex-col gap-1 rounded-2xl border-2 border-line bg-ink-700 px-3 py-3">
      <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
      <p className="text-[20px] font-extrabold leading-tight text-text">
        {valor}
        <span className="ml-1 text-[13px] font-semibold text-text-muted">{unidade}</span>
      </p>
      <p className="text-[13px] font-medium leading-snug text-text-muted">{rotulo}</p>
    </div>;
}