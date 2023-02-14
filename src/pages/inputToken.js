import React from "react"
import { useKeycloak } from "@react-keycloak/web"
import keycloak from "../components/keycloak"

function Login() {
  const { keycloak, initialized } = useKeycloak()

  const url = "https://keycloakgatsbymastermain.gatsbyjs.io/"

  const req = new XMLHttpRequest()
  req.open("GET", url, true)
  req.setRequestHeader("Accept", "application/json") 
  req.setRequestHeader("Authorization", "Bearer " + keycloak.token)

  req.onreadystatechange = function () {
    if (req.readyState == 4) {
      if (req.status == 200) {
        alert("Success")
      } else if (req.status == 403) {
        alert("Forbidden")
      }
    }
  }

  req.send()

  // update token 
  // keycloak
  //   .updateToken(30)
  //   .then(function () {
  //     loadData()
  //   })
  //   .catch(function () {
  //     alert("Failed to refresh token")
  //   })

  return (
    <>
      <form action="">
        <label>
          Token Anda
          <input type="text" placeholder="Masukkan token" />
        </label>
      </form>
      <button type="button" onClick={() => keycloak.login()}></button>
    </>
  )
}

export default Login
