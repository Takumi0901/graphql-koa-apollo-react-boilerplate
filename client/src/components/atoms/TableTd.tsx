import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const TableTd: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScTableTd className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScTableTd>
  )
}

export default TableTd

export const ScTableTd = styled.td`
  ${({ theme, color = '#e6e6e6' }: ScTypes<Props>) =>
    css`
      display: table-cell;
      padding: ${theme.base.size}px ${theme.base.size * 2}px;
      text-align: left;
      border-bottom: 1px solid ${color};
      vertical-align: middle;
      line-height: 1.2;
      font-size: 1.2rem;
      tr:last-child & {
        border: 0;
      }
      @media (max-width: ${theme.base.viewport.phone}px) {
        .isQuery & {
          display: block;
          box-sizing: border-box;
          padding: ${theme.base.size * 2}px !important;
          width: auto;
        }
      }
    `};
`
