import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const Title: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScTitle className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScTitle>
  )
}

export default Title

export const ScTitle = styled.h2`
  ${({ color = '#333' }: ScTypes<Props>) => css`
    color: ${color};
    border-bottom: solid 4px ${color};
    font-size: 2.4rem;
  `};
`
