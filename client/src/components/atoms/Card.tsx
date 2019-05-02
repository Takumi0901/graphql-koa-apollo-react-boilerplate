import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const Card: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScCard className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScCard>
  )
}

export default Card

export const ScCard = styled.div`
  ${({ color = 'white' }: ScTypes<Props>) => css`
    background: ${color};
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    position: relative;

    &.shadowless {
      box-shadow: none;
    }
  `};
`
