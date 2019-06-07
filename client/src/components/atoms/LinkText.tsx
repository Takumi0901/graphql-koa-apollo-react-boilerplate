import * as React from 'react'
import ClassNamesExport from 'classnames'
import { Link } from 'react-router-dom'
import styled, { css } from 'src/styles'

interface Props {
  name: string
  to: string
  classes?: string[]
  style?: { [key: string]: string }
}

const LinkText: React.SFC<Props> = props => {
  const { name } = props
  return (
    <ScLinkText className={ClassNamesExport(props.classes)} to={props.to}>
      {name}
    </ScLinkText>
  )
}

export default LinkText

export const ScLinkText = styled(Link)`
  ${() =>
    css`
      &:link,
      &:visited {
        color: #065d93;
        text-decoration: underline;
      }

      &:hover {
        opacity: 0.9;
        text-decoration: none;
      }
    `};
`
