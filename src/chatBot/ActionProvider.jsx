import React from "react";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
  ...rest
}) => {
  const categoriesList = () => {
    const message = createChatBotMessage(
      `How can I help you? Below are some possible options.`,
      { widget: "categories" }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev?.messages, message],
    }));
  };

  const categoriesSelection = (data) => {
    const message = createChatBotMessage(
      `There is some questions that may releated to ${data?.name}. `,
      { widget: "filterQuestion", payload: data }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev?.messages, message],
      selectedCategories: data?.name,
    }));
  };

  const answerSelection = (data) => {
    console.log(data);
    const message = createChatBotMessage(
      `There is Answer of your Questions : - ${data?.name || data?.question}`,
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
            categoriesList,
            categoriesSelection,
            answerSelection,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
