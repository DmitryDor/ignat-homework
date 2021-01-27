import React from "react";
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'

type AffairPropsType = {
    _id: number
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
    name: string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props._id)
    }

    return (
        <div>
            <div className={styles.title}>
                <div className={styles.child}>
                    <div className={styles.name}>{props.name}</div>
                    <button onClick={deleteCallback} className={styles.delButton}>X</button>
                </div>
            </div>
        </div>

    )
}

export default Affair;
