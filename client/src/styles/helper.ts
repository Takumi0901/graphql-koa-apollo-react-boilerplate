import { keyframes } from 'src/styles'

export const animations = {
  rotate360: () => keyframes`
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(360deg);
    }
  `,
  fadeIn100: () => keyframes`
    0% {
      display: none;
      opacity: 0;
    }
    
    1% {
      display: block;
      opacity: 0;
    }
    
    100% {
      display: block;
      opacity: 1;
    }
  `,
  fadeIn60: () => keyframes`
    0% {
      display: none;
      opacity: 0;
    }
  
      1% {
        display: block;
      opacity: 0;
    }
  
      100% {
        display: block;
      opacity: .6;
    }
  `,
  fadeOut100: () => keyframes`
    0% {
      opacity: 1;
    }
  
    99% {
      opacity: 0;
    }
  
    100% {
      opacity: 0;
    }
  `,
  fadeOutDisplayNone100: () => keyframes`
    0% {
      opacity: 1;
    }
  
    99% {
      opacity: 0;
    }
  
    100% {
      opacity: 0;
      display: none;
    }
  `,
  fadeOut60: () => keyframes`
    0% {
      opacity: .6;
    }
  
    99% {
      opacity: 0;
    }
  
    100% {
      opacity: 0;
    }
  `
}
