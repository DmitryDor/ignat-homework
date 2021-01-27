import React from "react";
import s from '../HW5.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div>404</div>
            <div>Page not found!</div>
        </div>
    );
}

export default Error404;
