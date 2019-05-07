import * as React from 'react'
import Button from 'src/components/atoms/Button'
import CardContent from 'src/components/atoms/CardContent'
import FlexCardWithTitle from 'src/components/molecules/FlexCardWithTitle'
import TextBoxInput from 'src/components/atoms/TextBoxInput'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useSigninMutation } from 'src/gen/actions'
import { password, email, required, composeValidators } from 'src/utils/Validate'
import { Formik, FormikProps } from 'formik'
import Toast from 'src/components/atoms/Toast'

type Values = {
  email: string
  password: string
}

const LoginField: React.FunctionComponent<RouteComponentProps<{}>> = ({ history }) => {
  const [isShowToast, setToast] = React.useState(false)
  const onSubmitSignIn = useSigninMutation({
    update: (_, { data }) => {
      if (data.signin.success) {
        localStorage.token = data.signin.token
        history.push('/')
      } else {
        setToast(true)
        setTimeout(() => setToast(false), 2000)
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
            console.log(props)

            return (
              <form onSubmit={props.handleSubmit}>
                <h3>メールアドレス</h3>
                <TextBoxInput
                  type="email"
                  name="email"
                  placeholder="メールアドレス"
                  classes={['u-mb-24']}
                  errors={props.errors.email}
                  touched={props.values.email}
                  validate={composeValidators(email, required)}
                />
                <h3>パスワード</h3>
                <TextBoxInput
                  type="password"
                  name="password"
                  placeholder="パスワード"
                  errors={props.errors.password}
                  touched={props.values.password}
                  validate={composeValidators(password, required)}
                  classes={['u-mb-24']}
                />
                <div className="u-ta-c">
                  <Button data-testid="login" name="ログイン" color="#53aee0" type="submit" />
                </div>
              </form>
            )
          }}
        />
      </CardContent>
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
    </FlexCardWithTitle>
  )
}

const LoginCard = withRouter<RouteComponentProps<{}>>(LoginField)

export default LoginCard
