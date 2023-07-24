import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const categoriesSelection = (data) => {
    const message = createChatBotMessage(
      `There is Some Questions that may releated to ${data?.name}. `,
      { widget: "filterQuestion", payload: data }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev?.messages, message],
      selectedCategories: data?.name,
    }));
  };

  const answerSelection = (data) => {
    const message = createChatBotMessage(
      `There is Answer of your Questions : - ${data?.question}`,
      { widget: "filterAnswer", payload: data }
    );

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
            categoriesSelection,
            answerSelection,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
