"use client";

import MainLayout from "../layouts/MainLayout";
import Rule from "../components/organisms/Rule";
import { useRouter } from "next/navigation";

export default function RulerScreen() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="flex flex-col gap-20">
        <h1
          className="text-gray-400 font-semibold cursor-pointer"
          onClick={() => router.push("/")}
        >
          SEGSig Seguros | Odonto |{" "}
          <span className="text-green-500">Kit de Boas Vindas</span>
        </h1>

        <Rule />
      </div>
    </MainLayout>
  );
}
