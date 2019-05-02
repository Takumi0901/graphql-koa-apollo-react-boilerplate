import * as React from 'react'
import FlexCardWithTitle from 'src/components/molecules/FlexCardWithTitle'
import CardContent from 'src/components/atoms/CardContent'
import Button from 'src/components/atoms/Button'
import { RouteComponentProps } from 'react-router-dom'

const NotFound: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  return (
    <React.Fragment>
      <FlexCardWithTitle size={16} title="404">
        <CardContent border="#e6e6e6">
          <p className={'u-mb-32'}>このページは存在しないか削除された可能性があります。</p>
          <Button color="#53aee0" name="トップページへ戻る" onClick={() => history.push('/')} />
        </CardContent>
      </FlexCardWithTitle>
    </React.Fragment>
  )
}

export default NotFound
