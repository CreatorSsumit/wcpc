import Chatbot from "react-chatbot-kit";
import Config from "./chatBot/config";
import MessageParser from "./chatBot/MessageParser";
import ActionProvider from "./chatBot/ActionProvider";
import "react-chatbot-kit/build/main.css";

function App() {
  return (
    <Chatbot
      config={Config}
      messageParser={MessageParser}
      actionProvider={(props) => <ActionProvider {...props} />}
    />
  );
}

export default App;
