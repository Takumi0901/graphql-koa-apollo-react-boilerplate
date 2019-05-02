import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'
import { Link } from 'react-router-dom'

interface Props {
  to: string
  classes?: string[]
  style?: { [key: string]: string }
}

const TabItem: React.SFC<Props> = props => {
  const { children, to, classes } = props
  return (
    <ScTabItem to={to} className={ClassNamesExport(classes)} {...props}>
      {children}
    </ScTabItem>
  )
}

export default TabItem

export const ScTabItem = styled(Link)`
  ${({ theme }: ScTypes<Props>) => css`
    display: inline-block;
    padding: 0 ${theme.base.size * 2}px;
    height: 48px;
    line-height: 48px;
    border-bottom: solid 2px #e6e6e6;
    margin-bottom: -2px;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      background: #e6e6e6;
    }
    &.isActive {
      border-bottom: solid 2px ##53aee0;
    }
  `};
`
