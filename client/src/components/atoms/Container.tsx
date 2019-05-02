import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  border?: string
  color?: string
  classes?: string[]
  style?: { [key: string]: string }
  height?: string
}

const Container: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScContainer className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScContainer>
  )
}

export const FullWidthContainer: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScFullWidthContainer className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScFullWidthContainer>
  )
}

export const UnNoneContainer: React.SFC<Props> = props => {
  const { children } = props
  return (
    <ScUnNoneContainer className={ClassNamesExport(props.classes)} {...props}>
      {children}
    </ScUnNoneContainer>
  )
}

export default Container

export const ScContainer = styled.div`
  ${({ theme, color }: ScTypes<Props>) => css`
    background: ${color};
    padding: ${theme.base.size}px ${theme.base.size * 2}px;
    position: relative;
  `};
`

export const ScFullWidthContainer = styled.div`
  ${({ theme, border = '#e6e6e6', color }: ScTypes<Props>) => css`
    display: block;
    margin-bottom: ${theme.base.size * 9}px;
    padding: ${theme.base.size * 4}px;
    border-bottom: 1px solid ${border};
    background: ${color};
  `};
`

export const ScUnNoneContainer = styled.div`
  ${({ height = '400px' }: ScTypes<Props>) => css`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: center;
    height: ${height};
    width: 100%;
  `};
`

export const ScMoreContainer = styled.div`
  ${({ theme }: ScTypes<Props>) => css`
    padding: ${theme.base.size * 2}px;
    text-align: center;
    width: 100%;
    border-top: 1px solid #e6e6e6;
  `};
`
