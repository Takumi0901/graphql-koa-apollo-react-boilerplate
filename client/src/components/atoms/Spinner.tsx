import styled, { css, ScTypes } from 'src/styles'
import { animations } from 'src/styles/helper'

export const ScSpinner = styled.i`
  ${({ color = '#fff', size = '14px' }: ScTypes<{ color: string; size: string }>) => css`
    color: ${color};
    font-size: ${size} !important;
    display: inline-block;
    animation: ${animations.rotate360} 0.5s linear infinite;
  `};
`
