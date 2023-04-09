import React from "react";

function Home() {
  return (
    <div>
    <div className="Body">
        <div className="Content">
            <div className="introduction-content">

            </div>
        </div>
    </div>

    <footer className = "footer">
        <div className="footer-container">
            <div className = "footer-box">
                <h3>Contact us:</h3>
                <ul className = "fa-ul">
                    <li><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;<a href = "#" className = "nonedeco"></a></li>
                    <li><i className="fa fa-facebook"></i>&nbsp;&nbsp;&nbsp;<a href = "#" className = "nonedeco"  id = "haslink" onmouseover="mouseover()" onmouseout="mouseout()"></a></li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;<a href = "#" className = "nonedeco"></a></li>
                </ul>  
            </div>
            <div className="footer-box">
                <h3>Donate us:</h3>
                <ul className = "fa-ul">
                    <li><i className="fa fa-money" aria-hidden="true"></i>&nbsp;&nbsp;<a href = "#" className="nonedeco"></a></li>
                </ul>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default Home;