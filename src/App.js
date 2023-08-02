import Chatbot from "react-chatbot-kit";
import Config from "./chatBot/config";
import MessageParser from "./chatBot/MessageParser";
import ActionProvider from "./chatBot/ActionProvider";
import "react-chatbot-kit/build/main.css";

function App({ onChangeUrl }) {
  return (
    <div style={{ position: "absolute", right: 14, bottom: 0 }}>
      <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={(props) => (
          <ActionProvider {...props} onChangeUrl={onChangeUrl} />
        )}
      />
    </div>
  );
}

export default App;
