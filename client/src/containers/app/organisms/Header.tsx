import * as React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import Flex from 'src/components/atoms/Flex'
import FlexCol from 'src/components/atoms/FlexCol'
import Button from 'src/components/atoms/Button'
import styled, { css } from 'src/styles'
import { useSignoutMutation } from 'src/gen/actions'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from 'src/redux/IStore'
import { toggleAuth } from 'src/redux/modules/auth'

const Header: React.FunctionComponent<RouteComponentProps<{}>> = ({ history }) => {
  const onSubmitLogout = useSignoutMutation()
  const token = useSelector((state: IStore) => state.auth.token)
  const dispatch = useDispatch()
  const removedToken = () => dispatch(toggleAuth({ token: '' }))
  const onClickSignOut = () => {
    onSubmitLogout()
    history.push('/login')
    removedToken()
  }

  return (
    <ScHeader color={'white'}>
      <ScHeaderInner>
        <Flex align={'between'} vAlign={'middle'}>
          <FlexCol size={4}>
            <h1>
              <Link to={'/'}>LOGO</Link>
            </h1>
          </FlexCol>
          <FlexCol size={8} classes={['u-ta-r']}>
            {token.length < 1 ? (
              <Button sizeH={40} name="ログイン" onClick={() => history.push('/login')} />
            ) : (
              <Button sizeH={40} name="ログアウト" onClick={() => onClickSignOut()} />
            )}
          </FlexCol>
        </Flex>
      </ScHeaderInner>
    </ScHeader>
  )
}

export default withRouter<RouteComponentProps<{}>>(Header)

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
