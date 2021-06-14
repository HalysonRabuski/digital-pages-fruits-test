/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { TopBarContainer } from "./styles";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { Link } from "react-router-dom";

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TopBarContainer>
      <Link to="/" className="logo">
        Logo
      </Link>

      {isOpen && (
        <div id="myLinks">
          <Link to="/" className="link">
            Página Inicial
          </Link>
        </div>
      )}

      <a className="icon" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </a>
    </TopBarContainer>
  );
}

export default TopBar;
