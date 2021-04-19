import React, { useRef, useEffect, useState } from "react";
import { drawCircle, drawTriangle, drawLine } from "./utils/Diagram";
import Input from "./components/Input";
import Button from "./components/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #efefef;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
`;

const Count = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const Percent = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const Invalid = styled.div`
  font-size: 1rem;
`;

const App = () => {
  const [longer, setLonger] = useState({ long: 0, whole: 0 });
  const [repeat, setRepeat] = useState("1");
  const [invalid, setInvalid] = useState(false);
  const canvasRef = useRef();
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    drawCircle(ctx);
    drawTriangle(ctx);
  });

  function handleRepeat(num) {
    const int = Number(num);
    if (Number.isInteger(int) && int >= 1 && int <= 4000) {
      randomLine(int);
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }

  function randomLine(amount, longCnt = 0, wholeCnt = 0) {
    if (amount) {
      const ctx = canvasRef.current.getContext("2d");
      const theta1 = Math.random() * Math.PI * 2;
      const x1 = Math.cos(theta1) * 300;
      const y1 = Math.sin(theta1) * 300;
      const theta2 = Math.random() * Math.PI * 2;
      const x2 = Math.cos(theta2) * 300;
      const y2 = Math.sin(theta2) * 300;
      const len = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const isLong = len > 300 * Math.sqrt(3);
      drawLine({
        ctx,
        x1,
        x2,
        y1,
        y2,
        color: isLong ? "rgb(255, 0 , 0)" : "rgb(0, 0, 255)",
      });
      randomLine(amount - 1, longCnt + (isLong ? 1 : 0), wholeCnt + 1);
    } else {
      setLonger({
        long: longer.long + longCnt,
        whole: longer.whole + wholeCnt,
      });
    }
  }

  return (
    <Container>
      <canvas ref={canvasRef} width="700" height="700" />
      <Control>
        <Count>
          {longer.long} / {longer.whole}
        </Count>
        <Percent>
          {longer.whole ? (longer.long / longer.whole) * 100 : 0}%
        </Percent>
        <Input
          error={invalid}
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleRepeat(repeat);
            }
          }}
          type="text"
        />
        <Button
          onClick={() => {
            handleRepeat(repeat);
          }}
        >
          선 그리기
        </Button>
        {invalid && (
          <Invalid>잘못된 입력이거나 범위(1~4000)을 벗어난 값입니다</Invalid>
        )}
      </Control>
    </Container>
  );
};

export default App;
