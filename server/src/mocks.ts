export default {
  ID: () => '1',
  Date: () => new Date(1991, 11, 24),
  DateTime: () => new Date(Date.UTC(2017, 0, 10, 21, 33, 15, 233)),
  EmailAddress: () => 'example@gmail.com',
  URL: () => 'https://example.jp',
  User: () => ({
    name: '山田 花子'
  })
}
