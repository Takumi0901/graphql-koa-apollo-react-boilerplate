import * as React from 'react'
import { useUsersQuery } from 'src/gen/actions'
import Loading from 'src/components/atoms/Loading'

const Content: React.FunctionComponent<{}> = () => {
  const { data, loading } = useUsersQuery()
  if (loading) return <Loading fetching={loading} />
  if (data && Object.keys(data).length < 1) return null
  return (
    <React.Fragment>
      {data &&
        data.users &&
        data.users.map((e, key) => {
          if (!e) return null
          return (
            <div key={key}>
              <p>{e.name}</p>
            </div>
          )
        })}
    </React.Fragment>
  )
}

export default Content
