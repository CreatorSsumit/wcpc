import React, { useEffect, useState } from "react";
import { Button, Card, Space } from "antd";

function AnswerList({ state, payload, actionProvider, actions, ...rest }) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(payload);
  }, [payload]);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div>
        <Card
          style={{
            marginTop: 10,
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            height: "auto",
          }}
        >
          {data?.answer}
          <br />
          <div
            style={{ color: "#2491FF", cursor: "pointer" }}
            onClick={() => actionProvider?.linkRoutes(data)}
          >
            Read More ...
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AnswerList;
