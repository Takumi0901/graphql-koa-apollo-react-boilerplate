import * as React from 'react'
import ClassNamesExport from 'classnames'
import { Link } from 'react-router-dom'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  name: string
  to: string
  color?: string
  classes?: (string | false)[]
  style?: { [key: string]: string }
}

const LinkItem: React.SFC<Props> = props => {
  const { name, to } = props
  if (to) {
    return (
      <ScLinkItem className={ClassNamesExport(props.classes)} {...props}>
        {name}
      </ScLinkItem>
    )
  } else {
    return (
      <ScLinkItemSpan className={ClassNamesExport(props.classes)} {...props}>
        {name}
      </ScLinkItemSpan>
    )
  }
}

export default LinkItem

export const ScLinkItem = styled(Link)`
  ${({ color = '#646464' }: ScTypes<Props>) => css`
    position: relative;
    display: inline-block;
    padding: 0.8em;
    text-align: center;
    vertical-align: middle;
    font-size: 1.4rem;
    white-space: nowrap;
    color: ${color};
    outline: none;
    touch-action: manipulation;
    cursor: pointer;

    &:link,
    &:active,
    &:hover,
    &:visited {
      color: ${color};
      text-decoration: none;
    }

    &:hover {
      opacity: 0.7;
    }
  `};
`

export const ScLinkItemSpan = styled.span`
  ${({ color = '#646464' }: ScTypes<Props>) => css`
    position: relative;
    display: inline-block;
    padding: 0.8em;
    text-align: center;
    vertical-align: middle;
    font-size: 1.4rem;
    white-space: nowrap;
    color: ${color};
    outline: none;
    touch-action: manipulation;
    cursor: pointer;

    &:link,
    &:active,
    &:hover,
    &:visited {
      color: ${color};
      text-decoration: none;
    }

    &:hover {
      opacity: 0.7;
    }
  `};
`
