import React from 'react';

const botcomponent = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <iframe
                    title="Streamlit Chatbot"
                    src="https://30days.streamlit.app/?embed=true"
                    width="100%"
                    height="900px"
                    //allow="fullscreen"
                    style={{ border: 'none' }}  // Optional: Remove iframe border
                />
            </div>
    );
};

export default botcomponent;