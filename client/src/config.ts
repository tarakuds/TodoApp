// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'kumragb8x2'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-hq-keiy5.us.auth0.com',            // Auth0 domain
  clientId: '0gZ52ZrK9yY3TE25IaPtmCpVVfAyLEH5',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
