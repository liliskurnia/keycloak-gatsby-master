import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
     realm: "DUKCAPIL-Raihan",
     url: "https://redhat-sso-bkkbn.apps.tkp.platform.lintasarta.net/auth/",
     clientId: "BPJS-Raihan"
  })

export default keycloak