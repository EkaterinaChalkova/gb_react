import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import InputComponent from "./inputComponent";
import MessageComponent from "./messageComponent";

function App() {
  // для хранения текста из input
  const [inputMessage, setInputMessage] = useState("");

  const [messageArray, setMessagesArray] = useState([]);

  // const now = new Date();
  const onSendMessage = () => {
    setMessagesArray((prev) => [
      ...prev,
      { text: inputMessage, author: "Kate" },
    ]);

    // чтобы обновлялось поле, после отправки
    setInputMessage(" ");
  };

  useEffect(() => {
    if (messageArray.length > 0) {
      if (messageArray.slice(-1)[0].author !== "Robot") {
        setTimeout(
          () =>
            setMessagesArray((prev) => [
              ...prev,
              {
                text: "Сообщение отправлено",
                author: "Robot",
              },
            ]),
          1500
        );
      }
    }
  }, [messageArray]);

  return (
    <div className="mainWrapper">
      {/* <div className="messageList">
        {messageArray.map((message, i) => (<div key={i}>{message}</div>))}
      
      </div> */}

      <MessageComponent messageArray={messageArray} />

      <div>
        {/* <input 
        className='input' 
        value ={inputMessage} 
        onChange={(e) => setInputMessage(e.target.value)} 
        onKeyDown ={({key}) =>{
          if (key ==='Enter') {
          
            onSendMessage();
          }
        }}
        />
        {/* <button onClick={onSendMessage}>Отправить</button>
         */}
        <InputComponent
          value={inputMessage}
          onChange={setInputMessage}
          onClick={onSendMessage}
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              onSendMessage();
            }
          }}
        />
      </div>
    </div>
  );
}
export default App;
