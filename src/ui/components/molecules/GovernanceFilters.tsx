'use client';

import { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Select from '../atoms/Select';

export default function GovernanceFilters() {
  const [viewBy, setViewBy] = useState(0);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    if (viewBy === 0) {
      setOptions(['Kit boas vindas']);
    }

    if (viewBy === 1) {
      setOptions(['Odonto']);
    }

    if (viewBy === 2) {
      setOptions(['fjdi-43id-fsio', 'dpao-foap-foei', 'doap-eoda-roep']);
    }

    if (viewBy === 3) {
      setOptions(['fsyu-dsad-qwer', 'gauo-dasd-eqwd', 'ryew-faxc-roep']);
    }
  }, [viewBy]);

  return (
    <div className="flex flex-row rounded shadow-md p-4 gap-4 items-center">
      <div>
        <p>View by</p>
        <Select onChange={(e) => setViewBy(Number(e.target.value))} value={viewBy}>
          <option value={0}>Map</option>
          <option value={1}>Business Line</option>
          <option value={2}>Job</option>
          <option value={3}>Customer</option>
        </Select>
      </div>

      <div>
        <p>Use</p>
        <Select>
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </Select>
      </div>

      <Button text="Apply" handlePress={() => { }} className="h-fit mt-6 pr-4 pt-1.5 pb-1.5 pl-4" />
    </div>
  );
}
