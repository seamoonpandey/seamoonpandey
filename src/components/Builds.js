import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../styles/Builds.css'

function Builds() {
    const ref = useRef();
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "white" }}>My Builds and Projects</h1>

            <div className='wholeGrid'>
                <div className='card'>
                    <Flippy
                        flipOnHover={true}
                        //flipOnClick={true}
                        flipDirection="horizontal"
                        ref={ref}
                        style={{ width: "320px", height: "400px", margin: "2rem auto 10% auto", color: "white" }}
                    >
                        <FrontSide style={{ background: "blueviolet" }}>
                            <div className='title'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg><hr />
                                Live News App
                            </div>
                        </FrontSide>
                        <BackSide style={{ background: "red" }}>
                            <div className='description'>
                                This is a newsapp created only using reactjs library and bootstrap css. It only fulfill the concept of live API. This newsapp gives the real time news for the selected zone.
                            </div>
                            <div className='button'>
                                <a href="https://github.com/seamoonpandey/livenewsApp_using-react/tree/master" target="_blank" rel='noreferrer'><button>LandThere&rarr;</button></a>
                            </div>


                        </BackSide>
                    </Flippy>
                </div>
                <div className='card' >
                    <Flippy
                        flipOnHover={true}
                        //flipOnClick={true}
                        flipDirection="horizontal"
                        ref={ref}
                        style={{ width: "320px", height: "400px", margin: "2rem auto 10% auto", color: "white" }}

                    >
                        <FrontSide style={{ background: "blueviolet" }}>
                            <div className='title'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg><hr />
                                Fake FaceBook Login Dummy
                            </div>
                        </FrontSide>
                        <BackSide style={{ background: "red" }}>
                            <div className='description'>
                                FakeBook app is an login page for a facebook like app with the concept of nodejs. This is based on the local storage of the browser than a backend server.

                            </div>
                            <div className='button'>
                                <a href="https://github.com/seamoonpandey/asocial_FateBook.app" target="_blank" rel='noreferrer'><button>LandThere&rarr;</button></a>
                            </div>


                        </BackSide>
                    </Flippy>
                </div>
                <div className='card'>
                    <Flippy
                        flipOnHover={true}
                        //flipOnClick={true}
                        flipDirection="horizontal"
                        ref={ref}
                        style={{ width: "320px", height: "400px", margin: "2rem auto 10% auto", color: "white" }}
                    >
                        <FrontSide style={{ background: "blueviolet" }}>
                            <div className='title'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg><hr />
                                Bootstrap Project
                            </div>
                        </FrontSide>
                        <BackSide style={{ background: "red" }}>
                            <div className='description'>
                                This is an commercial webpage created to represent an IT company that offers awesome webapplications for the clients as the requirements. The best part about this page is that it is created only using bootstrap css.

                            </div>
                            <div className='button'>
                                <a href="https://github.com/seamoonpandey/bootstrap-website-prototype-/tree/master" target="_blank" rel='noreferrer'><button>LandThere&rarr;</button></a>
                            </div>


                        </BackSide>
                    </Flippy>
                </div>
            </div>
        </div >
    )
}
export default Builds