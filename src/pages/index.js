import React from "react"
import {useKeycloak} from '@react-keycloak/web'

const Home = () => {
  const {keycloak, initialized} = useKeycloak()
  var url = "https://keycloakgatsbymastermain.gatsbyjs.io/";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {access_token}");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
  
return (<>
<div>The user is {keycloak.authenticated ? '' : 'NOT'} authenticated</div>
{keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}
</>)
}

export default Home
