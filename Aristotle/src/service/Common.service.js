import {useNavigate } from "react-router-dom";

const urlRedirect  = function(url){
    debugger;
    const navigation = useNavigate();
    navigation(url)
}

export {urlRedirect}