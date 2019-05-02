import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  sizeH?: number
  text?: string
  color?: string
  classes?: string[]
  border?: boolean
  style?: { [key: string]: string }
}

const Label: React.SFC<Props> = props => {
  return (
    <ScLabel className={ClassNamesExport(props.classes)} {...props}>
      {props.text}
    </ScLabel>
  )
}

export default Label

export const ScLabel = styled.span`
  ${({ color = '#646464', sizeH = 24, border }: ScTypes<Props>) => css`
    font-size: 1.2rem;
    display: inline-block;
    height: ${sizeH}px;
    line-height: ${sizeH}px;
    padding: 0 8px;
    color: ${border ? color : '#fff'};
    text-align: center;
    border-radius: 4px;
    background: ${border ? 'none' : color};
    border: ${border ? `solid 1px ${color}` : 'none'};
  `};
`
