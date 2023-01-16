import React from "react";
import Button from "./Button";

export default function Contact() {
    return (
        <div className="business-card-contact">
            <p className="business-card-contact-name">Geovane Godoi</p>
            <p className="business-card-contact-position">
                Senior Software Architect
            </p>
            <p className="business-card-contact-email">
                geovane.godoi@gmail.com
            </p>
            <div className="business-card-contact-buttons">
                <Button class="fa-solid fa-envelope" text="Email" />
                <Button class="fa-brands fa-linkedin" text="Linkedin" />
            </div>
        </div>
    );
}
