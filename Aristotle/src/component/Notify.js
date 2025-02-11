import React from "react";
import './Popup.css'

function Notify(props)
{
    return(props.trigger) ? (
        <div className="notify">
            <div className="notify-inner">
                { props.children }
            </div>

        </div>
    ) : "";
}

export default Notify