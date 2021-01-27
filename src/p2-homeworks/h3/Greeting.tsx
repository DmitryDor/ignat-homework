import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '';

    return (
        <div className={s.greeting}>
            <div>
                <input value={name} onChange={setNameCallback} className={`${inputClass} ${s.inputGeneralClass}`} onKeyPress={onKeyPressHandler}/>
                <button onClick={addUser} className={s.button}>add</button>
            </div>
            <div className={s.messageError}>{error}</div>
            <div className={s.totalUsers}>Number of users: {totalUsers}</div>
        </div>
    );
}

export default Greeting;
