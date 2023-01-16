import React from "react";

export default function Button(props) {
    const styles = {
        marginRight: "10px",
    };
    return (
        <button className="business-card-contact-button">
            <i className={props.class} style={styles}></i>
            {props.text}
        </button>
    );
}
