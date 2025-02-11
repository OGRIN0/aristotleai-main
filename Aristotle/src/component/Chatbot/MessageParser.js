
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    } else if (message.includes('bye')) {
      actions.handleGreeting();
      
    } else if (message.includes('2 + 2')) {
      actions.handlesum();

    } 
    
    else {
        // If no specific condition is met, handle with a default action
        actions.handleDefault();
      }

    
    // Add more conditions for handling other commands or messages

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
