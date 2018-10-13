import React from "react";
import "./Footer.css";
import react from '../Footer/react.png';

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="bottom">
        <img alt="react" src={react}></img>
          Simpsons Clicky Game!
        </div>
      </footer>
    );
  }
}

export default Footer;
