import React from "react";

function Footer() {
  var currentYear = new Date().getUTCFullYear();
  return (
    <footer>
      <p>Copyrights Reserved ©{currentYear}</p>
    </footer>
  );
}

export default Footer;
