import { FC } from "react"
import { Box } from "@mui/material"

export type NoItemListPlaceholderProps = {
  message: String
}

const NoItemListPlacehodler: FC<NoItemListPlaceholderProps> = ({ message }) => {
  return (
    <Box sx={{p:4, color: 'text.muted' }}>
      {message}
    </Box>
  )
}

export default NoItemListPlacehodler
