import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const CardLabel: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScCardLabel className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScCardLabel>
  )
}

export default CardLabel

export const ScCardLabel = styled.div`
  ${({ theme, color = '#c0c0c0' }: ScTypes<Props>) => css`
    color: #fff;
    background: ${color};
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    text-indent: ${theme.base.size}px;
    padding: ${theme.base.size / 2}px 0;
  `};
`
