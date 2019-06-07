import styled, { css } from 'src/styles'

export const ScSideMenu = styled.div`
  ${() => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100vh;
    margin: 0;
    z-index: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    color: #fff;
    background: #2e374e;
  `};
`

export const ScSignOut = styled.a`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    padding: 0.8em;
    text-align: center;
    vertical-align: middle;
    font-size: 1.4rem;
    white-space: nowrap;
    color: #fff;
    outline: none;
    touch-action: manipulation;
    cursor: pointer;
    margin-left: ${theme.base.size * 3}px;

    &:link,
    &:active,
    &:hover,
    &:visited {
      color: #fff;
      text-decoration: none;
    }

    &:hover {
      opacity: 0.7;
    }
  `};
`

export const ScSideMenuInner = styled.nav`
  ${({ theme }) => css`
    margin: 100px 0 ${theme.base.size * 10}px;
    & .icon {
      vertical-align: -2px;
    }
    & .sideMenuItem {
      padding: 0 8px;
      border-left: 3px solid #2e374e;
      &.isActive {
        border-left: 3px solid #065d93;
      }
      &.isInnerActive {
        background: #283044;
      }
    }
  `};
`
export const ScSideMenuFooter = styled.div`
  ${({ theme }) => css`
    width: 220px;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 12px;
    color: #898989;
    background: #2e374e;
    padding: ${theme.base.size * 2}px 0;
    text-align: center;
  `};
`
