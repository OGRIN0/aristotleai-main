import React, { createContext, useState } from "react";
import { characters } from "shortid";
import {
  MessageFrom,
  MessageGen,
} from "./component/genericChatModules/message.type";

const initialValue = {
  Rbacllm: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  Rbacllm_clone: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  AzureOpenAI: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  MosaicAI: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  finGpt: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  regulatoryBot: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  bankingBot: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  homeBrewn: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  finance: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  vertextAI: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  legalAI: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  HRAI: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  bedRockAI: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  gpt: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  hybrid: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  retail: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  mixtureOfExperts: {
    messages: new Array(),
    addNewMessage: () => {},
  },
  applicationState: {
    notification: {
      list: [],
      removeNotification: (id) => {},
    },
  },
  charactersAI: {
    JoeBiden: {
      messages: new Array(),
      addNewMessage: () => {},
      removeOne: () => {},
    },
    ElonMusk: {
      messages: new Array(),
      addNewMessage: () => {},
    },
    NarendraModi: {
      messages: new Array(),
      addNewMessage: () => {},
    },
    LeeHsienLoong: {
      messages: new Array(),
      addNewMessage: () => {},
    },
  },
  aristotleGenie: {
    messages: new Array(),
    addNewMessage: () => {},
  },
};

export const ChatContext = createContext(initialValue);

