import * as React from 'react'
import LoginCard from './organisms/LoginCard'
import Toast from 'src/components/atoms/Toast'

const Login: React.FunctionComponent<{}> = () => {
  const [isShowToast, setToast] = React.useState(false)
  return (
    <React.Fragment>
      <LoginCard setToast={setToast} />
      <Toast
        isShow={isShowToast}
        setToast={setToast}
        text={'メールアドレスまたはパスワードが間違っています'}
        color={'#e34959'}
        offsetX={40}
        offsetY={60}
        zIndex={2000}
        vertical={'bottom'}
        align={'right'}
      />
    </React.Fragment>
  )
}

export default Login
