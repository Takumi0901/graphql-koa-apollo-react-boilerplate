import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { ScTypes } from 'src/styles'

interface Props {
  gutters?: boolean
  margin?: boolean
  query?: boolean
  vAlign?: string
  align?: string
  direction?: string
  classes?: string[]
  queryCol2?: boolean
  style?: { [key: string]: string }
}

const Flex: React.SFC<Props> = props => {
  const { classes, gutters, margin, query, children, queryCol2 } = props
  return (
    <ScFlex
      {...props}
      className={ClassNamesExport(classes, {
        'flex-gutters': gutters,
        'flex-margin': margin,
        'flex-query': query,
        'flex-query-col2': queryCol2
      })}
    >
      {children}
    </ScFlex>
  )
}

export default Flex

export const ScFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  ${({ theme, query }: ScTypes<Props>) =>
    query &&
    `
    display: block;
    @media (min-width: ${theme.base.viewport.desktop}px) {
      display: flex;   
    }
  `};
  ${({ vAlign }: ScTypes<Props>) => vAlign && getFlexVAlign(vAlign)};
  ${({ align }: ScTypes<Props>) => align && getFlexAlign(align)};
  ${({ direction }: ScTypes<Props>) => direction && getFlexDirection(direction)};
`

const getFlexVAlign = (vAlign: string) => {
  if (vAlign === 'top') {
    return `
      align-items: flex-start;
    `
  } else if (vAlign === 'middle') {
    return `
      align-items: center;
    `
  } else if (vAlign === 'bottom') {
    return `
      align-items: flex-end;
    `
  } else if (vAlign === 'stretch') {
    return `
      align-items: stretch;
    `
  } else if (vAlign === 'baseline') {
    return `
      align-items: baseline;
    `
  }
}

const getFlexAlign = (align: string) => {
  if (align === 'left') {
    return `
      justify-content: flex-start;
    `
  } else if (align === 'center') {
    return `
      justify-content: center;
    `
  } else if (align === 'right') {
    return `
      justify-content: flex-end;
    `
  } else if (align === 'between') {
    return `
      justify-content: space-between;
    `
  }
}

const getFlexDirection = (direction: string) => {
  if (direction === 'row') {
    return `
      flex-direction: row;
    `
  } else if (direction === 'reverse') {
    return `
      flex-direction: row-reverse;
    `
  }
}
