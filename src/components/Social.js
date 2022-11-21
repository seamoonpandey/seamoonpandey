import React from 'react';
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


export default function Social() {
    return (
        <div style={{ padding: "5px", margin: '2px', display: "inline-flex" }}>
            <div style={{ padding: "3px" }}><SocialIcon url="https://www.linkedin.com/in/seamoon-pandey-151b98254/" target={"_blank"} fgColor='white' /></div>
            <div style={{ padding: "3px" }}><SocialIcon url="https://www.facebook.com/sea.moon.12576" target={"_blank"} fgColor='white' /></div>
            <div style={{ padding: "3px" }}><SocialIcon url="https://github.com/seamoonpandey" target={"_blank"} fgColor='white' /></div>
            <div style={{ padding: "3px" }}><SocialIcon url="https://www.instagram.com/pandey_seamoon" target={"_blank"} fgColor='white' /></div>
        </div>
    )
}

