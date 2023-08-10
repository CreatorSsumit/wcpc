import React from "react";
import { faqQuestion } from "./faqQuestion";
import { regexMatch } from "./regexMatch";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const questionList = (typedMsg) => {
    var data = [],
      message = "";

    data = faqQuestion.filter((e) => {
      return e?.keywords?.some((e1) => {
        return typedMsg
          ?.split(/(\s+)/)
          ?.filter(function (e) {
            return e.trim()?.length > 0;
          })
          .join(" ")
          ?.match(e1);
      });
    });

    if (data?.length) {
      message = createChatBotMessage(`Some possible FAQ`, {
        widget: "getAllQuestions",
        payload: data,
      });
    } else {
      message = createChatBotMessage(`Sorry ! I'm not able to Understand`);
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev?.messages, message],
    }));
  };

  const questionSelection = (data) => {
    var message = "";

    message = createChatBotMessage(`Some possible Answer`, {
      widget: "getAllAnswer",
      payload: data,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev?.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            questionList,
            questionSelection,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
