import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  content: HTMLElement
  isActive?: boolean
  onClick?: () => void
  disabled?: boolean
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const PagerItem: React.SFC<Props> = props => {
  const { content, onClick, classes } = props
  return (
    <ScPagerItem className={ClassNamesExport(classes)} type={'button'} {...props} onClick={onClick}>
      {content}
    </ScPagerItem>
  )
}

export default PagerItem

export const ScPagerItem = styled.button`
  ${({ theme }: ScTypes<Props>) => css`
    position: relative;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 ${theme.base.size * 2}px;
    margin: 0 ${theme.base.size / 2}px;
    border: solid 1px #e6e6e6;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
    font-size: 1.4rem;
    white-space: nowrap;
    color: #333;
    outline: none;
    touch-action: manipulation;
    cursor: pointer;
    background: #fff;

    &:link,
    &:active,
    &:hover,
    &:visited {
      text-decoration: none;
    }

    &:hover {
      color: #fff;
      border: solid 1px #065d93;
      background: #065d93;
    }

    &.disabled,
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.7;
    }
  `};
  ${({ isActive }: ScTypes<Props>) =>
    isActive &&
    css`
      color: #fff;
      border: solid 1px #065d93;
      background: #065d93;
      &:hover {
        opacity: 0.7;
      }
    `};
`
