import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  borderBottom?: string
  borderTop?: string
  isForm?: boolean
  isCalendar?: boolean
  query?: boolean
  tableW?: number
  rowH?: number
  classes?: string[]
  style?: { [key: string]: string }
}

const Table: React.SFC<Props> = props => {
  const { children, query } = props
  return (
    <ScTableWrap>
      <ScTable className={ClassNamesExport(props.classes, { isQuery: query })} {...props}>
        {children}
      </ScTable>
    </ScTableWrap>
  )
}

export default Table

export const ScTableWrap = styled.div`
  ${() => css`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
  `};
`

export const ScTable = styled.table`
  ${({ tableW = 480, rowH, isCalendar, isForm, borderBottom = 'none', borderTop = 'none', theme }: ScTypes<Props>) =>
    css`
      width: 100%;
      display: table;
      border-spacing: 0;
      border-collapse: collapse;
      table-layout: fixed;
      word-wrap: break-word;
      min-width: ${tableW}px;
      border-top: ${borderTop === 'none' ? 'none' : `solid 1px ${borderTop}`};
      border-bottom: ${borderBottom === 'none' ? 'none' : `solid 1px ${borderBottom}`};
      & thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
        background: #f6f6f6;
        & tr {
          color: inherit;
          height: ${rowH ? `${rowH}px` : `auto`};
          display: table-row;
          outline: none;
          vertical-align: middle;
        }
      }
      & tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
        & tr {
          color: inherit;
          height: ${rowH}px;
          display: table-row;
          outline: none;
          vertical-align: middle;
          &:hover {
            background: ${isCalendar || isForm ? 'none' : '#f6f6f6'};
          }
        }
      }
      @media (max-width: ${theme.base.viewport.phone}px) {
        &.isQuery {
          min-width: auto;
        }
      }
    `};
`
