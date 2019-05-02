import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  classes?: string[]
  style?: { [key: string]: string }
}

const ModalPanel: React.SFC<Props> = props => {
  const { classes, children } = props
  return <ScModalPanel className={ClassNamesExport(classes)}>{children}</ScModalPanel>
}

export default ModalPanel

export const ScModalPanel = styled.div`
  ${({ theme }: ScTypes<Props>) => css`
    position: relative;
    font-weight: normal;
    background: #fff;
    min-height: 200px;
    padding: 0;
    width: auto;
    border-radius: 8px;
    margin: 100px ${theme.base.size * 2}px;

    @media (min-width: ${theme.base.viewport.desktop}px) {
      width: 40%;
      padding: 0;
      margin: 100px auto 0;
    }
  `};
`
