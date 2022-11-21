import React from 'react';

import Typewriter from "typewriter-effect";
import '../styles/Home.css';

function App() {
    return (
        <div>
            <div className='typewriting'>
                <h1>
                    Hello Friends! I'm
                    <Typewriter

                        onInit={(typewriter) => {

                            typewriter

                                .typeString("a Developer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("a Designer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("a Coder")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("a Programmer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Seamoon Pandey")
                                .start();
                        }}

                    />
                    {/* <Typewriter
                        options={{
                            strings: ['Designer', 'Developer', 'Coder', 'Programmer', "Seamoon Pandey"],
                            autoStart: true,
                            delay: 'natural',
                            deleteSpeed: 'natural',
                            loop: true,

                        }}
                    /> */}
                </h1>
                <br />

            </div>
            <div className='bodyPart writing'>
                <p>
                    I love to do coding stuffs and studying new things while chilling.
                </p>
            </div>
            <div id="image">
                <img src={require('../pictures/mywebPic.png')} alt="mypic" />
            </div>

        </div>
    );
}

export default App;
