import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { text: 'Hi, how can I assist you?', isUser: false },
  ]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // const handleSend = async () => {
  //   if (inputText.trim() === '') return;

  //   // Adding user message to chat history
  //   setChatHistory((prevHistory) => [
  //     ...prevHistory,
  //     { text: inputText, isUser: true },
  //     { text: 'Bot response goes here...', isUser: false },
  //   ]);

  //   // Sending user input to the FastAPI backend
  //   try {
  //     const response = await fetch('http://localhost:8000/process_input/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ text: inputText }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       // Adding bot response to chat history
  //       setChatHistory((prevHistory) => [
  //         ...prevHistory,
  //         { text: data.response, isUser: false },
  //       ]);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }

  //   setInputText('');
  // };

  // const handleSend = async () => {
  //   if (inputText.trim() === '') return;
  
  //   // Adding user message to chat history
  //   setChatHistory((prevHistory) => [
  //     ...prevHistory,
  //     { text: inputText, isUser: true },
  //     { text: 'Sending query...', isUser: false }, 
  //   ]);
  
  //   // Sending user input to the FastAPI backend
  //   try {
  //     const response = await fetch('http://localhost:8000/process_input/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ text: inputText }),
  //     });
      
  //     if (response.ok) {
  //       const data = await response.json();
  //       // Updating the temporary message with the actual query
  //       const updatedHistory = [...chatHistory];
  //       updatedHistory.splice(-1, 1, { text: data.query, isUser: false });
  
        
  //       updatedHistory.push({ text: data.inputText, isUser: false });
  
  //       setChatHistory(updatedHistory);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  
  //   setInputText('');
  // };

  const handleSend = async () => {
    if (inputText.trim() === '') return;
  
    // Adding user message to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: inputText, isUser: true },
    ]);
  
    // Sending user input to the FastAPI backend
    try {
      const response = await fetch('http://localhost:8000/process_input/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Adding bot response to chat history
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { text: data.responseText, isUser: false },
        ]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    setInputText('');
  };
  
  return (
    <div className="App">
      <h1>Silver Chatbot</h1>
      
      <div className="chat-container">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
