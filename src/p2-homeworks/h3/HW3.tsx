import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";

import s from './Greeting.module.css'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        const newUser = {_id: v1(), name}
        setUsers([newUser, ...users]);
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <div className={s.parentsClass}>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>
            <hr/>
        </div>
    );
}

export default HW3;
