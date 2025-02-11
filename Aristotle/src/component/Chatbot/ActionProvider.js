// ActionProvider.js
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('How can I help you ?');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Add a new function for handling another command
  const handleGreeting = () => {
    const botMessage = createChatBotMessage('Have a nice day !');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlesum = () => {
    const botMessage = createChatBotMessage('the answer is 4');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
    const handleDefault = () => {
    const botMessage = createChatBotMessage('Ok');

    setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
    }));
};


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleGreeting,
            handleDefault

          },
        });
      })}
    </div>
  );
};

export default ActionProvider;