import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  color?: string
  classes?: (string | false)[]
  style?: { [key: string]: string }
  onClick?: (e: React.SyntheticEvent) => void
}

const MenuItem: React.SFC<Props> = props => {
  const { children, onClick } = props
  return (
    <ScMenuItem className={ClassNamesExport(props.classes)} {...props} onClick={onClick}>
      {children}
    </ScMenuItem>
  )
}

export default MenuItem

export const ScMenuItem = styled.li`
  ${({ theme, color = '#646464', onClick }: ScTypes<Props>) => css`
    display: block;
    margin-bottom: ${theme.base.size / 2}px;
    color: ${color};
    position: relative;
    cursor: ${onClick && 'pointer'};

    .listAngle {
      position: absolute;
      top: 50%;
      right: 16px;
      margin-top: -7px;
    }

    .menu-inline > & {
      display: inline-block;
      margin-bottom: 0;
    }
    .listType > & {
      border-bottom: solid 1px #e6e6e6;
      &:last-child {
        border: 0;
      }
      > a,
      > span {
        display: block;
        padding: ${theme.base.size * 2}px;
        &:link,
        &:active,
        &:hover,
        &:visited {
          color: ${color};
          text-decoration: none;
        }

        &:hover {
          opacity: 0.7;
        }
      }
    }
    .listTypeTop > & {
      border-top: solid 1px #e6e6e6;
      > a,
      > span {
        display: block;
        padding: ${theme.base.size * 2}px;
        &:link,
        &:active,
        &:hover,
        &:visited {
          color: ${color};
          text-decoration: none;
        }

        &:hover {
          opacity: 0.7;
        }
      }
    }
  `};
`
