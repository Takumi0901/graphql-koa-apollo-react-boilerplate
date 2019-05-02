import * as React from 'react'
import styled, { css } from 'src/styles'
import { animations } from 'src/styles/helper'
import ClassNamesExport from 'classnames'
import ModalOverlay from 'src/components/atoms/ModalOverlay'
import ModalPanel from 'src/components/atoms/ModalPanel'
import ModalHeader from 'src/components/atoms/ModalHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface Props {
  modalName: string
  name: string
  title?: string
  classes?: string[]
  style?: { [key: string]: string }
  onClick(name: string): void
}

const Modal: React.SFC<Props> = props => {
  const { modalName, classes, name, title, children, onClick } = props
  return (
    <ScModal className={ClassNamesExport({ fadeIn: name === modalName }, classes)}>
      <ModalPanel>
        {title && <ModalHeader title={title} />}
        <ScModalInner>{children}</ScModalInner>
        <span onClick={() => onClick('')}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{ position: 'absolute', top: '16px', right: '24px', fontSize: '24px' }}
          />
        </span>
      </ModalPanel>
      <ModalOverlay onClick={onClick} />
    </ScModal>
  )
}

export default Modal

export const ScModal = styled.div`
  ${(): any => css`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    opacity: 0;
    display: none;
    color: #4a4a4a;

    &.fadeIn {
      display: block;
      opacity: 1;
      animation-name: ${animations.fadeIn100};
      animation-duration: 0.5s;
    }
  `};
`

export const ScModalInner = styled.div`
  ${({ theme }): any => css`
    padding: ${theme.base.size * 4}px;
  `};
`
