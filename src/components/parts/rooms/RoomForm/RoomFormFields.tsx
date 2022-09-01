import { useTranslation } from "react-i18next"
import TextField from "../../TextField"

export type RoomFormFieldsProps = {

}

const RoomFormFields: FC<Props> = () => {
  const { t } = useTranslation()
  return (
    <>
      <TextField label={t("room.name")} name="name" />
    </>
  )
}


export default RoomFormFields
