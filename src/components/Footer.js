import React from 'react'
import Social from './Social'

export default function Footer() {
    return (
        <div>

            <footer style={{ backgroundColor: "grey", width: "100%", display: "flex", color: "white" }}>
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
        </div >
    )
}
