import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";

function FilterQuestion({ payload, actionProvider, state, action, ...rest }) {
  const [filterAnswerByQuestions, setfilterAnswerByQuestions] = useState([]);

  useEffect(() => {
    setfilterAnswerByQuestions(payload?.questions);
  }, [payload]);

  return (
    <div style={{ textAlign: "end" }}>
      {filterAnswerByQuestions?.map((e, i) => {
        return (
          <>
            <Button
              block
              type="dashed"
              style={{
                whiteSpace: "normal",
                height: "auto",
                marginBottom: "10px",
              }}
              onClick={() => actionProvider?.answerSelection(e)}
            >
              {e?.name || e?.question}
            </Button>
          </>
        );
      })}
    </div>
  );
}

export default FilterQuestion;
