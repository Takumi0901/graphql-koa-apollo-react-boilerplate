import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  image: string
  size?: number
  classes?: string[]
  shadowless?: boolean
  style?: { [key: string]: string }
}

const Hero: React.SFC<Props> = props => {
  const { classes, children, shadowless } = props
  return (
    <ScHero className={ClassNamesExport(classes)} {...props}>
      <ScHeroInner>{children}</ScHeroInner>
      {!shadowless && <div className="overlay" />}
    </ScHero>
  )
}

export default Hero

export const ScHero = styled.div`
  ${({ image, theme }: ScTypes<Props>) => css`
    background: url(${image}) no-repeat;
    background-size: 100%;
    background-position: -40% center;
    padding-top: 46.6%;
    @media (min-width: ${theme.base.viewport.desktop}px) {
      padding-top: 40%;
    }
    @media (min-width: ${theme.base.viewport.largeDesktop}px) {
      padding-top: 30%;
    }
    position: relative;
    z-index: 1;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }
  `};
`

export const ScHeroInner = styled.div`
  ${({ theme }: ScTypes<{}>) => css`
    box-sizing: border-box;
    width: 100%;
    padding: 0 ${theme.base.size * 2}px;
    position: absolute;
    top: 50%;
    left: 0;
    @media (min-width: ${theme.base.viewport.desktop}px) {
      width: 100%;
      margin: 0 auto;
    }
  `};
`
