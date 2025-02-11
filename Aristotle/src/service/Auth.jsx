    
import * as React from "react";
import ApiService from './Api.service';


const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = React.useState(localStorage.getItem("login") || false);

  return {
    authed,
    async login(values) {

      return new Promise(async (res) => {
        // ApiService.httpPost(data);
        var data = await ApiService.httpPost("/user/permision/init", values)
        if (data?.status == 200) {
          localStorage.setItem("login", true)
          localStorage.setItem("loginData", JSON.stringify(data))
          setAuthed(true);
          res(data);
        } else {
          res(data);
        }
      });
    },
    logout() {
      return new Promise((res) => {
        localStorage.setItem("login", false)
        setAuthed(false);
        res();
      });
    },
  };
}
export default useAuth;
