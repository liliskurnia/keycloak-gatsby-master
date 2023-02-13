import React from "react"
import { useKeycloak } from "@react-keycloak/web"
import keycloak from "../components/keycloak"

function Login(token) {
  const { keycloak, initialized } = useKeycloak()

  let url = "https://keycloakgatsbymastermain.gatsbyjs.io/"

  let xhr = new XMLHttpRequest()
  xhr.open("GET", url)

  xhr.setRequestHeader("Accept", "application/json")
  xhr.setRequestHeader("Authorization", "Bearer {token}")

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status)
      console.log(xhr.responseText)
    }
  }

  xhr.send()
}

return (
  <>
    <form action="">
      <label>
        Token Anda
        <input type="text" placeholder="Masukkan token"/>
      </label>
    </form>
    <button type="button" onClick={() => keycloak.login()}></button>
  </>
)

export default Login
