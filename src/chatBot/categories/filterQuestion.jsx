import React, { useEffect, useState } from "react";
import { Button, Space } from "antd";

function FilterQuestion({ payload, actionProvider, state, ...rest }) {
  return (
    <div style={{ textAlign: "end" }}>
      {payload?.questions?.map((e, i) => {
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
              {e?.question}
            </Button>
          </>
        );
      })}
    </div>
  );
}

export default FilterQuestion;
