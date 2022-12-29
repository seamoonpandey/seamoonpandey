import React from 'react';
import Social from './Social';
import '../styles/Footer.css';

export default function Footer() {
    return (


        <footer style={{ backgroundColor: "grey", width: "100%", display: "flex", color: "white" }} className="foot">
            <Social />
            <div style={{ textAlign: "center", margin: "auto" }}>
                <div>
                    <p>Author: Seamoon Pandey</p>
                    <p>
                        <a href="mailto:hackedasocial@gmail.com" target={"_blank"} rel="noreferrer" style={{ textDecoration: "none", color: "pink" }}>hackedasocial@gmail.com</a>
                    </p>
                </div>
            </div>
            <div style={{ marginTop: "auto", marginBottom: "auto", marginRight: "2px" }}>
                +977-9866142928
            </div>
        </footer >

    )
}
