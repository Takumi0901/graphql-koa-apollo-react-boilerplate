import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css } from 'src/styles'

interface Props {
  classes?: string[]
  style?: { [key: string]: string }
  onClick(name: string): void
}

const ModalOverlay: React.SFC<Props> = props => {
  const { classes, onClick } = props
  return <ScModalOverlay className={ClassNamesExport(classes)} onClick={() => onClick('')} />
}

export default ModalOverlay

export const ScModalOverlay = styled.div`
  ${() => css`
    display: block;
    z-index: -1;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `};
`
