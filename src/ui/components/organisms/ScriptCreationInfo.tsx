import ScriptCreationContent from '../molecules/ScriptCreationContent';

interface IScriptCreationInfo {
  dataset?: string
  scriptName?: string
  scriptDescription?: string
  subject?: string
}

export default function ScriptCreationInfo({
  scriptName, scriptDescription, subject, dataset,
}: IScriptCreationInfo) {
  return (
    <div>
      <div className="font-bold mb-4">
        <p>Information</p>
      </div>

      <ScriptCreationContent
        scriptName={scriptName}
        scriptDescription={scriptDescription}
        subject={subject}
      />
    </div>
  );
}
