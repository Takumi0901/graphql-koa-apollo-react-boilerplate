import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  color?: string
  size?: number
  classes?: string[]
  style?: { [key: string]: string }
  onClick?: () => void
}

const Icon: React.SFC<Props> = props => {
  return <ScIcon className={ClassNamesExport(props.classes)} {...props} onClick={props.onClick} />
}

export default Icon

export const ScIcon = styled.i`
  ${({ size, onClick, color = '#646464' }: ScTypes<Props>) => css`
    font-size: ${size ? size / 10 : 1.4}rem;
    cursor: ${onClick && 'pointer'};
    color: ${color};
  `};
`
