'use client'

import { useEffect, useState } from 'react';

import Editor from '@monaco-editor/react'

interface IHtmlEditor {
  code?: string
}

export default function HtmlEditor(props: IHtmlEditor) {
  const [code, setCode] = useState<string | undefined>(`
  <h1>Hello</h1>
  <p>start editing to see changes</p>
`)

  useEffect(() => {
    if (props.code) {
      setCode(props.code)

    }
  }, [props])

  return (
    <div className='flex flex-1 w-screen flex-row'>
      <div className='flex flex-1'>
        <Editor
          height="60vh"
          theme='vs-dark'
          defaultLanguage="html"
          defaultValue={code}
          onChange={(e) => setCode(e)}
        />
      </div>

      <div className='flex flex-1 p-1'>
        <iframe className='flex flex-1' srcDoc={code} />
      </div>
    </div>
  )
}
