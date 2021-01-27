import React, {useState} from "react"
import Affairs from "./Affairs"
import styles from './Affairs.module.css'

// types
export type AffairPriorityType = 'all' | 'high' | 'low' | 'middle'
export type FilterType = "all" | AffairPriorityType

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: 'high'},
    {_id: 2, name: "anime", priority: 'low'},
    {_id: 3, name: "games", priority: 'low'},
    {_id: 4, name: "work", priority: 'high'},
    {_id: 5, name: "html & css", priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs;
    if (filter === 'high') return affairs.filter(t => t.priority === 'high')
    if (filter === 'low') return affairs.filter(t => t.priority === 'low')
    if (filter === 'middle') return affairs.filter(t => t.priority === 'middle')

    return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(a => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>("all")

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2
            <div className={styles.root}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW2