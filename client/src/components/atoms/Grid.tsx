import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { ScTypes } from 'src/styles'

interface Props {
  gap?: string
  columns?: string[]
  rows?: string[]
  areas?: string[][]
  flex?: boolean
  flow?: 'row' | 'column' | 'dense'
  justifyContent?: 'start' | 'center' | 'end'
  alignContent?: 'start' | 'center' | 'end'
  justifyItems?: 'start' | 'center' | 'end'
  alignItems?: 'start' | 'center' | 'end'
  classes?: string[]
  style?: { [key: string]: string }
}

const Grid: React.SFC<Props> = props => {
  const { classes, children } = props
  return (
    <ScGrid {...props} className={ClassNamesExport(classes)}>
      {children}
    </ScGrid>
  )
}

export default Grid

const ScGrid = styled.div`
  display: ${({ flex }: ScTypes<Props>) => (flex ? 'flex' : 'grid')};
  width: auto;
  grid-template-columns: ${({ columns, flex }: ScTypes<Props>) => {
    if (!columns || flex) return ''
    return columns.join(' ')
  }};
  grid-template-rows: ${({ rows, flex }: ScTypes<Props>) => {
    if (!rows || flex) return ''
    return rows.join(' ')
  }};
  grid-template-areas: ${({ areas, flex }: ScTypes<Props>) => {
    if (!areas || flex) return ''
    return areas.map(r => `'${r.join(' ')}'`).join(' ')
  }};
  grid-gap: ${({ gap, flex }: ScTypes<Props>) => !flex && gap};
  grid-auto-flow: ${({ flow, flex }: ScTypes<Props>) => !flex && flow};
  justify-content: ${({ justifyContent }: ScTypes<Props>) => justifyContent};
  align-content: ${({ alignContent }: ScTypes<Props>) => alignContent};
  justify-items: ${({ justifyItems }: ScTypes<Props>) => justifyItems};
  align-items: ${({ alignItems }: ScTypes<Props>) => alignItems};
`

interface ColProps {
  area?: string
  row?: string
  column?: string
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end'
}

export const GridCol = styled.div<ColProps>`
  box-sizing: border-box;
  flex-shrink: 0;
  grid-area: ${({ area }: ScTypes<ColProps>) => area};
  grid-row: ${({ row }: ScTypes<ColProps>) => row};
  grid-column: ${({ column }: ScTypes<ColProps>) => column};
  justify-self: ${({ justify }: ScTypes<ColProps>) => justify};
  align-self: ${({ align }: ScTypes<ColProps>) => align};
`
