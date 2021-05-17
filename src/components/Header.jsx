import React from 'react'
import  './ml.css'

class Header extends React.Component{
    
    render(){
        return(
            
                <div>
                <div class="mainclass">
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
                    </div>
                    </div>
            
    )
}
}
export default Header
