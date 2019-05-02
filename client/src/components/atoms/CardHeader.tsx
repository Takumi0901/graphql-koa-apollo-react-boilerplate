import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  contentH?: number
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const CardHeader: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScCardContent className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScCardContent>
  )
}

export default CardHeader

export const ScCardContent = styled.div`
  ${({ theme, contentH }: ScTypes<Props>) => css`
    padding: ${theme.base.size * 2}px;
    min-height: ${contentH ? contentH + 'px' : 'auto'};
    max-height: ${contentH ? contentH + 'px' : 'auto'};
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    box-shadow: inset 0 -1px 0 0 #e6e6e6;
    @media (min-width: ${theme.base.viewport.desktop}px) {
      padding: ${theme.base.size * 3}px;
    }
  `};
`
