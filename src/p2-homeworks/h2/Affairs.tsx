import React from "react"
import Affair from "./Affair"
import {AffairType, FilterType} from "./HW2"
import styles from './Affairs.module.css'


type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            _id={a._id}
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            name={a.name}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}
                    className={`${props.filter === 'all' ? styles.button : ''} ${styles.allButton}`}>All
            </button>
            <button onClick={setHigh}
                    className={`${props.filter === 'high' ? styles.button : ''} ${styles.allButton}`}>High
            </button>
            <button onClick={setMiddle}
                    className={`${props.filter === 'middle' ? styles.button : ''} ${styles.allButton}`}>Middle
            </button>
            <button onClick={setLow}
                    className={`${props.filter === 'low' ? styles.button : ''} ${styles.allButton}`}>Low
            </button>
        </div>
    )
}

export default Affairs
