"use client";

import MainLayout from "../layouts/MainLayout";
import Rule from "../components/organisms/Rule";
import { useRouter } from "next/navigation";
import ReactSelect from "react-select";
import { useMapData } from "@/contexts/MapContext";

import { FaPlay } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Spinner from "../components/atoms/Spinner";

import { toast } from 'react-toastify';

const optionList = [
  { value: "1", label: "All" },
  { value: "2", label: "#37489" },
  { value: "3", label: "#73894" },
];

export default function RulerScreen() {
  const router = useRouter();
  const { jobFilter, setJobFilter } = useMapData();
  const [executing, setIsExecuting] = useState(false);

  useEffect(() => {
    if (executing) {
      toast.warn('Executing Job', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        toast.success('Job executed!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsExecuting(false)
      }, 2000);
    }
  }, [executing])

  return (
    <MainLayout>
      <div className="flex flex-col gap-20">
        <div className="fixed bg-white z-30">
          <h1
            className="text-gray-400 font-semibold cursor-pointer mt-4"
            onClick={() => router.push("/maps")}
          >
            SEGSig Seguros | Odonto |{" "}
            <span className="text-green-500">Teste</span>
          </h1>

          <div className="flex flex-row items-center gap-2 mt-2">
            <ReactSelect
              onChange={(e) => e && setJobFilter(e.value)}
              placeholder="Localize Job..."
              options={optionList}
            />

            <div onClick={() => setIsExecuting(true)} className="flex flex-row cursor-pointer items-center text-green-500 bg-green-200 max-w-fit p-2 rounded-md">

              {executing ? (<Spinner />) : (
                <>
                  <FaPlay />
                  <p>Run Job</p>
                </>
              )}
            </div>

          </div>
        </div>


        <div className="mt-52">
          <Rule />
        </div>
      </div>
    </MainLayout>
  );
}
