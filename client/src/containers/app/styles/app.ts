import styled, { css } from 'src/styles'

export const Wrapper = styled.div`
  ${() => css`
    background: #f3f3f3;
  `};
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 56px;
    height: calc(100vh - 56px);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    padding: ${theme.base.size * 3}px;
    margin-left: 220px;
  `};
`

export const LogoffContent = styled.div`
  ${({ theme }) => css`
    margin: 56px auto 0;
    height: calc(100vh - 56px);
    overflow: auto;
    max-width: 800px;
    width: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    padding: ${theme.base.size * 3}px;
  `};
`
