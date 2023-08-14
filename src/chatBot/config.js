// in the config
import React from "react";
import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import { AiOutlineMinusCircle } from "react-icons/ai";
import QuestionList from "./QuestionList";
import { faqQuestion } from "./faqQuestion";
import AnswerList from "./AnswerList";

const botName = "Wayne";

const hideChatBox = () => {
  window.parent.postMessage("hide_chatBot", "*");
};

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#235789",
    },
    chatButton: {
      backgroundColor: "#235789",
    },
  },

  state: { faqQuestion, selectedCategories: "" },
  widgets: [
    {
      widgetName: "getAllQuestions",
      widgetFunc: (props) => <QuestionList {...props} />,
    },
    {
      widgetName: "getAllAnswer",
      widgetFunc: (props) => <AnswerList {...props} />,
    },
  ],
  initialMessages: [
    createChatBotMessage(`"Hi, I'm ${botName}. How can I assist you today?"`),
  ],
  customComponents: {
    header: () => (
      <div className="chatHeader">
        Conversation with {botName}
        <AiOutlineMinusCircle
          className="chatBotHeaderIcon"
          onClick={hideChatBox}
        />
      </div>
    ),
  },
};

export default config;
