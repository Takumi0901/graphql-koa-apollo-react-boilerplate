import * as React from 'react'
import FlexCardWithTitle from 'src/components/molecules/FlexCardWithTitle'
import CardContent from 'src/components/atoms/CardContent'
import Button from 'src/components/atoms/Button'
import Alert from 'src/components/atoms/Alert'
import { RouteComponentProps } from 'react-router-dom'

const CatchError: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  return (
    <React.Fragment>
      <FlexCardWithTitle size={16} title="障害が発生中です">
        <CardContent border="#e6e6e6">
          <Alert color="#e34959" fontColor="#e34959" classes={['u-mb-24']}>
            <div>
              <p>
                ご迷惑をお掛けしております。
                <br />
                しばらく時間をおいてからのアクセスをお願いします。
                <br />
                時間をおいても復旧しない場合には、
                <a href="mailto:support@ninary.jp" className="linkText">
                  support@ninary.jp
                </a>
                までご連絡ください。
                <br />
                ※その際、大変お手数ですが、このページのURLを添えてお送りください。
              </p>
            </div>
          </Alert>

          <Button color="#065d93" name="トップページへ戻る" onClick={() => history.push('/')} />
        </CardContent>
      </FlexCardWithTitle>
    </React.Fragment>
  )
}

export default CatchError
