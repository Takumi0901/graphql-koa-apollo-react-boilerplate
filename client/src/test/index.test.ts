const EasyGraphQLTester = require('easygraphql-tester')
const fs = require('fs')
const path = require('path')
import { UsersDocument } from 'src/gen/actions'

const schemaCode = fs.readFileSync(
  path.join(__dirname, '..', '..', '..', 'common', 'graphql', 'schema.graphql'),
  'utf8'
)
// @ts-ignore
describe('A user', function() {
  // @ts-ignore
  let tester

  // @ts-ignore
  beforeAll(() => {
    tester = new EasyGraphQLTester(schemaCode)
  })

  test('UsersDocument', () => {
    // @ts-ignore
    tester.test(true, UsersDocument)
  })
})
