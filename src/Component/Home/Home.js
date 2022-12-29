import React from 'react'
import "./Home.css"
import welcomlandingpage from "../../Assets/welcom-landing-page.png";
import sidegeorge from "../../Assets/side-george.png"
import sidedapp from "../../Assets/side-dapp.png"
import hazecrypto from "../../Assets/haze-crypto.png"
import {useNavigate} from "react-router-dom"
function Home({setState,state}) {
    const Navigate = useNavigate()
    const changePage =()=>{
        setState(!state)
        Navigate("/dashbord")
    }
    return (
        <div className=''>
            <div className='landing'>
                <div className="landing-text">
                    <h1 style={{ color: " #FFFFFF", marginBottom: "20px" }} data-lang="title1">Blockchain Split Game</h1>
                    {/* <h1 style={{ color: " #FFFFFF",  }} data-lang="title2"></h1> */}
                    <a href="#" data-lang="contribute" onClick={changePage}>CONTRIBUTE NOW!</a>
                </div>

                <img src={welcomlandingpage} className="img-fluid" width="900px"></img>
            </div>

            <div className='container-fluid ' style={{backgroundColor: "white"}}>
                <div className='row d-flex justify-content-center '>
                    <div className='col-lg-6'>
                        <h1 className='audit'>Smart Contract Code and Audit Report</h1>
                    </div>
                    <div className='col-lg-8'>
                        <p className='Fully-p'>Fully decentralise and 100% open source.<br />The codes of the smart contract have been audited by independent third-party.</p>
                    </div>
                </div>
                <div className='row d-flex justify-content-center align-items-center mb-5 mt-4 justify-content-around'>
                    <div className='col-lg-3'>
                        <img src={sidegeorge} className="img-fluid" width="180px" />
                    </div>
                    <div className='col-lg-3'>
                        <img src={sidedapp} className="img-fluid mt-2" width="200px" />
                    </div>
                    <div className='col-lg-3'>
                        <img src={hazecrypto} className="img-fluid" width="150px" />
                    </div>
                </div>
            </div>
            <div className='down-color container-fluid'>
                <div className="container reward">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5 mb-5" >
                            <h1 className="luckPool">$0.00</h1>
                            <p data-lang="lucky_pool">Daily Lucky Pool</p>
                        </div>
                        <div className="col-12 col-md-6 br mt-5 mb-5" >
                            <h1 className="lotteryPool">$0.00</h1>
                            <p data-lang="lottery_pool">Lottery Pool</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid platform'>
                <div className='row'>
                    <div className="col-12 col-md-6 platform-detail platform-detail-color ">
                        <h1 data-lang="desc4" className='text-start'>The Most Trusted <br /> Platform</h1>
                    </div>
                    <div className="col-12 col-md-6  platform-detail platform-detail-color-one">
                        <div className="row" style={{ margin: " 30px 0" }}>
                            <div className="col-12 col-md-1">
                                <h3> 01 </h3>
                            </div>
                            <div className="col-12 col-md-11" style={{ paddingTop: " 5px", paddingLeft: "20px" }}>
                                <h4 data-lang="desc5" className='text-start'> 100% Decentralise with <br /> Professional Audit </h4>
                                <p data-lang="desc6" className='text-start'>Smart contract coding fully verified by tronscan.</p>
                            </div>
                        </div>
                        <div className="row" style={{ margin: " 30px 0" }}>
                            <div className="col-12 col-md-1">
                                <h3> 02 </h3>
                            </div>
                            <div className="col-12 col-md-11" style={{ paddingTop: " 5px", paddingLeft: "20px" }}>
                                <h4 data-lang="desc7" className='text-start'> High Return </h4>
                                <p data-lang="desc8" className='text-start'>15 days per Cycle paying 1.5% interest daily, total of 22.5%
                                    interest in one Cycle. 45% Monthly return on your Investment.</p>
                            </div>
                        </div>
                        <div className="row" style={{ margin: " 30px 0" }}>
                            <div className="col-12 col-md-1">
                                <h3> 03 </h3>
                            </div>
                            <div className="col-12 col-md-11" style={{ paddingTop: " 5px", paddingLeft: "20px" }}>
                                <h4 data-lang="desc9" className='text-start'> 1-1 Matching Orders </h4>
                                <p data-lang="desc10" className='text-start'>Sustainability and longevity are the key mission of BSG.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h1 data-lang="footer">© 2022 BSG. All rights reserved</h1>
            </div>
        </div>
    )
}

export default Home