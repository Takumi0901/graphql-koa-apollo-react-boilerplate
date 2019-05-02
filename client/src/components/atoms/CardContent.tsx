import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  contentH?: number
  border?: string
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
}

const CardContent: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScCardContent className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScCardContent>
  )
}

export default CardContent

export const ScCardContent = styled.div`
  ${({ theme, contentH, border }: ScTypes<Props>) => css`
    padding: ${theme.base.size * 2}px;
    min-height: ${contentH ? contentH + 'px' : 'auto'};
    max-height: ${contentH ? contentH + 'px' : 'auto'};
    border-bottom: ${border ? `1px solid ${border}` : 'none'};
    @media (min-width: ${theme.base.viewport.desktop}px) {
      padding: ${theme.base.size * 3}px;
    }
  `};
`

export const ScBgBlurCardContent = styled(CardContent)`
  ${({ backgroundImageUrl, blur = 0 }: { backgroundImageUrl: string; blur: number }) => css`
    display: flex;
    position: relative;
    background: url('${backgroundImageUrl}') no-repeat 0 0 / cover;
    overflow: hidden;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      top: -${blur}px;
      right: -${blur}px;
      bottom: -${blur}px;
      left: -${blur}px;
      z-index: -1;
      background: inherit;
      filter: blur(${blur}px) brightness(300%);
    }
  `};
`
