import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


import styles from "./style.module.scss"
import Link from 'next/link';

export default function SocialMedia() {
    return (
        <div className={styles.social_media} >
            <Link href={"https://www.instagram.com/q.hashemi100/?__d=11%2F"}><FaInstagramSquare style={{ color: "#E4405F" }} />  </Link> 
            <Link href={"https://github.com/QHashemi"}><FaSquareFacebook style={{ color: "#1877F2" }} /></Link>   
            <Link href={"https://qasem-hashemi.com"}><FaSquareGithub style={{ color: "#171515" }} /></Link>  
            <Link href={"https://www.linkedin.com/in/qasem-hashemi-43b395225/?originalSubdomain=at"}><FaLinkedin style={{ color: "#0A66C2" }} /></Link>      
        </div>
    )
}
