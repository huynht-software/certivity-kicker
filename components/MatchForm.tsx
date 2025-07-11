'use client'

import { User } from '@/app/generated/prisma'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DoublesMatchForm from './DoublesMatchForm'
import SinglesMatchForm from './SinglesMatchForm'

type Props = { allUsers: User[] }

function MatchForm(props: Props) {
  return (
    <>
      <div className="w-full flex justify-center">
        <Tabs defaultValue="doubles" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="doubles" className="cursor-pointer">
              Doubles
            </TabsTrigger>
            <TabsTrigger value="singles" className="cursor-pointer">
              Singles
            </TabsTrigger>
          </TabsList>
          <TabsContent value="doubles">
            <DoublesMatchForm allUsers={props.allUsers} />
          </TabsContent>
          <TabsContent value="singles">
            <SinglesMatchForm allUsers={props.allUsers} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default MatchForm
