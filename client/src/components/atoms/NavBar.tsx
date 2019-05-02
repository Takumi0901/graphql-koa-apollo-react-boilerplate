import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  color?: string
  height?: number
  classes?: string[]
  style?: { [key: string]: string }
}

const NavBar: React.SFC<Props> = props => {
  const { classes, children } = props
  return (
    <ScNavBar className={ClassNamesExport(classes)} {...props}>
      <ScNavBarInner>{children}</ScNavBarInner>
    </ScNavBar>
  )
}

export default NavBar

export const ScNavBar = styled.header`
  ${({ theme, color = 'white', height }: ScTypes<Props>) => css`
    background: ${color};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: ${height ? height : 60}px;
    @media (min-width: ${theme.base.viewport.desktop}px) {
      height: ${height ? height : 60}px;
    }
  `};
`

export const ScNavBarInner = styled.div`
  ${({ theme }: ScTypes<Props>) => css`
    box-sizing: border-box;
    width: 100%;
    padding: 0 ${theme.base.size * 2}px;
    @media (min-width: ${theme.base.viewport.desktop}px) {
      width: ${theme.base.maxWidth};
      max-width: ${theme.base.maxWidth};
      margin: 0 auto;
    }
  `};
`
