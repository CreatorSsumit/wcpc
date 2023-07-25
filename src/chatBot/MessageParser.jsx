// in MessageParser.jsx
import React from "react";

const MessageParser = ({ children, actions, createChatBotMessage }) => {
  const parse = (message) => {
    if (["hello", "menu"].includes(message?.trim().toLowerCase())) {
      actions?.categoriesList();
    } else {
      actions?.categoriesSelection({ name: message });
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
