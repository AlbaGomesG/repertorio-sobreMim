import React from "react";
import styles from "../styles/contact.module.css";
import { Linkedin , Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact({ icon, name, url }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    {icon === "linkedin" && <Linkedin  size={28} color="#280943" />}
                    {icon === "github" && <Github size={28} color="#280943" />}
                    {icon === "mail" && <Mail size={28} color="#280943" />}
                </div>
            </div>
            <div className={styles.info}>
                <Link href={url} target="">{name}</Link>
            </div>
        </div>
    )
}