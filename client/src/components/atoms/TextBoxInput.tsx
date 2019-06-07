import * as React from 'react'
import styled, { css, ScTypes } from 'src/styles'
import ClassNamesExport from 'classnames'
import { Field, ErrorMessage } from 'formik'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  type: string
  sizeH?: number
  disabled?: boolean
  placeholder?: string
  textSize?: number
  icon?: string[]
  classes?: string[]
  name: string
  validate?: (values: string) => void | string
  errors?: string
  touched?: string
}

const TextBoxInput: React.SFC<Props> = props => {
  const { type, name, validate, errors, touched } = props
  return (
    <ScBoxInputWrap className={ClassNamesExport(props.classes)}>
      <ScBoxInput
        type={type}
        {...props}
        validate={validate}
        className={ClassNamesExport({ isError: errors && touched === 'true' })}
      />
      {errors && touched === 'true' && (
        <ScBoxError>
          <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: '4px' }} />
          <ErrorMessage name={name} />
        </ScBoxError>
      )}
    </ScBoxInputWrap>
  )
}

export default TextBoxInput

export const ScBoxInputWrap = styled.div`
  ${() => css`
    margin-bottom: 24px;
  `}
`

export const ScBoxError = styled.span`
  ${() => css`
    color: #e34959;
    font-size: 10px;
  `}
`

export const ScBoxInput = styled(Field)`
  ${({ theme, textSize, sizeH = 40 }: ScTypes<Props>) => css`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    background-color: transparent;
    color: #333;
    border: 1px solid #bcbcbc;
    outline: 0;
    width: 100%;
    padding: 0 ${theme.base.size}px;
    height: ${sizeH}px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 4px;
    font-size: ${textSize ? textSize / 10 : 1.4}rem;
    font-family: inherit;
    line-height: inherit;
    background: #fff;
    position: relative;
    &:focus {
      border-color: #065d93;
    }
    &.isError {
      border-color: #e34959;
      background: #ffe9eb;
    }
    &[disabled] {
      background: #fafafa;
      cursor: not-allowed;
    }
  `};
`
