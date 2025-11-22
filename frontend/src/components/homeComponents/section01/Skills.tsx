import React from "react";
import styles from "../style.module.scss";
import { programmingSkills } from "../data";

export default function Skills() {
    return (
        <div className={styles.skills_slider_container} aria-label="Programming skills carousel">
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {programmingSkills.map((skill) => (
                        <div className={styles.icon} key={skill.id}>
                            <skill.icon />
                        </div>
                    ))}

           
                </div>
            </div>
        </div>
    );
}
