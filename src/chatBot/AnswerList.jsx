import React, { useEffect, useState } from "react";
import { Button, Card, Space } from "antd";

function AnswerList({ state, payload, actionProvider, actions, ...rest }) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(payload);
  }, [payload]);

  const redirecturl = (e) => {
    e.preventDefault();

    window.parent.location.href = data?.link || data?.newPageRouteLink;
  };

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
          {(data?.link || data?.newPageRouteLink) && (
            <div
              style={{ color: "#2491ff", cursor: "pointer" }}
              onClick={redirecturl}
            >
              Read More ...
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default AnswerList;
