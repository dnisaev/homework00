import styled from "styled-components";
import {mainTheme} from "../styles/Theme";

export const Card = styled.div`
  padding: 10px;
  width: 280px;
  height: 330px;
  background-color: ${mainTheme.colors.white};
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  font-family: "Inter", sans-serif;

  img {
    width: 280px;
    height: 170px;
  }

  h3 {
    margin-top: 20px;
    margin-left: 10px;
    font-size: 16px;
  }

  p {
    width: 256px;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 12px;
    line-height: 20px;
    color: ${mainTheme.colors.grey}
  }

  button {
    margin-top: 20px;
    margin-left: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
  }
`