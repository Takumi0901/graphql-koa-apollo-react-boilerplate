import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { ScTypes } from 'src/styles'

interface Props {
  area?: string
  row?: string
  column?: string
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end'
  classes?: string[]
  style?: { [key: string]: string }
}

const GridCol: React.SFC<Props> = props => {
  const { classes, children } = props
  return (
    <ScGridCol {...props} className={ClassNamesExport(classes)}>
      {children}
    </ScGridCol>
  )
}

export default GridCol

export const ScGridCol = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  grid-area: ${({ area }: ScTypes<Props>) => area};
  grid-row: ${({ row }: ScTypes<Props>) => row};
  grid-column: ${({ column }: ScTypes<Props>) => column};
  justify-self: ${({ justify }: ScTypes<Props>) => justify};
  align-self: ${({ align }: ScTypes<Props>) => align};
`
