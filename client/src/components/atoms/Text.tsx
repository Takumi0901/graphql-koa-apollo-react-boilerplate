import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  color?: string
  classes?: string[]
  onClick?: () => void
  border?: boolean
  style?: { [key: string]: string }
}

const Text: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScText className={ClassNamesExport(props.classes)} onClick={props.onClick} {...props}>
      {children}
    </ScText>
  )
}

export default Text

export const ScText = styled.p`
  ${({ color = '#333', onClick }: ScTypes<Props>) => css`
    color: ${color};
    cursor: ${onClick && 'pointer'};
  `};
  ${({ border }: ScTypes<Props>) =>
    border && `border-bottom: solid 1px #e6e6e6; margin-bottom: 16px; padding-bottom: 8px;`};
`
