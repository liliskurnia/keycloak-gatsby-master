import React from "react"
import {useKeycloak} from '@react-keycloak/web'

const Home = () => {
  const {keycloak, initialized} = useKeycloak()
  var url = "https://keycloakgatsbymastermain.gatsbyjs.io/";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhWEFWTnVDZXVrc243enJEeXdhaExiWTRTbm5ieXpjRTdRLXJ2RTZvcl9zIn0.eyJleHAiOjE2NzYyNjkyMzYsImlhdCI6MTY3NjI2ODkzNiwiYXV0aF90aW1lIjoxNjc2MjY4OTM1LCJqdGkiOiI1M2Q1MDcxNy00NDAxLTQxZTYtYTAxMy01MGEzMjBkY2RkNmYiLCJpc3MiOiJodHRwczovL3JlZGhhdC1zc28tYmtrYm4uYXBwcy50a3AucGxhdGZvcm0ubGludGFzYXJ0YS5uZXQvYXV0aC9yZWFsbXMvRFVLQ0FQSUwtUmFpaGFuIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjhmZWEwNTc2LThlMTktNDZhZC1hNDYzLTkxNGI5YWZmYmVmZiIsInR5cCI6IkJlYXJlciIsImF6cCI6IkJQSlMtUmFpaGFuIiwibm9uY2UiOiI2Mzg0ZGU3MS04ODkyLTRhNzQtOWE0MC02ZWMwZTlkNzRhMjYiLCJzZXNzaW9uX3N0YXRlIjoiZDlmYWU1ZGEtY2FhNi00Y2E3LWIzZGItNmM2NWM5OTZjNDcwIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIiLCIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IlJhaWhhbiBQcmFkYW5hIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicmFpaGFuIiwiZ2l2ZW5fbmFtZSI6IlJhaWhhbiIsImZhbWlseV9uYW1lIjoiUHJhZGFuYSIsImVtYWlsIjoicmFpaGFuQGdtYWlsLmNvbSJ9.pNiKteteFWg_Cxngm77h6Ceta9RmKJrEoWyKt0if_iYg2t3EZM0nZbsDZIxGSeiQLQjqfZ0r2aex66MBrw2wah_5vjO1fOwJRoEy5OAhoNwal2e1PLWfBR3JGk_wI1z9Oc6N5br2JNmIvzBj-jUsHB9NFsxe_WR64ZtZddg8eTtsjnGHvyfd7Jkhjh5mZ5J1CVNR3Vv_qgGeTCY0qzms4PP9Fk4coqW5oUi8EjGgbFucIX01IFxrLlQGco-ALaeFn2jNdMTIjUr8an4TlxTJiO4mIMMs-9Smapd-Ll0w4rIacsqbq4r22S42bdwgO6lBsVPvi-SKL55lqiIwbkT6Tg}");

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
