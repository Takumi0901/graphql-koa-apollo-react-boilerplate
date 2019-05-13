# graphql-koa-apollo-react-boilerplate

It is a boiler plate for developing BFF and front end by schema drive.

[GraphQL でスキーマ駆動開発導入したら開発効率がアップするぞ！！ - Qiita](https://qiita.com/102Design/items/b95e2cbda18b48f32004)

## Get started

### for client

```bash
$ cd client
$ npm install
$ npm start
```

### for server

```bash
$ cd server
$ npm install
$ npm run mock
```

## about schema

It is managed by `common / graphql / schema.graphql`. Generate `types` and`hooks` based on this schema.

```bash
$ cd common
$ npm install
$ npm run gen
```

Generated on client and server respectively.

```bash
client/gen/actions.tsx
server/gen/types.ts
```

## How to use useQuery on client

```typescript
import * as React from "react";
import { useUsersQuery } from "src/gen/actions";
import Loading from "src/components/atoms/Loading";

const Content: React.FunctionComponent<{}> = () => {
  const { data, loading } = useUsersQuery();
  if (loading) return <Loading fetching={loading} />;
  if (data && data.users) {
    return (
      <React.Fragment>
        {data.users.map((e, key) => {
          return (
            <div key={key}>
              <p>{e.name}</p>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
  return null;
};

export default Content;
```
