export function valuesToResult (values: UserFormValues) : UserFormResult {
  return {
    user: {
      id: values.id,
      name: values.name
    }
  }
}
