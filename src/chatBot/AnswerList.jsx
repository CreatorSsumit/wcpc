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
          <a href={data?.link}>Read More ...</a>
        </Card>
      </div>
    </div>
  );
}

export default AnswerList;
