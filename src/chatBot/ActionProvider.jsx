import React from "react";
import { faqQuestion } from "./faqQuestion";
import { regexMatch } from "./regexMatch";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
  onChangeUrl,
  ...rest
}) => {
  const questionList = (typedMsg) => {
    var data = [],
      message = "";
    const regexMatchasperMessage = Object.keys(regexMatch).filter((e, i) =>
      typedMsg.match(regexMatch[e])
    );

    regexMatchasperMessage.forEach((event) => {
      data.push(faqQuestion.find((e) => e.question.match(regexMatch[event])));
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
    onChangeUrl(data?.link);
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
