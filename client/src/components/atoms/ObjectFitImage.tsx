import * as React from 'react'
import ClassNamesExport from 'classnames'
import styled, { css, ScTypes } from 'src/styles'

interface Props {
  height?: number
  text?: string
  width?: number
  classes?: string[]
  src: string
  style?: { [key: string]: string }
}

const setDefaultImage = (e: React.MouseEvent<HTMLImageElement> & { target: { src: string } }) => {
  e.target.src = '/assets/images/noimage.jpg'
}

const ObjectFitImage: React.SFC<Props> = props => {
  const { classes, src, text } = props
  return (
    <ScObjectFitImage src={src} alt={text} className={ClassNamesExport(classes)} {...props} onError={setDefaultImage} />
  )
}

export default ObjectFitImage

export const ScObjectFitImage = styled.img`
  ${({ width, height }: ScTypes<Props>) => css`
    width: ${width}px;
    height: ${height}px;
    object-fit: cover;
  `};
`
