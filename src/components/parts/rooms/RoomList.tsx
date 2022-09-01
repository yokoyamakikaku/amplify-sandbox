import { FC } from "react"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from "@mui/material"

import { Room } from "@/API"

import NoItemListPlacehodler from "../NoListItemPlaceholder"

export type RoomListProps = {
  rooms: Room[]
}

const RoomList: FC<RoomListProps> = ({ rooms }) => {
  const { t } = useTranslation()

  if (rooms.length < 1) return <NoItemListPlacehodler message={t("room.no_room")} />

  return (
    <List>
      {rooms.map(room => (
        <ListItem key={room.id}>
          <Link href={`/rooms/${room.id}`}>
            <ListItemButton>
              <ListItemText
                primary={room.name}
                secondary={room?.owner?.name} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

export default RoomList
