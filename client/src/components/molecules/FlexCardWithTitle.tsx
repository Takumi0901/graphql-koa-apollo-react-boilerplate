import * as React from 'react'
import Flex from 'src/components/atoms/Flex'
import FlexCol from 'src/components/atoms/FlexCol'
import Card from 'src/components/atoms/Card'
import CardContent from 'src/components/atoms/CardContent'

type Props = {
  size: number
  title?: string
}

const FlexCardWithTitle: React.FunctionComponent<Props> = ({ children, size, title }) => (
  <Flex>
    <FlexCol size={size}>
      <Card>
        {title && (
          <CardContent border="#e6e6e6">
            <h2 className="u-fz-20">{title}</h2>
          </CardContent>
        )}
        {children}
      </Card>
    </FlexCol>
  </Flex>
)

export default FlexCardWithTitle
