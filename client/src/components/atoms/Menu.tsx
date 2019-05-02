import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css } from 'src/styles'

interface Props {
  inline?: boolean
  classes?: string[]
  style?: { [key: string]: string }
}

const Menu: React.SFC<Props> = props => {
  const { children, inline } = props
  return (
    <ScMenu className={ClassNamesExport(props.classes, { 'menu-inline': inline })} {...props}>
      {children}
    </ScMenu>
  )
}

export default Menu

export const ScMenu = styled.ul`
  ${() => css`
    display: block;
  `};
`
