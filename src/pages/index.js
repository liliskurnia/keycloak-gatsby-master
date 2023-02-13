import React from "react"
import { useKeycloak } from "@react-keycloak/web"
import Login from "./inputToken"

const Home = () => {
  const { keycloak, initialized } = useKeycloak()
  
  return (
    <>
    <Login/>
      <div>The user is {keycloak.authenticated ? "" : "NOT"} authenticated</div>
      {keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}
    </>
  )
}

export default Home
