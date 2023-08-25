import Chatbot from "react-chatbot-kit";
import Config from "./chatBot/config";
import MessageParser from "./chatBot/MessageParser";
import ActionProvider from "./chatBot/ActionProvider";
import "react-chatbot-kit/build/main.css";

function App() {
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <Chatbot
      config={Config}
      messageParser={MessageParser}
      actionProvider={(props) => (
        <ActionProvider {...props} saveMessages={saveMessages} />
      )}
      messageHistory={loadMessages()}
      saveMessages={saveMessages}
    />
  );
}

export default App;
