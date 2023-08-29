'use client';

import { useEffect, useState } from 'react';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import { WaitProps } from '@/@types/IActionProps';
import Toggle from '../atoms/Toggle';
import { IItem } from '@/contexts/RulerContext';

interface IWaitForm {
  handleChange?: (data: WaitProps) => void;
  prevItem: IItem<any>
}

export default function WaitForm({
  handleChange,
  prevItem,
}: IWaitForm) {
  const [timeWindow, setTimeWindow] = useState<string>('');
  const [condition, setCondition] = useState<string>('');
  const [isCronExpression, setIsCronExpression] = useState(false);

  const handleFormSubmit = () => {
    const data = {
      timeWindow, condition, prevActionId: prevItem.id,
    };
    if (handleChange) {
      handleChange(data);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  }, [timeWindow, condition]);

  return (
    <div className="flex flex-col gap-2">
      <div className="gap-2">
        <p>Wait for</p>

        <div className="mb-2">
          <Toggle
            option1="Premade"
            option2="Custom"
            value={isCronExpression}
            onChange={(e) => setIsCronExpression(!isCronExpression)}
          />
        </div>

        {
          isCronExpression ? (
            <div>
              <p>Cron Expression</p>
              <Input value={timeWindow} onChange={(e) => setTimeWindow(e.target.value)} />
            </div>
          )
            : (
              <Select value={timeWindow} onChange={(e) => setTimeWindow(e.target.value)}>
                <option>A minute</option>
                <option>5 minutes</option>
                <option>15 minutes</option>
                <option>1 Hour</option>
                <option>12 Hours</option>
                <option>24 Hours</option>
              </Select>
            )
        }
      </div>

      <div>
        <p>To</p>
        <Select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="">Customer open</option>
          <option value="">Customer see</option>
          <option value="">Customer receive</option>
        </Select>

        {
          prevItem && <p>{prevItem.type === 'email' ? 'Email' : 'SMS'}</p>
        }

        {
          !prevItem && <p>Email</p>
        }

      </div>
    </div>
  );
}
