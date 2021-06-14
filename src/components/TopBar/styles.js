import styled from "styled-components";

export const TopBarContainer = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;

  a.logo {
    padding: 16px 0;
    margin-left: 16px;
    text-align: center;
    width: 50px;
  }

  a {
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    display: block;
  }

  #myLinks {
    background-color: grey;
  }

  a.link:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  a.icon {
    background: #2f3d45;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }

  a.icon svg {
    width: 20px;
    height: 100%;
    fill: white;
  }

  a.icon:hover {
    cursor: pointer;
    background-color: #1c2529;
  }
`;
