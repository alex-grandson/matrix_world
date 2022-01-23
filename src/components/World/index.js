import React from "react";
import './index.sass';

export default function World({name}) {
    return (
        <div className="world">
            {name}
        </div>
    )
}