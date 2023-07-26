// in MessageParser.jsx
import React, { useState } from "react";
import { questionList } from "./questionsList";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (["hello", "menu"].includes(message?.trim().toLowerCase())) {
      actions?.categoriesList();
    } else {
      const filterByCategories = questionList?.categories?.find(
        (e) =>
          e &&
          e?.name?.toLowerCase()?.indexOf(message?.toLowerCase()?.trim()) > -1
      );

      var allquestions = questionList?.categories
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
          e?.question?.toLowerCase()?.indexOf(message?.toLowerCase().trim()) >
            -1
      );

      if (
        filterByCategories &&
        filterByCategories?.length !== 0 &&
        allQuestionByText &&
        allQuestionByText?.length !== 0
      ) {
        actions?.categoriesSelection({
          name: message,
          questions: [...filterByCategories?.questions, ...allQuestionByText],
        });
      } else if (
        !allQuestionByText &&
        filterByCategories &&
        filterByCategories?.length !== 0
      ) {
        actions?.categoriesSelection({
          name: message,
          questions: filterByCategories?.questions,
        });
      } else if (
        !filterByCategories &&
        allQuestionByText &&
        allQuestionByText?.length !== 0
      ) {
        actions?.categoriesSelection({
          name: message,
          questions: allQuestionByText,
        });
      } else {
        actions?.categoriesList();
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
