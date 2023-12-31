'use client'

import { FaPlay } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Action from './Action'
import { IItem, useRulerData } from '@/contexts/RulerContext'
import TriggerSettings from './TriggerSettings'

interface ITrigger {
  itemId: string
}

export default function Trigger({ itemId }: ITrigger) {
  const { items } = useRulerData()

  const [item, setItem] = useState<IItem<'trigger'>>({} as IItem<'trigger'>)

  useEffect(() => {
    const foundItem = items.find((i) => i.id === itemId)
    if (foundItem) {
      const itemType = foundItem.type

      const typedFoundItem: IItem<typeof itemType> = foundItem
      setItem(typedFoundItem)
    }
  }, [items, itemId])

  return (
    <Action
      done={item.done ?? 0}
      failed={item.failed ?? 0}
      icon={<FaPlay />}
      actionName="Trigger"
      hasStatus={false}
      itemId={itemId}
    >
      <TriggerSettings item={item} />
    </Action>
  )
}
