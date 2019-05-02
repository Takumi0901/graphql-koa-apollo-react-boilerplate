import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const TableTh: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScTableTh className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScTableTh>
  )
}

export default TableTh

export const ScTableTh = styled.th`
  ${({ theme, color = '#e6e6e6' }: ScTypes<Props>) =>
    css`
      display: table-cell;
      padding: ${theme.base.size}px ${theme.base.size * 2}px;
      text-align: left;
      border-top: 1px solid ${color};
      border-bottom: 1px solid ${color};
      font-size: 1.2rem;
      font-weight: bold;
      tbody tr:last-child & {
        border: 0;
      }
      @media (max-width: ${theme.base.viewport.phone}px) {
        .isQuery & {
          display: block;
          padding: ${theme.base.size * 2}px ${theme.base.size * 2}px 0 !important;
          width: auto !important;
          border-bottom: 0;
          border-top: 0;
        }
      }
    `};
`
