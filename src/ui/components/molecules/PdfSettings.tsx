'use client'

import { useEffect, useState } from 'react'
import { IItem, useRulerData } from '@/contexts/RulerContext'
import SelectSearchOrCreate from '../atoms/SelectSearchOrCreate'
import Input from '../atoms/Input'
import Select from '../atoms/Select'

interface IPdfSettings {
  item: IItem<'pdf'>
}

export default function PdfSettings({ item }: IPdfSettings) {
  const { items, setItems } = useRulerData()

  const [inputPath, setInputPath] = useState<string>('')
  const [outputPath, setOutputPath] = useState<string>('')
  const [outputName, setOutputName] = useState<string>('')
  const [template, setTemplate] = useState<string>('')
  const [actionDescription, setActionDescription] = useState<string>('')

  function saveProps() {
    const updatedItem: IItem<'pdf'> = {
      ...item,
      description: actionDescription,
      props: {
        template,
        inputPath,
        outputPath,
        outputName,
      },
    }

    const updatedItems = [...items]

    const itemIndex = updatedItems.findIndex((i) => i.id === item.id)
    updatedItems[itemIndex] = updatedItem

    setItems(updatedItems)
  }

  useEffect(() => {
    saveProps()
  }, [template, inputPath, outputPath, outputName, actionDescription])

  const optionList = [
    { value: '1', label: 'Welcome' },
    { value: '2', label: 'Newsletter' },
  ]

  return (
    <div className="flex flex-col gap-4 text-black">
      <div>
        <p>Action Description</p>
        <Input onChange={(e) => setActionDescription(e.target.value)} value={actionDescription} />
      </div>

      <div>
        <p>Input Path</p>
        <Input value={inputPath} onChange={(e) => setInputPath(e.target.value)} />
      </div>

      <div>
        <p>Template</p>
        <SelectSearchOrCreate onChange={(e) => setTemplate(e?.value)} options={optionList} />
      </div>

      <div>
        <p>Output Path</p>
        <Select value={outputPath} onChange={(e) => setOutputPath(e.target.value)}>
          <option>Templates</option>
        </Select>
      </div>

      <div>
        <p>Output Name</p>
        <Input value={outputName} onChange={(e) => setOutputName(e.target.value)} />
      </div>
    </div>
  )
}
