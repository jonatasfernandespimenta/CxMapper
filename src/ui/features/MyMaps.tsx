"use client";

import { useRouter } from "next/navigation";
import AddMap from "../components/molecules/AddMap";
import Map from "../components/molecules/Map";
import MainLayout from "../layouts/MainLayout";
import CreateMapModal from "../components/organisms/CreateMapModal";
import { useState } from "react";

interface NewMapFormValues {
  mapName: string;
  businessLine: string;
}

export default function Maps() {
  const [maps, setMaps] = useState([
    <Map tag="Odonto" name="Kit de boas vindas" />,
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const router = useRouter();

  function handleChange(values: NewMapFormValues) {
    setMaps([...maps, <Map tag={values.businessLine} name={values.mapName} />]);
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && (
        <CreateMapModal
          onClose={() => setIsModalOpen(false)}
          handleChange={handleChange}
        />
      )}
      <MainLayout>
        <div className="mb-6">
          <h1 className="font-semibold">My Maps</h1>
        </div>

        <div className="flex flex-row gap-4 flex-wrap">
          <AddMap onClick={() => setIsModalOpen(true)} />

          {maps.map((map, idx) => (
            <div key={idx} onClick={() => router.push(`/ruler/${idx}`)}>
              {map}
            </div>
          ))}
        </div>
      </MainLayout>
    </>
  );
}
