import { FC, useId } from "react"
import {
  FormControl,
  SelectProps,
  Select,
  InputLabel,
  FormHelperText
} from "@mui/material"
import { useField } from "formik"

export type SelectFieldProps = {
  name: string
} & SelectProps

const SelectField: FC<SelectFieldProps> = ({ name, label, children }) => {
  const labelId = useId()
  const selectId = useId()
  const [field, meta, helper] = useField(name)

  return (
    <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={selectId}
        value={field.value}
        label={label}
        onChange={(event) => helper.setValue(event.target.value)}>
        {children}
      </Select>
      {meta.touched && meta.error && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  )
}

export default SelectField
