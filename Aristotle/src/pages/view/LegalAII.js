
// import React, { useRef, useState, useEffect, Component } from 'react';
// import {
//     ChatHeader,
//     ChatContainer,
//     ChatInput
// } from '../../component/ChatRoom';
// import AdminLayout from '../../component/AdminLayout';
// import ApiService  from '../../service/Api.service';
// import Chat from "../../component/Chatbot/Chat"
// export default function ChatRoom() {
//     // TODO: Implement Redux and improve theme
//     const [data, setData] = useState([])
//     const inputref = useRef(null);


//     const handleInputSubmit = async (e) => {
//         e.preventDefault();
//         console.log(inputref.current.value)
//         if (inputref.current.value === "")
//             return
//         var data = inputref.current.value
//         setData(cr => [
//             ...cr,
//             {
//                 from: "user",
//                 message: data,
//             } 
//         ])

//        let gaiRes = await ApiService.httpGet('/gai/chat?q='+data)

//         setData(cr => [
//             ...cr, 
//             {
//                 from: "llm",
//               message: gaiRes
//             }
//         ])
//         inputref.current.value = "";
//     }

//     const bottomref = useRef(null);
//     useEffect(() => {
//         bottomref.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [data]);

//     //TODO add a fab to scroll up to the top
//     return (

//         <div>
//     <div>
//         <div className="tw-w-full tw-h-[100vh] tw-relative tw-flex tw-flex-col">
//           <div className="tw-flex tw-flex-col tw-min-h-[100vh] tw-overflow-y-auto tw-pb-32 tw-scrollbar-thin tw-scrollbar-thumb-gray-600 tw-scrollbar-track-theme-black tw-scrollbar-thumb-rounded-md">
//           <div className="tw-text-quattrocento-sans">
            
//             <ChatHeader initial_model="LEGAL AI  " />
//           </div>
//             <ChatContainer
//               chatdata={data}
//               image="https://static.wixstatic.com/media/4f187b_1613ecfd7d8d41dab1b2f23fb80b5e07%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4f187b_1613ecfd7d8d41dab1b2f23fb80b5e07%7Emv2.png"
//             />

//             <div ref={bottomref} />
//           </div>
//           <ChatInput
//             input={inputref}
//             handleSubmit={handleInputSubmit}
//             style={{ color: "white" }}
//           />
//         </div>
//     </div>
//     <div>
//       <Chat/>
//     </div>
//    </div>
//   );
// }
import React from 'react';

const ChatbotComponent = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <iframe
                title="Streamlit Chatbot"
                src="http://54.87.189.202:8501/"
                width="100%"
                height="900px"
                style={{ border: 'none' }}  // Optional: Remove iframe border
            />
        </div>
    );
};

export default ChatbotComponent;

// import React from 'react';

// const ChatbotComponent = () => {
//     return (
//         <div>
//             <iframe
//             title="Streamlit Chatbot"
//             src="http://54.209.227.48:8501/"
//             width="100%"
//             height="900px"
//             allow="fullscreen"
//         />
//         </div>
//     );
// };

// export default ChatbotComponent;