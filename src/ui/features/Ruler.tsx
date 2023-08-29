'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MainLayout from '../layouts/MainLayout';
import Rule from '../components/organisms/Rule';
import { useMapData } from '@/contexts/MapContext';

import MySelect from '../components/atoms/MySelect';
import RunJobButton from '../components/molecules/RunJob';
import SubmitApprovement from '../components/molecules/SubmitApprovement';
import { rules } from '@/mocks/rules';

const optionList = [
  { value: '1', label: 'All' },
  { value: '2', label: '#37489' },
  { value: '3', label: '#73894' },
];

export default function RulerScreen() {
  const router = useRouter();
  const { jobFilter, setJobFilter, mapInfo } = useMapData();
  const [executing, setIsExecuting] = useState(false);
  const [executingApprovement, setIsExecutingApprovement] = useState(false);

  useEffect(() => {
    if (executing) {
      toast.warn('Executing Job', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      setTimeout(() => {
        toast.success('Job executed!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        setIsExecuting(false);
      }, 2000);
    }
  }, [executing]);

  useEffect(() => {
    if (executingApprovement) {
      toast.warn('Submitting approvement...', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      setTimeout(() => {
        toast.success('Approvement Submitted!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        setIsExecutingApprovement(false);
      }, 2000);
    }
  }, [executingApprovement]);

  return (
    <MainLayout>
      <div className="flex flex-col gap-20">
        <div className="fixed bg-white ">
          <h3 className="text-gray-300 mt-4">
            Created At
            {' '}
            {mapInfo.createdAt}
            , by:
            {' '}
            {mapInfo.createdBy}
            |
            Approved At
            {' '}
            {mapInfo.approvedAt}
            , by:
            {' '}
            {mapInfo.approvedBy}
          </h3>

          <h1
            className="text-gray-400 font-semibold cursor-pointer"
            onClick={() => router.push('/maps')}
          >
            SEGSig Seguros |
            {' '}
            {mapInfo.businessLine}
            {' '}
            |
            {' '}
            <span className="text-green-500">{mapInfo.mapName}</span>
          </h1>

          <div className="flex flex-row items-center gap-2 mt-2">
            <MySelect
              onChange={(e) => e && setJobFilter(e.value)}
              placeholder="Localize Job..."
              options={optionList}
            />

            <SubmitApprovement
              executing={executingApprovement}
              onClick={() => setIsExecutingApprovement(true)}
            />
            <RunJobButton onClick={() => setIsExecuting(true)} executing={executing} />
          </div>
        </div>

        <div className="mt-52">
          <Rule />
          {/* <Rule rulerItems={rules[0]} /> */}
        </div>
      </div>
    </MainLayout>
  );
}
