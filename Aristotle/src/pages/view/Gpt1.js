
import React, { useRef, useState, useEffect, Component } from 'react';
import {
  ChatHeader,
  ChatContainer,
  ChatInput
} from '../../component/ChatRoom';
import AdminLayout from '../../component/AdminLayout';

export default function ChatRoom() {
  // TODO: Implement Redux and improve theme
  const [data, setData] = useState([])

  const inputref = useRef(null);
  const handleInputSubmit = (e) => {
      e.preventDefault();
      console.log(inputref.current.value)
      if (inputref.current.value === "")
          return
      var data = inputref.current.value
      setData(cr => [
          ...cr,
          {
              from: "user",
              message: data,
          },
          {
              from: "llm",
              message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
      ])
      inputref.current.value = "";
  }

  const bottomref = useRef(null);
  useEffect(() => {
      bottomref.current?.scrollIntoView({behavior: 'smooth'});
    }, [data]);
  
    //TODO add a fab to scroll up to the top
  return (
      <div className='tw-w-full tw-h-[100vh] tw-relative tw-flex tw-flex-col'>
          <div className='tw-flex tw-flex-col tw-min-h-[100vh] tw-overflow-y-auto tw-pb-32 tw-scrollbar-thin tw-scrollbar-thumb-gray-600 tw-scrollbar-track-theme-black tw-scrollbar-thumb-rounded-md'>
              <ChatHeader
                  initial_model="model-v0.1"
              />
              <ChatContainer chatdata={data} />

          <div ref={bottomref} />
          </div>
          <ChatInput
              input={inputref}
              handleSubmit={handleInputSubmit}
          />
      </div>
  )
}
