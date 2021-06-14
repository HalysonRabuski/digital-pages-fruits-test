import styled from "styled-components";

export const FruitContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  .content {
    width: 280px;
    margin: 0 auto;
    margin-top: 20px;
    justify-content: center;

    img {
      width: 280px;
      border-radius: 5px;
      margin-bottom: 30px;
    }

    p {
      margin-bottom: 5px;
    }

    .action {
      display: flex;
      margin-top: 20px;

      a {
        color: white;
        padding: 8px;
        border-radius: 3px;

        &:hover {
          cursor: pointer;
          filter: opacity(80%);
        }
      }

      a#back {
        background-color: #6c757d;
      }
      a#google {
        margin-left: auto;
        background-color: #50c7c7;
      }
    }
  }

  @media (min-width: 768px) {
    .content {
      width: 500px;
      img {
        width: 500px;
      }
    }
  }
`;
