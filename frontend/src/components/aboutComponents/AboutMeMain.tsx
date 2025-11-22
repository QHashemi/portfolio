import React from 'react'
import RightSide from './showcase/RighSide'
import LeftSide from './showcase/LeftSide'
import styles from "./style.module.scss"
export default function AboutMeMain() {
    return (
        <div className={styles.main_container}>
            <div className={styles.showcase}>
                <LeftSide />
                <RightSide />


            </div>

        </div>
    )
}
