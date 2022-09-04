import { CreateRoomInput, ListRoomsQuery, Room } from '@/API'
import { useEffect } from 'react'
import { useImmer } from 'use-immer'

import { API } from 'aws-amplify'
import { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql'
import { listRooms } from '@/graphql/queries'
import { useMutation } from '../async'
import { createRoom } from '@/graphql/mutations'
import { useCurrentUser } from '../auth'

export function useRooms () {
  const [rooms, setRooms] = useImmer<Room[]>([])

  useEffect(() => {
    async function fetch () {
      const { data } = await API.graphql(graphqlOperation(listRooms)) as GraphQLResult<ListRoomsQuery>
      const rooms = data?.listRooms?.items
      if (!rooms) return
      setRooms(rooms as Room[])
    }
    fetch()
  }, [setRooms])

  return rooms
}

export function useCreateRoomMutation () {
  const user = useCurrentUser()

  return useMutation(async ({ room } : { room: { name: string }}) => {
    const input: CreateRoomInput = {
      id: null,
      name: room.name,
      roomOwnerId: user?.username
    }
    await API.graphql(graphqlOperation(createRoom, { input })
    )
  })
}
