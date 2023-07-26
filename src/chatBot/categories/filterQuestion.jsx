import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";

function FilterQuestion({ payload, actionProvider, state, action, ...rest }) {
  const [filterAnswerByQuestions, setfilterAnswerByQuestions] = useState([]);

  useEffect(() => {
    const filterByCategories = state?.categories?.find(
      (e) =>
        e &&
        e?.name?.toLowerCase()?.indexOf(payload?.name?.toLowerCase()?.trim()) >
          -1
    );

    var allquestions = state?.categories
      ?.map((e) => e?.questions)
      ?.reduce((a, b) => {
        if (a?.length && !b?.length) {
          return [...a];
        } else if (!a?.length && b?.length) {
          return [...b];
        } else if (a?.length && b?.length) {
          return [...a, ...b];
        } else {
          return [];
        }
      });

    let allQuestionByText = allquestions?.filter(
      (e) =>
        e &&
        e?.question
          ?.toLowerCase()
          ?.indexOf(payload?.name?.toLowerCase().trim()) > -1
    );

    if (filterByCategories && filterByCategories?.length !== 0) {
      setfilterAnswerByQuestions(filterByCategories?.questions);
    } else if (
      !filterByCategories &&
      allQuestionByText &&
      allQuestionByText?.length !== 0
    ) {
      setfilterAnswerByQuestions(allQuestionByText);
    } else {
    }
  }, []);

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
