import React, { useEffect, useState } from "react";
import { Button, Card, Space } from "antd";

function FilterAnswer({ payload, actionProvider, state, ...rest }) {
  const [filterAnswerByQuestions, setfilterAnswerByQuestions] = useState([]);

  useEffect(() => {
    var allquestions = state?.categories.reduce((a, b) => [
      ...a?.questions,
      ...b?.questions,
    ]);
    let answer = allquestions?.filter(
      (e) =>
        e?.question
          ?.toLowerCase()
          ?.indexOf(payload?.question?.toLowerCase().trim()) > -1
    );
    setfilterAnswerByQuestions(answer);
  }, [payload]);

  return (
    <div style={{ textAlign: "end" }}>
      {filterAnswerByQuestions?.length ? (
        filterAnswerByQuestions?.map((e, i) => {
          if (!e) return null;
          return (
            <>
              <Card
                size="small"
                style={{
                  whiteSpace: "normal",
                  height: "auto",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                {e?.answer}
              </Card>
            </>
          );
        })
      ) : (
        <Card size="small" style={{ textAlign: "center" }}>
          No Information Found
        </Card>
      )}
    </div>
  );
}

export default FilterAnswer;
