'use client'

import { useEffect, useState } from 'react';

import Editor from '@monaco-editor/react'

export default function HtmlEditor() {
  const [code, setCode] = useState<string | undefined>('')

  useEffect(() => {
    setCode(`
      <h1>Hello</h1>
      <p>start editing to see changes</p>
    `)
  }, [])

  return (
    <div className='flex flex-1 w-screen flex-row'>
      <div className='flex flex-1'>
        <Editor
          height="90vh"
          theme='vs-dark'
          defaultLanguage="html"
          defaultValue={`<h1>Hello</h1>
<p>start editing to see changes</p>
    `}
          onChange={(e) => setCode(e)}
        />
      </div>

      <div className='flex flex-1 p-1'>
        <iframe className='flex flex-1' srcDoc={code} />
      </div>
    </div>
  )
}
