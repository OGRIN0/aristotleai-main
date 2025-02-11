import React from "react";
import './profilepop.css'

function Pro(props)
{
    return(props.trigger) ? (
        <div className="notify1">
            <div className="notify-inner1">
                { props.children }
            </div>

        </div>
    ) : "";
}

export default Pro