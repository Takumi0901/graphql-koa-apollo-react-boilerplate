import * as React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import Flex from 'src/components/atoms/Flex'
import FlexCol from 'src/components/atoms/FlexCol'
import Button from 'src/components/atoms/Button'
import { AppContainer } from 'src/containers/app/App'
import styled, { css } from 'src/styles'
import { Subscribe } from 'unstated'
// import Badge from 'src/atoms/Badge'
// import SearchForm from 'components/organisms/doctor/common/SearchForm'

const Header: React.FunctionComponent<RouteComponentProps<{}>> = ({ history }) => {
  return (
    <Subscribe to={[AppContainer]}>
      {(app: any) => {
        return (
          <ScHeader color={'white'}>
            <ScHeaderInner>
              <Flex align={'between'} vAlign={'middle'}>
                <FlexCol size={4}>
                  <Link to={'/'}>LOGO</Link>
                </FlexCol>
                <FlexCol size={8} classes={['u-ta-r']}>
                  {app.state.token.length < 1 ? (
                    <Button sizeH={40} name="ログイン" onClick={() => history.push('/login')} />
                  ) : (
                    <Button sizeH={40} name="ログアウト" onClick={() => history.push('/login')} />
                  )}
                </FlexCol>
              </Flex>
            </ScHeaderInner>
          </ScHeader>
        )
      }}
    </Subscribe>
  )
}

export default withRouter<any>(Header)

export const ScHeader = styled.header`
  ${({ theme }: any) => css`
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    @media (min-width: ${theme.base.viewport.desktop}px) {
      height: 60px;
    }
  `};
`

export const ScHeaderInner = styled.div`
  ${({ theme }: any) => css`
    box-sizing: border-box;
    width: 100%;
    padding: 0 ${theme.base.size * 2}px;
  `};
`
