import React from "react";
import { ENUM, useUITheme } from "../../updated_version/Context/themeContext";

function RegulatoryBOTChat() {
  const { theme } = useUITheme();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 1,
      }}
    >
      <style>
        {`
          df-messenger {
            
          --df-messenger-titlebar-background: var(--color-accent-rgba);
          --df-messenger-titlebar-font-color:white;
          --df-messenger-titlebar-border-bottom: 1px solid var(--color-accent-rgba);
          
          --df-messenger-input-box-focus-border: 1px solid var(--color-accent-rgba);
          --df-messenger-input-box-border: 1px solid var(--color-accent-rgba2);
          
          --df-messenger-send-icon-color-active:var(--color-accent-rgba2);
          --df-messenger-send-icon-color:var(--color-accent-rgba);
          --df-messenger-message-list:var(--color-input-light);
          --df-messenger-background:black;
          --df-messenger-message-bot-border:1px solid #dddddd;
          --df-messenger-message-bot-font-color:var(--color-accent);
          --df-messenger-chat-background : ${
            theme === ENUM.LIGHT
            ? "var( --color-light-bg)"
            : "var( --color-dark-bg)"};

            --df-messenger-message-user-background:var(--color-accent);
            --df-messenger-message-user-font-color:white;
            
            --df-messenger-chat-border:2px groove var(--color-accent-rgba2);
            --df-messenger-chat-scroll-button-background:white;     
          }

          df-messenger-chat-bubble {
            --df-messenger-bubble-color: #1a73e8;
            --df-messenger-bubble-font-color: white;
            --df-messenger-chat-bubble-border:1px solid var(--color-accent-rgba);
            --df-messenger-chat-bubble-icon-color:var(--color-accent-rgba);
              --df-messenger-chat-bubble-background : ${
              theme === ENUM.LIGHT
              ? "var( --color-input-light)"
              : "var( --color-input-dark)"};
            --df-messenger-chat-bubble-opacity:1
          }
            
        `}
      </style>
      <df-messenger
        project-id="moonlit-academy-420405"
        agent-id="a089aaa6-e669-4db8-b518-477c3f6cab17"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="RegulatoryChat" />
      </df-messenger>
    </div>
  );
}

export default RegulatoryBOTChat;
