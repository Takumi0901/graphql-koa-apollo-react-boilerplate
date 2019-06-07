import * as React from 'react'
import { storiesOf } from '@storybook/react'
import StoryWrapper from 'src/containers/storybook/StoryWrapper'
import Button from 'src/components/atoms/Button'
import CardContent from 'src/components/atoms/CardContent'

storiesOf('AccountConnect', module).add('default', () => (
  <StoryWrapper>
    <CardContent>
      <Button name={'Button'} color="#065d93" blocked onClick={() => alert('OnClick!')} />
    </CardContent>
  </StoryWrapper>
))
