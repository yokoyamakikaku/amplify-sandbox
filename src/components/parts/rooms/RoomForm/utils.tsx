export function valuesToResult (values: RoomFormValues) : RoomFormResult {
  return {
    room: {
      name: values.name
    }
  }
}