export const ChatProvider = ({ children }) => {
  const [rbacllmMessages, setRbacllmMessages] = useState([]);
  const [rbacllmCloneMessages, setRbacllmCloneMessages] = useState([]);
  const [azureOpenAIMessages, setAzureOpenAIMessages] = useState([]);
  const [mosaicAIMessages, setMosaicAIMessages] = useState([]);
  const [finMessages, setFinMessages] = useState([]);
  const [regulatorybotMessages, setRegulatoryMessages] = useState([]);
  const [bankingBotMessages, setBankingBotMessages] = useState([]);
  const [homeBrewnMessages, setHomeBrewnMessages] = useState([]);
  const [financeMessages, setFinanceMessages] = useState([]);
  const [vertexAIMessages, setVertextAIMessages] = useState([]);
  const [legalAIMessages, setLegalAIMessages] = useState([]);
  const [hrAIMessages, setHrAIMessages] = useState([]);
  const [bedRockAIMessages, setBedRockAIMessages] = useState([]);
  const [gptMessages, setGptMessages] = useState([]);
  const [hybridMessages, setHybridMessages] = useState([]);
  const [retailMessages, setRetailMessages] = useState([]);
  const [mixtureOfExpertsMessages, setmixtureOfExpertsMessages] = useState([]);
  const [notificationsList, setNotificationsList] = useState([
    {
      id: 1,
      message: "New comment on your post",
      severity: "",
      title: "Adrian",
      timestamp: new Date(),
    },
    {
      id: 2,
      message: "Your profile was viewed",
      severity: "",
      title: "Adrian",
      timestamp: new Date(),
    },
    {
      id: 3,
      message: "New friend request",
      severity: "",
      title: "Adrian",
      timestamp: new Date(),
    },
  ]);
  const [elonMuskMessages, setElonMuskMessages] = useState([]);
  const [joeBidenMessages, setJoeBidenMessages] = useState([]);
  const [narendraModiMessages, setnarendraModiMessages] = useState([]);
  const [leeHsienLoongMessages, setleeHsienLoongMessages] = useState([]);
  const [aristotleMessages, setAristotleMessages] = useState([]);

  const addNewrbacllmMessage = (message) =>
    setRbacllmMessages((prev) => [...prev, message]);
  const addNewrbacllmCloneMessage = (message) =>
    setRbacllmCloneMessages((prev) => [...prev, message]);
  const addNewAzureOpenAIMessage = (message) =>
    setAzureOpenAIMessages((prev) => [...prev, message]);
  const addNewMosaicAIMessage = (message) =>
    setMosaicAIMessages((prev) => [...prev, message]);
  const addNewFinMessages = (message) =>
    setFinMessages((prev) => [...prev, message]);
  const addNewRegulatoryBotMessages = (message) =>
    setRegulatoryMessages((prev) => [...prev, message]);
  const addNewBankingBotMessages = (message) =>
    setBankingBotMessages((prev) => [...prev, message]);
  const addNewHomeBrewnMessages = (message) =>
    setHomeBrewnMessages((prev) => [...prev, message]);
  const addNewFinanceMessages = (message) =>
    setFinanceMessages((prev) => [...prev, message]);
  const addNewVertextAIMessages = (message) =>
    setVertextAIMessages((prev) => [...prev, message]);
  const addNewLegalAIMessages = (message) =>
    setLegalAIMessages((prev) => [...prev, message]);
  const addNewHrAIMessages = (message) =>
    setHrAIMessages((prev) => [...prev, message]);
  const addNewBedRockAIMessages = (message) =>
    setBedRockAIMessages((prev) => [...prev, message]);
  const addNewGptMessages = (message) =>
    setGptMessages((prev) => [...prev, message]);
  const addNewHybridMessages = (message) =>
    setHybridMessages((prev) => [...prev, message]);
  const addNewRetailMessages = (message) =>
    setRetailMessages((prev) => [...prev, message]);
  const addNewMixtureOfExpertsMessages = (message) =>
    setmixtureOfExpertsMessages((prev) => [...prev, message]);
  const removeNotification = (id) => {
    setNotificationsList((prev) => [
      ...prev.filter((notification) => notification.id !== id),
    ]);
  };
  const addNewElonMuskMessages = (message) =>
    setElonMuskMessages((prev) => [...prev, message]);
  const addNewJoeBidenMessages = (message) =>
    setJoeBidenMessages((prev) => [...prev, message]);
  const addNewNarendraModiMessages = (message) =>
    setnarendraModiMessages((prev) => [...prev, message]);
  const addNewleeHsienLoongMessages = (message) =>
    setleeHsienLoongMessages((prev) => [...prev, message]);
  const addNewAristotleMessages = (message) =>
    setAristotleMessages((prev) => [...prev, message]);

  const handleRemoveOne = (name) => {
    switch (name) {
      case "JoeBiden":
        setJoeBidenMessages((prev) => [...prev.pop()]);
        break;
    }
  };

  console.log(joeBidenMessages, "JOE");

  return (
    <ChatContext.Provider
      value={{
        Rbacllm: {
          messages: rbacllmMessages,
          addNewMessage: addNewrbacllmMessage,
        },
        Rbacllm_clone: {
          messages: rbacllmCloneMessages,
          addNewMessage: addNewrbacllmCloneMessage,
        },
        AzureOpenAI: {
          messages: azureOpenAIMessages,
          addNewMessage: addNewAzureOpenAIMessage,
        },
        MosaicAI: {
          messages: mosaicAIMessages,
          addNewMessage: addNewMosaicAIMessage,
        },
        finGpt: {
          messages: finMessages,
          addNewMessage: addNewFinMessages,
        },
        regulatoryBot: {
          messages: regulatorybotMessages,
          addNewMessage: addNewRegulatoryBotMessages,
        },
        bankingBot: {
          messages: bankingBotMessages,
          addNewMessage: addNewBankingBotMessages,
        },
        homeBrewn: {
          messages: homeBrewnMessages,
          addNewMessage: addNewHomeBrewnMessages,
        },
        finance: {
          messages: financeMessages,
          addNewMessage: addNewFinanceMessages,
        },
        vertextAI: {
          messages: vertexAIMessages,
          addNewMessage: addNewVertextAIMessages,
        },
        legalAI: {
          messages: legalAIMessages,
          addNewMessage: addNewLegalAIMessages,
        },
        HRAI: {
          messages: hrAIMessages,
          addNewMessage: addNewHrAIMessages,
        },
        bedRockAI: {
          messages: bedRockAIMessages,
          addNewMessage: addNewBedRockAIMessages,
        },
        gpt: {
          messages: gptMessages,
          addNewMessage: addNewGptMessages,
        },
        hybrid: {
          messages: hybridMessages,
          addNewMessage: addNewHybridMessages,
        },
        retail: {
          messages: retailMessages,
          addNewMessage: addNewRetailMessages,
        },
        mixtureOfExperts: {
          messages: mixtureOfExpertsMessages,
          addNewMessage: addNewMixtureOfExpertsMessages,
        },
        applicationState: {
          notification: {
            list: notificationsList,
            removeNotification: removeNotification,
          },
        },
        charactersAI: {
          ElonMusk: {
            messages: elonMuskMessages,
            addNewMessage: addNewElonMuskMessages,
          },
          JoeBiden: {
            messages: joeBidenMessages,
            addNewMessage: addNewJoeBidenMessages,
            removeOne: handleRemoveOne,
          },
          NarendraModi: {
            messages: narendraModiMessages,
            addNewMessage: addNewNarendraModiMessages,
          },
          LeeHsienLoong: {
            messages: leeHsienLoongMessages,
            addNewMessage: addNewleeHsienLoongMessages,
          },
        },
        aristotleGenie: {
          messages: aristotleMessages,
          addNewMessage: addNewAristotleMessages,
        },
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
