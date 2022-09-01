import { Draft } from "immer"
import { useImmerReducer } from "use-immer"

type MutationState = {
  isLoading: boolean
  isSucceeded: boolean
  data: any | null
  error: any | null
}

type MutationAction = {
  type: 'start'
} | {
  type: 'success',
  payload: {
    data: any
  }
} | {
  type: 'failur'
  payload: {
    error: any
  }
}

const initialState = {
  isLoading: false,
  isSucceeded: false,
  data: null,
  error: null
}

function reducer<D> (state: Draft<MutationState>, action: MutationAction) {
  switch (action.type) {
    case 'start':
      state.isLoading = true
      state.isSucceeded = false
      state.error = null
      return
    case 'success':
      state.isLoading = false
      state.isSucceeded = true
      state.data = action.payload.data
      return
    case 'failur':
      state.isLoading = false
      state.error = action.payload.error
      return
  }
}

export function useMutation (exec: Function): [Function, MutationState] {
  const [state, dispatch] = useImmerReducer<MutationState, MutationAction>(reducer, initialState)

  const submit = async (...args: any[]) => {
    dispatch({ type: "start" })
    try {
      const data = await exec(...args)
      dispatch({ type: 'success', payload: { data }})
    } catch (error) {
      console.error(error)
      dispatch({ type: "failur", payload: { error } })
    }
  }

  return [submit, state]
}
