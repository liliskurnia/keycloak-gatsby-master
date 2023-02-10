import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  realm: "grit",
  url: "http://103.140.90.146:8080",
  clientId: "testlocalhost",
})

export default keycloak