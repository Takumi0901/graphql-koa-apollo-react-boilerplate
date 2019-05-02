import * as React from 'react'
import LinkItem from 'src/components/atoms/LinkItem'
import MenuItem from 'src/components/atoms/MenuItem'

interface Props {
  icon?: any
  name: string
  path: string
  classes?: (string | false)[]
}

const SideMenuItem = ({ classes, name, path }: Props) => (
  <MenuItem color={'white'} classes={classes}>
    <LinkItem name={name} to={path} color={'white'} />
  </MenuItem>
)

export default SideMenuItem
