import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { ScTypes, ITheme } from 'src/styles'

interface Props {
  size?: number
  classes?: string[]
  grow?: number
  style?: { [key: string]: string }
}

const FlexCol: React.SFC<Props> = props => {
  const { classes, children } = props
  return (
    <ScFlexCol {...props} className={ClassNamesExport(classes)}>
      {children}
    </ScFlexCol>
  )
}

export default FlexCol

export const ScFlexCol = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  ${({ grow }: ScTypes<Props>) => grow && `flex-grow: ${grow}`};
  ${({ size, theme }: ScTypes<Props>) => size && getFlexSize({ size: size, theme: theme })};
  ${({ size, theme }: ScTypes<Props>) => getFlexGuttersSize({ size: size, theme: theme })};
  ${({ theme }: ScTypes<Props>) => getFlexMargin(theme)};
  ${({ theme }: ScTypes<Props>) => getFlexQuery(theme)};
  ${({ theme }: ScTypes<Props>) => getFlexQueryCol2(theme)};
`

const getFlexSize = ({ size = 1, theme }: ScTypes<Props>) => {
  return `
    width: ${theme.flex.colWidth * size}%;
  `
}

const getFlexGuttersSize = ({ size, theme }: ScTypes<Props>) => {
  if (size) {
    return `
      .flex-gutters > & {
        width: ${theme.flex.colWidthGutters * size - theme.flex.gutters}%;
        margin-left: ${theme.flex.gutters}%;
          &:first-child {
            margin-left: 0;
          }
      }
    `
  } else {
    return `
      .flex-gutters > & {
        margin-left: ${theme.flex.gutters}%;
          &:first-child {
            margin-left: 0;
          }
      }
    `
  }
}

const getFlexMargin = (theme: ITheme) => {
  return `
    .flex-margin > & {
      margin-bottom: ${theme.base.size * 2}px;
    }
  `
}

const getFlexQuery = (theme: ITheme) => {
  return `
    @media (max-width: ${theme.base.viewport.desktop}px) {
      .flex-query > & {
        width: 100% !important;
        display: block !important;
        margin: 0 0 ${theme.base.size * 3}px;
        padding: 0 !important;
        &.u-d-pc {
          display: none !important;
          margin: 0;
        }
      }
    }
  `
}

const getFlexQueryCol2 = (theme: ITheme) => {
  return `
    @media (max-width: ${theme.base.viewport.desktop}px) {
      .flex-query-col2 > & {
        width: 50% !important;
      }
    }
  `
}
