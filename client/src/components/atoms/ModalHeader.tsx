import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  title?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const ModalHeader: React.SFC<Props> = props => {
  const { classes, title } = props
  return <ScModalHeader className={ClassNamesExport(classes)}>{title}</ScModalHeader>
}

export default ModalHeader

export const ScModalHeader = styled.div`
  ${({ theme }: ScTypes<Props>) => css`
    font-weight: bold;
    font-size: 1.4rem;
    padding: ${theme.base.size * 2}px ${theme.base.size * 3}px;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: ${theme.base.size * 1}px;
  `};
`
