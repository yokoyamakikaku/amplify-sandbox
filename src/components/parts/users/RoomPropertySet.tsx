import { Room } from "@/API"
import { List, ListItem, ListItemText } from "@mui/material"
import { FC } from "react"
import { useTranslation } from "react-i18next"

export type RoomPropertySetProps = {
  room: Room
}

const RoomPropertySet: FC<RoomPropertySetProps> = ({ room }) => {
  const { t } = useTranslation()
  return (
    <List>
      <ListItem>
        <ListItemText
          primary={t("room.name")}
          secondary={room.name} />
      </ListItem>
    </List>
  )
}
