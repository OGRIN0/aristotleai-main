// config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import CustomHeader from './CustomHeader'; // Import the custom header
import ChatWrapper from './ChatWrapper'; // Import the custom wrapper component

const botName = 'Aristotle Genie';

const BotMessage = (props) => (
  <ChatWrapper isBotMessage>
    {props.message.message}
  </ChatWrapper>
);

const UserMessage = (props) => (
  <ChatWrapper>
    {props.message.message}
  </ChatWrapper>
);

const config = {
  botName: botName,
  customComponents: {
    header: () => <CustomHeader botName={botName} />,
    botMessageBox: BotMessage,
    userMessageBox: UserMessage,
  },
  initialMessages: [
    createChatBotMessage(`👋 Hi ! I am ${botName}`, {
      formatOptions: {
        fontFamily: 'Quattrocento Sans, sans-serif',
        backgroundColor: '#06232e', // Bot message background color
      },
    }),
    createChatBotMessage(`How can I assist you today?`),
  createChatBotMessage(`Feel free to ask me anything!`),
  // Add more messages as needed
],
    
  
  customStyles: {
    botMessageBox: {
      backgroundColor: "#06232e",
    },
    chatButton: {
      backgroundColor: "#06232e",
    },
    userChatMessage: {
      backgroundColor: "black",
      color:'white',
      borderRadius: '8px', // Set the user message background color
    },
    
  },
  widgets: [],
};

export default config;