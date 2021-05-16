import React from 'react'
import  './ml.css'

class Machinelearning extends React.Component{
    
    render(){
        return(
            <div class="totalpage">
                <div class="wrapper">
                    <div class="sidebar col-12">
                        <div class="head">
                            <img src="https://yaminichinta.github.io/machinelearing/logo.png" alt="" class="col-3" style={{width: "60px",height: "60px"}}/><p id="firebase" class="col-2 d-flex align-content-center" style={{color: "white", textAlign: "center"}}> Firebase</p>
                        </div>
                        <div class="projectoverview">
                            <a href="#" ><i class="fas fa-home"></i><p style={{display: "inline-block", fontSize: "18px", fontWeight: "600", lineHeight: "80px", color: "white"}}>Project Overview</p></a>
                        </div>
                        <ul >
                            <li >
                                <a href="#"><p id="build" style={{marginBottom: "0px"}}>Build</p></a>
                                <ul>
                                    <li><a href="/authentication/index.html" ><i class="fas fa-user-friends"  ></i>Authentication</a></li>
                                    <li><a href="/firebase/index.html" ><i class="fas fa-fire"></i>Firestore</a></li>
                                    <li><a href="#" ><i class="fas fa-server"></i>Realtime Database</a></li>
                                    <li><a href="/storage/index.html"><i class="fas fa-folder"></i>Storage</a></li>
                                    <li><a href="/hosting/index.html"><i class="fas fa-globe-americas"></i>Hosting</a></li>
                                    <li><a href="/functions/index.html"><i class="fas fa-code"></i>Functions</a></li>
                                    <li><a href="/machinelearning/index.html"><i class="fas fa-robot"></i>Machine Learning</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mainclass">
                    <header class="headpart">
                            <div class="col1">
                                <li class="dropdown" style={{padding: "20px"}}><a style={{color: "rgb(250, 248, 248)", textDecoration: "none",paddingTop: "30px"}}  class="dropdown-toggle " data-toggle="dropdown" href="#">Project Name </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">See all projects</a></li>
                                        <li><a href="#">Add a project</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li style={{opacity: "0.5"}}><a href="#">All projects</a></li>
                                    </ul>
                                </li>
                            </div>
                            <div class="col2">
                                <a style={{color: "rgb(255, 254, 254)",marginTop: "13px"}} href="#"> Go to docs</a>
                                <a class="navbar-brand" href="#" style={{color: "rgb(248, 245, 245)"}}>
                                    <span class="glyphicon glyphicon-bell"></span>
                                </a>
                                <a href="#" style={{color: "white",marginTop: "15px"}} ><span class="glyphicon glyphicon-user"></span></a>
                            </div>
                    </header>
                    
                    <div class="firebox container-fluid">
                        <div class="header-background row ">
                            <div class="mlclass container-fluid">
                                <div class="content">
                                    <button style={{borderRadius: "15px",paddingLeft: "15px",paddingRight: "15px",border: "transparent",backgroundColor: "rgb(133, 183, 248)",color: "white"}}><abbr style={{width: "300px",textDecoration: "none"}} title="In Beta since May 2018. This API might be changed in backward-incompatible ways and is not subject to any SLA or deprecation policy. Learn more">Beta</abbr></button>
                                    <h1 ><b>Machine Learning</b></h1>
                                    <p style={{fontSize: "20px"}}>Solve common problems in your apps with machine learning</p>

                                    <div class="links"><a href="https://firebase.google.com/products/ml?authuser=0"><span style={{color: "white"}} class="glyphicon glyphicon-exclamation-sign"></span> <u style={{color: "white"}}> Learn more</u>  </a>
                                    <a href="https://firebase.google.com/docs/ml?authuser=0"><span style={{color: "white"}} class="glyphicon glyphicon-align-left"></span> <u style={{color: "white"}}>View the docs</u></a></div><br/><br/>

                                    <button  style={{fontFamily:"sans-serif", backgroundColor: "white",color: "teal",padding: "10px",borderRadius: "9px", width: "fit-content",paddingLeft: "18px",paddingRight: "18px",border: "transparent"}}><a href="" style={{textDecoration: "none"}}><b>Get Started</b></a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="middlepart">
                        <div class="header"></div>
                        <div class="learn">
                            <div class="l">Learn more</div>
                            <div class="row">
                                <div class="column">
                                    <div class="card1" style={{height: "fit-content",backgroundColor: "white", width: "300px"}}>
                                        <div class="card-header">
                                                <div class="icon1">
                                                    <a href="#" style={{color: "white"}}>
                                                        <span class="glyphicon glyphicon-cog"></span>
                                                    </a>
                                                </div>
                                                <div class="text">
                                                    <h4>How do I get started?</h4>
                                                    <small>View the docs</small>
                                                </div>
                                        </div>

                                        <div class="card-body">
                                            <div class="icon2">
                                                <a href="#" style={{color: "white"}}>
                                                    <span class="glyphicon glyphicon-info-sign" style={{size: "50%"}}></span>
                                                </a>
                                            </div>
                                            <div class="text">
                                                <h4>How does Machine Learning work?</h4>
                                                <small>View the docs</small>
                                            </div>
                                        </div>

                                        <div class="card-footer">
                                            <div class="icon3" style={{backgroundColor:"rgb(112, 207, 112)"}}>
                                                <a href="#" style={{color: "white"}}>
                                                    <p style={{color:"white",fontSize:"50px"}}> ☺</p>
                                                </a>
                                            </div>
                                            <div class="text">
                                                <h4>  What can Machine Learning do for me?
                                                    </h4>
                                                <small>Learn more</small>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            
                                <div class="column youclass container1"  >
                                    <iframe class="responsive-iframe" width="560" height="315" src="https://www.youtube.com/embed/p5-BDRCAkMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div><br/>
                        <hr style={{color: "black", width: "auto",fontWeight: "bold"}}/><br/>
                        <div class="features">
                            <div class="l">More features for developers</div>
                            <div class="row features-row">
                                <div class="column" style={{borderRadius: "5px"}}>
                                
                                    <div class="up">
                                        <img src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png"/>
                                    </div>
                                    <div class="down1">
                                        <h4><b>Authentication</b></h4>
                                        <p>Authenticate and manage users</p>
                                    </div>
                                </div>
                            
                                <div class="column" style={{borderRadius: "5px"}}>
                                
                                    <div class="up">
                                        <img src="https://www.gstatic.com/mobilesdk/200429_mobilesdk/realtime_database2x.png"/>
                                    </div>
                                    <div class="down2">
                                        <h4><b>Realtime Database </b></h4>
                                        <p>Store and sync data in realtime</p>
                                    </div>
                                </div>
                                
                                <div class="column" style={{borderRadius: "5px"}}>
                                
                                    <div class="up">
                                        <img src="https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png"/>
                                    </div>
                                    <div class="down3">
                                        <h4><b>Storage</b></h4>
                                        <p>Store & retrive user generated content</p>
                                    </div>
                                </div>
                                
                        </div>
                        <div class="link"><a href="https://console.firebase.google.com/u/0/project/dress-2f515/features/develop"><u>
                            See all Build features</u></a>
                        </div>
                            
                    </div>        
                </div>
                <div class="footer">
                    <a style={{fontSize: "20px"}} href="https://console.firebase.google.com/u/0/project/dress-2f515/features/all"><strong>See all Firebase features -{">"}</strong></a>
                </div>
            </div>
            </div>

        )
    }
}



export default Machinelearning