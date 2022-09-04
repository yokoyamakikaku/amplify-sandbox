import { CreateUserInput, GetUserQuery, UpdateUserInput, User } from '@/API'
import { useEffect } from 'react'
import { useImmer } from 'use-immer'

import { API } from 'aws-amplify'
import { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql'
import { getUser } from '@/graphql/queries'
import { useMutation } from '../async'
import { createRoom, createUser, updateUser } from '@/graphql/mutations'
import { useCurrentUser } from '../auth'

export function useUser (userId?:string) {
  const [user, setUser] = useImmer<User | null>(null)

  useEffect(() => {
    async function fetch () {
      if (!userId) return
      try {
        const variables = { id: userId }
        const { data } = await API.graphql(graphqlOperation(getUser, variables)) as GraphQLResult<GetUserQuery>
        const user = data?.getUser
        if (!user) return
        setUser(user as User)
      } catch ( error ) {
        console.error(error)
      }
    }
    fetch()
  }, [setUser, userId])

  return user
}

export function useCreateUserMutation () {
  return useMutation(async ({ user: { id, name} } : { user: { id: string, name: string }}) => {
    const input: CreateUserInput = {
      id,
      name
    }
    await API.graphql(graphqlOperation(createUser, {input}))
  })
}

export function useUpdateUserMutation () {
  return useMutation(async ({ user: { id, name} } : { user: { id: string, name: string }}) => {
    const input: UpdateUserInput = {
      id,
      name
    }
    await API.graphql(graphqlOperation(updateUser, {input}))
  })
}


export function useCreateRoomMutation () {
  const user = useCurrentUser()

  return useMutation(async ({ room } : { room: { name: string }}) => {
    const input = {
      ...room,
      roomOwnerId: user?.username
    }
    await API.graphql(graphqlOperation(createRoom, { input })
    )
  })
}
