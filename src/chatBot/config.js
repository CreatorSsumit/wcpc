// in the config
import React from "react";
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import QuestionList from "./QuestionList";
import { faqQuestion } from "./faqQuestion";

const botName = "Wayne";

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

  state: { faqQuestion, selectedCategories: "" },
  widgets: [
    {
      widgetName: "getAllQuestions",
      widgetFunc: (props) => <QuestionList {...props} />,
    },
  ],
  initialMessages: [
    createChatBotMessage(`"Hi, I'm ${botName}. How can I assist you today?"`),
  ],
};

export default config;
