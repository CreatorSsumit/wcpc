import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";

function QuestionList({ state, payload, actionProvider, actions, ...rest }) {
  const [faqQuestion, setfaqQuestion] = useState([]);

  useEffect(() => {
    setfaqQuestion(payload);
  }, [payload]);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {faqQuestion?.map((e, i) => {
        return (
          <div key={i}>
            <Button
              type="dashed"
              size="middle"
              style={{
                marginTop: 10,
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                height: "auto",
                color: "#2491FF",
                borderColor: "#2491FF",
              }}
              onClick={() => actionProvider?.questionSelection(e)}
            >
              {e?.question}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default QuestionList;
