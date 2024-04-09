import React, { useEffect, useRef } from "react";
import Danmaku from "rc-danmaku-react18";

export const TestDanmaku = () => {
  const danmakuInsRef = useRef(null);

  useEffect(() => {
    const danmakuIns = new Danmaku(".danmaku-wrapper");
    danmakuInsRef.current = danmakuIns;
  }, []);

  return (
    <div className="test-danmaku">
      <div
        className="danmaku-wrapper"
        style={{
          width: "600px",
          height: "400px",
          backgroundColor: "#000",
        }}
      />
      <button
        type="button"
        onClick={() => {
          if (danmakuInsRef.current) {
            danmakuInsRef.current.push("Hello World!");
          }
        }}
      >
        发送弹幕
      </button>
    </div>
  );
};
