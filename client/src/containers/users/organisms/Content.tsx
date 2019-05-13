import * as React from 'react'
import { useUsersQuery } from 'src/gen/actions'
import Loading from 'src/components/atoms/Loading'

const Content: React.FunctionComponent<{}> = () => {
  const { data, loading } = useUsersQuery()
  if (loading) return <Loading fetching={loading} />
  if (data && data.users) {
    return (
      <React.Fragment>
        {data.users.map((e, key) => {
          return (
            <div key={key}>
              <p>{e.name}</p>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
  return null
}

export default Content
