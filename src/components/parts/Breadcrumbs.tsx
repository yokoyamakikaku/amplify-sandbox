import { FC } from 'react'
import NLink from 'next/link'
import {
  Typography,
  Link as MLink,
  Breadcrumbs as MBreadcrumbs
} from '@mui/material'

export type BreadcrumbsProps = {
  items: {
    label?: string
    href?: string
  }[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <MBreadcrumbs aria-label="breadcrumb">
      {items.map((item, index) => (
        item.href ? (
          <NLink key={index} href={item.href}>
            <MLink underline="hover" color="inherit">{item.label}</MLink>
          </NLink>
        ) : (
          <Typography key={index} color="text.primary">{item.label}</Typography>
        )
      ))}
    </MBreadcrumbs>
  )
}

export default Breadcrumbs
