import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { utilityStyles } from './utility'
import { ITheme } from './'

const BaseStyles = createGlobalStyle`
  ${reset}
  // base.css
  html{
    font-size: ${({ theme }: { theme: ITheme }) => theme.base.fontSize};
  }
  body {
    margin: 0;
    background: #fafafa;
    color: #333;
    font-family: ${({ theme }: { theme: ITheme }) => theme.base.fontFamily};
    font-size: 1em;
    line-height: ${({ theme }: { theme: ITheme }) => theme.base.lineHeight};
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }
  a {
    cursor: pointer;

    &:link,
    &:visited {
      color: #333;
      text-decoration: none;
    }
  
    &:hover {
      opacity: .9;
      text-decoration: underline;
    }
  }
  .linkText {
    cursor: pointer;
    color: #065d93;
    text-decoration: underline;

    &:link,
    &:visited {
      color: #065d93;
      text-decoration: underline;
    }
  
    &:hover {
      opacity: .9;
      text-decoration: none;
    }
  }
  h1,h2,h3,h4,h5, h6 {
    font-weight: 800;
  }
  img {
      vertical-align: bottom;
  }
  #root {
    font-size: ${({ theme }: { theme: ITheme }) => theme.font.size};
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block !important;
  }
  .react-datepicker {
    font-size: .9em !important;
  }
  .react-datepicker__header {
    padding-top: 0.8em !important;
  }
  .react-datepicker__month {
    margin: 0.4em 1em !important;
  }
  .react-datepicker__day-name, .react-datepicker__day {
    width: 1.9em !important;
    line-height: 1.9em !important;
    margin: 0.166em !important;
  }
  .react-datepicker__current-month {
    font-size: 1em !important;
  }
  .react-datepicker__navigation {
    top: 1em !important;
    line-height: 1.7em !important;
    border: 0.45em solid transparent !important;
  }
  .react-datepicker__navigation--previous {
    border-right-color: #ccc !important;
  }
  .react-datepicker__navigation--next {
    border-left-color: #ccc !important;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    font-size: .8em !important;
  }
  ${utilityStyles()}
`

export default BaseStyles
