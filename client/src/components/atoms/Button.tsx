import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  name?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  rounded?: boolean
  blocked?: boolean
  query?: boolean
  color?: string
  fontColor?: string
  bgColor?: string
  icon?: string
  type?: 'button' | 'submit' | 'reset'
  sizeH?: number
  borderW?: number
  classes?: string[]
  style?: { [key: string]: string }
}

const Button: React.SFC<Props> = props => {
  const { name, onClick, icon, classes, children, type = 'button' } = props
  return (
    <ScButton className={ClassNamesExport(classes)} type={type} {...props} onClick={onClick}>
      {name} {icon && <i className={`fa fa-angle-${icon}`} />} {children}
    </ScButton>
  )
}

export default Button

export const InverseButton: React.SFC<Props> = props => {
  const { name, onClick, icon, classes, children } = props
  return (
    <ScInverseButton className={ClassNamesExport(classes)} type={'button'} {...props} onClick={onClick}>
      {name} {icon && <i className={`fa fa-angle-${icon}`} />} {children}
    </ScInverseButton>
  )
}

export const GradButton: React.SFC<Props> = props => {
  const { name, onClick, icon, classes } = props
  return (
    <ScGradButton className={ClassNamesExport(classes)} type={'button'} {...props} onClick={onClick}>
      {name} {icon && <i className={`fa fa-angle-${icon}`} />}
    </ScGradButton>
  )
}
export const GhostButton: React.SFC<Props> = props => {
  const { name, onClick, icon, classes } = props
  return (
    <ScGhostButton className={ClassNamesExport(classes)} type={'button'} {...props} onClick={onClick}>
      {name} {icon && <i className={`fa fa-angle-${icon}`} />}
    </ScGhostButton>
  )
}

export const ScButton = styled.button`
  ${({ sizeH = 46, borderW = 1 }: ScTypes<Props>) => css`
    position: relative;
    display: inline-block;
    height: ${sizeH}px;
    padding: 0 2.5em;
    border: solid ${borderW}px #065d93;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
    font-size: 1.4rem;
    white-space: nowrap;
    color: #065d93;
    outline: none;
    touch-action: manipulation;
    cursor: pointer;
    background: #fff;
    font-weight: bold;

    &:link,
    &:active,
    &:hover,
    &:visited {
      text-decoration: none;
    }

    &:hover {
      opacity: 0.9;
    }

    &.disabled,
    &[disabled] {
      cursor: not-allowed;
      background: #c0c0c0;
      border: 1px solid #c0c0c0;
      color: #fff;
    }
  `};
  ${({ query, theme }: ScTypes<Props>) =>
    query &&
    css`
      @media (max-width: ${theme.base.viewport.phone}px) {
        height: 26px;
        font-size: 1.2rem;
        padding: 0 1em;
      }
    `};
  ${({ blocked }: ScTypes<Props>) =>
    blocked &&
    css`
      display: block;
      width: 100%;
      padding: 0 0.5em;
    `};
  ${({ rounded }: ScTypes<Props>) =>
    rounded &&
    css`
      border-radius: 25px;
    `};
  ${({ color }: ScTypes<Props>) =>
    color &&
    css`
      color: #fff;
      background: ${color};
      border-color: ${color};
      &:hover {
        color: #fff;
      }
    `};

  ${({ icon }: ScTypes<Props>) =>
    icon &&
    icon === 'right' &&
    css`
      & > i {
        position: absolute;
        top: 50%;
        right: 12px;
        margin-top: -6px;
      }
    `};

  ${({ icon }: ScTypes<Props>) =>
    icon &&
    icon === 'left' &&
    css`
      & > i {
        position: absolute;
        top: 50%;
        left: 12px;
        margin-top: -6px;
      }
    `};
`

export const ScInverseButton = styled(ScButton)`
  ${({ color = '#333', fontColor = '#333', bgColor = 'white' }: ScTypes<Props>) => css`
    color: ${fontColor};
    background: ${bgColor};
    border-color: ${color};
    &:hover {
      opacity: 0.7;
      color: ${bgColor};
      background: ${color};
      border-color: ${color};
    }
    &.isLabel {
      &:hover {
        color: ${bgColor};
        background: ${color};
        border-color: ${color};
      }
    }
  `};
`

export const ScGhostButton = styled(ScButton)`
  ${({ color = '#333', fontColor = '#333' }: ScTypes<Props>) => css`
    color: ${color};
    background: none;
    border-color: ${color};

    &:hover {
      background: ${color};
      color: ${fontColor};
    }
  `};
`

export const ScGradButton = styled(ScButton)`
  ${({ color = '#065d93' }: ScTypes<Props>) => css`
    color: #fff;
    border: 0;
    background: ${color};
    &:hover {
      color: #fff;
    }
  `};
`
