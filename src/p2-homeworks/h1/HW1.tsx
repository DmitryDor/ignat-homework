import React from "react";
import styles from './Message.module.css'
import Message from "./Message";

const messageData = {
    avatar: "https://avatarko.ru/img/kartinka/2/zhivotnye_kot_prikol_1767.jpg",
    name: "Artem",
    message: "Npm start нажимал?",
    time: "22:00",
};


function HW1() {
    return (
        <div>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    );
}



export default HW1;
