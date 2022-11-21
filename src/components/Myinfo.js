import React from 'react'

function MyInfo() {
    return (
        <>
            <div id='myIdcard' style={{
                marginTop: "3rem",
                marginLeft: "auto",
                marginBottom: "2rem",
                color: "white",
                boxShadow: "5px -5px 13px grey",
                height: "fit-content",
                width: "fit-content",
                padding: "2rem", border: "2px solid white",
                borderRadius: "8px",
                display: "inline-block",

            }}>

                <div>
                    <div>
                        Name:   Seamoon Pandey
                    </div>
                    <hr />
                    <div>
                        Contact:   +977-9866142928<i class='fas fa-phone' ></i>
                    </div>
                    <hr />
                    <div>
                        Email:hackedasocial@gmail.com
                    </div>
                    <hr />


                    <address>
                        Address:    Shankarnagar,Tilottama-1,Nepal
                    </address>
                </div>
            </div >
        </>
    )
}

export default MyInfo