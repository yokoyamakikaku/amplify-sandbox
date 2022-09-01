import { FC } from "react"
import { useTranslation } from "react-i18next"
import TextField from "../../TextField"

export type UserFormFieldsProps = {

}

const UserFormFields: FC<UserFormFieldsProps> = () => {
  const { t } = useTranslation()
  return (
    <>
      <TextField label={t("user.name")} name="name" />
    </>
  )
}


export default UserFormFields
