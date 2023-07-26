"use client";

import MainLayout from "../layouts/MainLayout";
import Rule from "../components/organisms/Rule";

export default function RulerScreen() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20">
        <h1 className="text-gray-400 font-semibold cursor-pointer">
          SEGSig Seguros | Odonto | <span className="text-green-500">Kit de Boas Vindas</span>
        </h1>

        <Rule />
      </div>
    </MainLayout>
  );
}
