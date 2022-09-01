import { FC, PropsWithChildren } from "react"

import { Container, Stack } from '@mui/material'

type PageContainerProps = {

} & PropsWithChildren

const PageContainer: FC<PageContainer> = ({ children }) => {
  return (
    <Container sx={{ py:4 }}>
      <Stack direction="column" spacing={4}>
        {children}
      </Stack>
    </Container>
  )
}

export default PageContainer
