/* eslint-disable react/destructuring-assignment */

'use client';

import { useEffect, useState } from 'react';
import Input from '../atoms/Input';
import Divider from '../atoms/Divider';
import Button from '../atoms/Button';

interface IScriptCreationContent {
  scriptName?: string
  scriptDescription?: string
  subject?: string
}

export default function ScriptCreationContent(props: IScriptCreationContent) {
  const [scriptName, setScriptName] = useState<string>(props.scriptName ?? '');
  const [scriptDescription, setScriptDescription] = useState<string>(props.scriptDescription ?? '');
  const [subject, setSubject] = useState<string>(props.subject ?? '');

  useEffect(() => {
    if (props.subject) {
      setSubject(props.subject);
    }

    if (props.scriptDescription) {
      setScriptDescription(props.scriptDescription);
    }

    if (props.scriptName) {
      setScriptName(props.scriptName);
    }
  }, [props]);

  function saveScript() {

  }

  return (
    <>
      <div className="w-1/2 mb-4">
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-1 flex-col gap-4">
            <div>
              <p>Script name:</p>
              <Input value={scriptName} onChange={(e) => setScriptName(e.target.value)} />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div>
              <p>Script description:</p>
              <Input
                value={scriptDescription}
                onChange={(e) => setScriptDescription(e.target.value)}
              />
            </div>
          </div>

        </div>
        <div className="mt-2">
          <Button handlePress={saveScript} text="Save" />
        </div>
      </div>

      <Divider />
    </>
  );
}
