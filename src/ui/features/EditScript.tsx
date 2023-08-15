import Editor from '@monaco-editor/react';
import { useState } from 'react';
import ScriptCreationInfo from '../components/organisms/ScriptCreationInfo';
import HtmlEditor from '../components/organisms/HtmlEditor';
import MainLayout from '../layouts/MainLayout';

interface IScriptInfo {
  code?: string
  dataset?: string
  scriptName?: string
  scriptDescription?: string
  subject?: string
}

interface IEditscriptScreen {
  scriptInfo?: IScriptInfo
  type?: 'E-Mail' | 'Text'
}

export default function EditscriptScreen({ scriptInfo, type }: IEditscriptScreen) {
  const [code, setCode] = useState<string | undefined>('');

  return (
    <MainLayout>
      <ScriptCreationInfo
        dataset={scriptInfo?.dataset}
        scriptName={scriptInfo?.scriptName}
        scriptDescription={scriptInfo?.scriptDescription}
        subject={scriptInfo?.subject}
      />

      <Editor
        height="60vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        language="javascript"
        defaultValue={code}
        onChange={(e) => setCode(e)}
      />
    </MainLayout>
  );
}
