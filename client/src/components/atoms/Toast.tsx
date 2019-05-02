import * as React from 'react'
import styled, { css, ScTypes } from 'src/styles'
import ClassNamesExport from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface Props {
  vertical: string
  align: string
  isShow: boolean
  offsetY?: number
  offsetX?: number
  height?: number
  text: string
  zIndex?: number
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
  setToast: (bool: boolean) => void
}

const Toast: React.FC<Props> = props => {
  const { isShow, setToast, classes, text } = props
  return (
    <ScToast className={ClassNamesExport(classes)} {...props} isShow={isShow}>
      <ScToastInner className={'toast__inner'} {...props}>
        {text}
        <span className="toast__close" onClick={() => setToast(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </ScToastInner>
    </ScToast>
  )
}

export default Toast

type Pos = {
  vertical: Vertical
  align: Align
}

type Align = {
  center: number
  left: number
  right: number
  [key: string]: number
}

type VerticalProps = {
  default: number
  visibility: number
  hidden: number
  [key: string]: number
}

type Vertical = {
  top: VerticalProps
  bottom: VerticalProps
  [key: string]: VerticalProps
}

const pos: Pos = {
  vertical: {
    top: {
      default: 0,
      visibility: 0,
      hidden: -80
    },
    bottom: {
      default: 0,
      visibility: 0,
      hidden: 80
    }
  },
  align: {
    center: 50,
    left: 0,
    right: 0
  }
}

export const ScToast = styled.div`
  ${({ align, zIndex = 100 }: ScTypes<Props>) => css`
    margin: 0;
    z-index: ${zIndex};
    position: fixed;
    left: ${pos.align[align]}%;
    display: flex;
    text-align: left;
    width: 100%;
  `}
  ${() => css`
    ${(props: ScTypes<Props>) => getVertical({ ...props })}
    ${(props: ScTypes<Props>) => getAlign({ ...props })}
    ${(props: ScTypes<Props>) => animationToast({ ...props })}
  `}
`

export const ScToastInner = styled.div`
  ${({ theme, color = '#53aee0', height = 48 }: ScTypes<Props>) => css`
    padding: 0 ${theme.base.size * 6}px 0 ${theme.base.size * 2}px;
    height: ${height}px;
    line-height: ${height}px;
    background: ${color};
    min-width: 100px;
    font-size: 14px;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    > .toast__close {
      position: absolute;
      top: 50%;
      right: 8px;
      line-height: 1;
      margin-top: -15px;
      padding: 8px;
      cursol: pointer;
    }
    @media (max-width: 798px) {
      width: 100%;
      margin: 0 !important;
    }
  `}
`

const animationToast = (props: ScTypes<Props>) => {
  if (props.isShow) {
    return css`
      visibility: visible;
      transform: translate(-${pos.align[props.align]}%, ${pos.vertical[props.vertical].visibility}px);
      transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms,
        visibility 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    `
  } else {
    return css`
      visibility: hidden;
      transform: translate(-${pos.align[props.align]}%, ${pos.vertical[props.vertical].hidden}px);
      transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms,
        visibility 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    `
  }
}

const getVertical = ({ vertical, offsetY }: ScTypes<Props>) => {
  if (vertical === 'top') {
    return `
      @media (max-width: 798px){
        top: ${pos.vertical[vertical].default}px;
      }
      top: ${pos.vertical[vertical].default + (offsetY || 0)}px;
    `
  } else {
    return `
      @media (max-width: 798px){
        bottom: ${pos.vertical[vertical].default}px;
      }
      bottom: ${pos.vertical[vertical].default + (offsetY || 0)}px;
    `
  }
}

const getAlign = ({ align, offsetX }: ScTypes<Props>) => {
  if (align === 'left') {
    return `
      justify-content: flex-start;
      & .toast__inner {
        margin-left: ${offsetX || 0}px;
      }
    `
  } else if (align === 'center') {
    return `
        justify-content: center;
      `
  } else if (align === 'right') {
    return `
        justify-content: flex-end;
        & .toast__inner {
          margin-right: ${offsetX || 0}px;
        }
      `
  }
}
