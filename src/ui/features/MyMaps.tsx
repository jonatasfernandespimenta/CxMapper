"use client";

import { useRouter } from "next/navigation";
import AddMap from "../components/molecules/AddMap";
import Map from "../components/molecules/Map";
import MainLayout from "../layouts/MainLayout";

const maps = [<Map name="Kit de boas vindas" />];

export default function Maps() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="font-semibold">My Maps</h1>
      </div>

      <div className="flex flex-row gap-4 flex-wrap">
        <AddMap />

        {maps.map((map, idx) => (
          <div onClick={() => router.push(`/ruler/${idx}`)}>{map}</div>
        ))}
      </div>
    </MainLayout>
  );
}
