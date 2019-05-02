import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Menu from 'src/components/atoms/Menu'
import SideMenuItem from 'src/components/molecules/SideMenuItem'
import { ScSideMenu, ScSideMenuInner } from '../styles/sideMenu'
import { Subscribe } from 'unstated'
import { AppContainer } from 'src/containers/app/App'

const menus: Array<{
  name: string
  path: string
  menu?: Array<{
    name: string
    path: string
  }>
}> = [{ name: 'トップ', path: '/' }]

const SideMenu: React.FunctionComponent<RouteComponentProps<{}>> = ({ location }) => {
  return (
    <Subscribe to={[AppContainer]}>
      {(app: AppContainer) => {
        if (app.state.token.length < 1) return null
        return (
          <ScSideMenu>
            <ScSideMenuInner>
              <Menu>
                {menus &&
                  menus.map((e, key) => {
                    return (
                      <React.Fragment key={key}>
                        <SideMenuItem
                          key={key}
                          classes={['sideMenuItem', location.pathname === e.path && 'isActive']}
                          name={e.name}
                          path={e.path}
                        />
                        {e.menu &&
                          e.menu.map((f, fKey) => {
                            return (
                              <SideMenuItem
                                key={`inner-${fKey}`}
                                classes={['sideMenuItem', 'u-pl-32', location.pathname === f.path && 'isInnerActive']}
                                name={f.name}
                                path={f.path}
                              />
                            )
                          })}
                      </React.Fragment>
                    )
                  })}
              </Menu>
            </ScSideMenuInner>
          </ScSideMenu>
        )
      }}
    </Subscribe>
  )
}

export default withRouter<RouteComponentProps<{}>>(SideMenu)
