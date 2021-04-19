import styled from "styled-components";

const Button = styled.button`
  position: relative;
  width: 373px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0.5rem;
  background-color: #adb5bd;
  border: 2px solid #343a40;
  border-radius: 15px;
  font-size: 20px;
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background-color: #868e96;
  }
`;

export default Button;
