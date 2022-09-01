import { useMemo } from "react"
import * as yup from 'yup'

import { Room } from "@/API"

export function useValidationSchema () {
  const validationSchema = useMemo(() => yup.object().shape({
    name: yup.string().required().default("")
  }), [])
  return validationSchema
}

export function useInitialValues (room?: Room ) {
  const validationSchema = useValidationSchema()
  const initialValues = useMemo(() => validationSchema.cast({
    name: room?.name
  }, {
    stripUnknown: true
  }), [room?.name, validationSchema])
  return initialValues
}
