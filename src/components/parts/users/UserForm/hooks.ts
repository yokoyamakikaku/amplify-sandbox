import { useMemo } from "react"
import * as yup from 'yup'

import { User } from "@/API"

export function useValidationSchema () {
  const validationSchema = useMemo(() => yup.object().shape({
    id: yup.string().default(""),
    name: yup.string().required().default("")
  }), [])
  return validationSchema
}

export function useInitialValues (user?: {
  id: string
  name: string
} ) {
  const validationSchema = useValidationSchema()
  const initialValues = useMemo(() => validationSchema.cast({
    id: user?.id ?? "",
    name: user?.name ?? ""
  }, {
    stripUnknown: true
  }), [user?.id, user?.name, validationSchema])
  return initialValues
}
