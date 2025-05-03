'use client'

import { User } from '@/app/generated/prisma'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import DoublesMatchForm from './DoublesMatchForm'
import SinglesMatchForm from './SingleMatchForm'

type Props = { allUsers: User[] }

const MatchTypes = ['doubles', 'singles'] as const
type MatchType = (typeof MatchTypes)[number]

function MatchForm(props: Props) {
  const [matchType, setMatchType] = useState<MatchType>('doubles')

  return (
    <>
      <Tabs defaultValue="doubles" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="doubles">Doubles</TabsTrigger>
          <TabsTrigger value="singles">Singles</TabsTrigger>
        </TabsList>
        <TabsContent value="doubles">
          <DoublesMatchForm allUsers={props.allUsers} />
        </TabsContent>
        <TabsContent value="singles">
          <SinglesMatchForm allUsers={props.allUsers} />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default MatchForm
