import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material"
import { useField } from "formik"
import { FC } from "react"

export type TextFieldProps = {
  name: string
} & MuiTextFieldProps

const TextField: FC<TextFieldProps> = ({ name, label, ...props }) => {
  const [field, meta, helper] = useField(name)
  return (
    <MuiTextField
      {...props}
      label={label}
      value={field.value}
      onChange={event => helper.setValue(event.target.value)}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error} />
  )
}

export default TextField
