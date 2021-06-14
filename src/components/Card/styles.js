import styled from "styled-components";

export const CardContainer = styled.a`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 280px;
  border-radius: 5px;
  margin: 10px;
  color: inherit;
  text-decoration: none;

  h4 {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  img {
    width: 280px;
    border-radius: 5px;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .container {
    text-align: center;
    padding: 10px 16px;
  }
`;
