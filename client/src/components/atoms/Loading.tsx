import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'
import { animations } from 'src/styles/helper'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  size?: string
  fetching?: boolean
  classes?: string[]
  style?: { [key: string]: string }
}

const Loading: React.FC<Props> = ({ size, fetching, classes, style }) => (
  <ScLoading options={{ size, fetching }} className={ClassNamesExport(classes)} style={style}>
    <ScSpinner options={{ size, fetching }}>
      <FontAwesomeIcon icon={faSpinner} />
    </ScSpinner>
  </ScLoading>
)

export default Loading

export const ScLoading = styled.div`
  display: none;
  width: 100%;
  text-align: center;
  ${({ options, theme }: ScTypes<{ options: Props }>) =>
    options.size && getLoadingSize({ size: options.size, theme: theme })}
  ${({ options }: ScTypes<{ options: Props }>) => options.fetching && `display: block;`};
`

export const ScSpinner = styled.span`
  ${({ theme }: ScTypes<{ options: Props }>) => css`
    color: #646464;
    font-size: 24px !important;
    display: inline-block;
    padding: ${theme.base.size * 2}px 0;
    animation: ${animations.rotate360} 1s linear infinite;
  `};
  ${({ options, theme }: ScTypes<{ options: Props }>) =>
    options.size && getSpinnerSize({ size: options.size, theme: theme })};
`

const getLoadingSize = ({ size }: ScTypes<{ size: string }>) => {
  if (size === 'full') {
    return `
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 7000;
    `
  }
}

const getSpinnerSize = ({ size }: ScTypes<{ size: string }>) => {
  if (size === 'full') {
    return `
      position: absolute;
      left: 50%;
      top: 30%;
      margin-top: -24px;
      margin-left: -24px;
    `
  } else if (size === 'inline') {
    return `
      position: absolute;
      left: 50%;
      margin-top: -24px;
      margin-left: -24px;
      top: 50%;
      padding: 0;
    `
  } else if (size === 'small') {
    return `
      font-size: 28px !important;
      padding: 0;
    `
  }
}
