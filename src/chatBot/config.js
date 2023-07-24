// in the config
import React from "react";
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import Categories from "./Categories";
import FilterQuestion from "./categories/filterQuestion";
import { questionList } from "./questionsList";
import FilterAnswer from "./categories/filterAnswer";

const botName = "DocsBot";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },

  state: { ...questionList, selectedCategories: "" },
  widgets: [
    {
      widgetName: "categories",
      widgetFunc: (props) => <Categories {...props} />,
    },
    {
      widgetName: "filterQuestion",
      widgetFunc: (props) => <FilterQuestion {...props} />,
    },
    {
      widgetName: "filterAnswer",
      widgetFunc: (props) => <FilterAnswer {...props} />,
    },
  ],
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}. I’m here to help you .`),
    createChatBotMessage(`Please Look into our categories for better help .`, {
      widget: "categories",
    }),
  ],
};

export default config;
