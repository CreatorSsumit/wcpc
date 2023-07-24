import React, { useEffect, useState } from "react";
import { Button, Card, Space } from "antd";

function FilterAnswer({ payload, actionProvider, state, ...rest }) {
  const [filterAnswerByQuestions, setfilterAnswerByQuestions] = useState("");

  useEffect(() => {
    setfilterAnswerByQuestions(payload?.answer);
  }, [payload]);

  return (
    <div style={{ textAlign: "end" }}>
      <Card
        size="small"
        style={{
          whiteSpace: "normal",
          height: "auto",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        {filterAnswerByQuestions}
      </Card>
    </div>
  );
}

export default FilterAnswer;
