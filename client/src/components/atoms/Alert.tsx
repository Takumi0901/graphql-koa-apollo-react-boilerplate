import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  fontColor?: string
  text?: string
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const Alert: React.SFC<Props> = props => {
  return (
    <ScAlert className={ClassNamesExport(props.classes)} {...props}>
      {props.children}
    </ScAlert>
  )
}

export default Alert

export const ScAlert = styled.div`
  ${({ theme, color = '#fff', fontColor = '#646464' }: ScTypes<Props>) => css`
    display: block;
    padding: ${theme.base.size * 2}px;
    position: relative;
    border: solid 1px ${color};
    font-size: 1.4rem;
    color: ${fontColor};
    border-radius: 4px;
  `};
`
