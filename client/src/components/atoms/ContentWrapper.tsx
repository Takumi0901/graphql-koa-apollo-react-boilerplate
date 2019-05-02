import * as React from 'react'
import styled, { css, ScTypes } from 'src/styles'
import ClassNamesExport from 'classnames'

interface Props {
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const ContentWrapper: React.SFC<Props> = props => {
  return <ScContentWrapper className={ClassNamesExport(props.classes)}>{props.children}</ScContentWrapper>
}

export default ContentWrapper

export const ContentGradWrapper: React.SFC<Props> = props => {
  return <ScContentGradWrapper className={ClassNamesExport(props.classes)}>{props.children}</ScContentGradWrapper>
}

export const ScContentWrapper = styled.div`
  ${({ theme }: ScTypes<Props>) => css`
    box-sizing: border-box;
    width: auto;
    margin: 0 auto;
    max-width: 1080px;
    padding: ${theme.base.size * 4}px ${theme.base.size}px ${theme.base.size * 4}px;
  `};
`

export const ScContentGradWrapper = styled(ScContentWrapper)`
  ${({ color = '#53aee0' }: ScTypes<Props>) => css`
    color: #fff;
    background: ${color};
  `};
`
