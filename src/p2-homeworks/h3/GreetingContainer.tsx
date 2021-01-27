import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("")
    const [error, setError] = useState<string>("")

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };
    const addUser = () => {
        if (name.trim().length > 2) {
            addUserCallback(name)
            setName('')
            alert(`Hello  ${name}!`)
        } else {
            setError(`The name can't be shorter than two letters, please enter the correct name`)
        }
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
        />
    );
}

export default GreetingContainer;
