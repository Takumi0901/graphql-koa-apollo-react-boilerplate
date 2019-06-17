import * as React from 'react'
import Button from 'src/components/atoms/Button'
import CardContent from 'src/components/atoms/CardContent'
import FlexCardWithTitle from 'src/components/molecules/FlexCardWithTitle'
import TextBoxInput from 'src/components/atoms/TextBoxInput'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useSigninMutation } from 'src/gen/actions'
import { password, email, required, composeValidators } from 'src/utils/Validate'
import { Formik, FormikProps } from 'formik'
import { useDispatch } from 'react-redux'
import { toggleAuth } from 'src/redux/modules/auth'
import { IToast, toggleToast } from 'src/redux/modules/toast'

type Values = {
  email: string
  password: string
}

type Props = {}

const LoginField: React.FunctionComponent<RouteComponentProps<{}> & Props> = ({ history }) => {
  const dispatch = useDispatch()
  const onToggleAuth = (token: string) => dispatch(toggleAuth({ token: token }))
  const setToken = (token: string) => {
    localStorage.token = token
    history.push('/')
    onToggleAuth(token)
  }
  const onToggleToast = (props: IToast) => dispatch(toggleToast(props))
  const onSubmitSignIn = useSigninMutation({
    update: (_, { data }) => {
      if (data.signin.success) {
        setToken(data.signin.token)
      } else {
        onToggleToast({ text: 'メールアドレスまたはパスワードが間違っています', isShow: true })
        setTimeout(() => onToggleToast({ text: 'メールアドレスまたはパスワードが間違っています', isShow: false }), 2000)
      }
    }
  })

  return (
    <FlexCardWithTitle size={16} title="ログイン">
      <CardContent>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values: Values) => {
            onSubmitSignIn({ variables: values })
          }}
          render={(props: FormikProps<Values>) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <label>
                  <h3>メールアドレス</h3>
                  <TextBoxInput
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    classes={['u-mb-24']}
                    errors={props.errors.email}
                    touched={props.touched.email ? 'true' : 'false'}
                    validate={composeValidators(email, required)}
                  />
                </label>
                <label>
                  <h3>パスワード</h3>
                  <TextBoxInput
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    errors={props.errors.password}
                    touched={props.touched.password ? 'true' : 'false'}
                    validate={composeValidators(password, required)}
                    classes={['u-mb-24']}
                  />
                </label>
                <div className="u-ta-c">
                  <Button data-testid="login" name="ログイン" color="#065d93" type="submit" />
                </div>
              </form>
            )
          }}
        />
      </CardContent>
    </FlexCardWithTitle>
  )
}

const LoginCard = withRouter<RouteComponentProps<{}> & Props>(LoginField)

export default LoginCard
