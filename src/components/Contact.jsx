import React from "react";
import styles from "../styles/contact.module.css";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact({ icon, name, url }) {
    const normalizedUrl = icon === "mail" ? `mailto:${url}` : url;
    return (
        <Link href={normalizedUrl} target={icon === "mail" ? "_self" : "_blank"} rel="noopener noreferrer" className={styles.container} style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    {icon === "linkedin" && <Linkedin size={28} color="#280943" />}
                    {icon === "github" && <Github size={28} color="#280943" />}
                    {icon === "mail" && <Mail size={28} color="#280943" />}
                </div>
            </div>
            <div className={styles.info}>
                <p>{name}</p>
            </div>
        </Link>
    )
}