import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';

import './ChatScreen.css';

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: 'https://www.usmagazine.com/wp-content/uploads/2021/01/Ellen-DeGeneres-Most-Controversial-Moments-Over-the-Years.jpg',
      message: 'Hey !!'
    },
    {
      name: 'Ellen',
      image: 'https://www.usmagazine.com/wp-content/uploads/2021/01/Ellen-DeGeneres-Most-Controversial-Moments-Over-the-Years.jpg',
      message: 'Whats up 💙 '
    },
    {
      message: 'Hey Ellen...Hows it going?'
    }
  ]);

  const handleSend = event => {
    event.preventDefault();
    setMessages([...messages, {message: input}]);
    setInput('');
  }

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>YOU MATCHED WITH ELLEN ON 09/11/2019</p>
      {
        messages.map(message => {
          const myMessage = !message.name ? true : false;
          const messageClasses = myMessage ? 'chatScreen__message chatScreen__message-user' : 'chatScreen__message';
          return (
            <div className={messageClasses}>
              {
                !myMessage && <Avatar
                  className='chatScreen__avatar'
                  alt={message.name}
                  src={message.image}
                />
              }
              <p>{message.message}</p>
            </div>
          )
        })
      }
      <form action="" className='chatScreen__input'>
        <input 
          value={input}
          type="text" 
          placeholder='Type a message' 
          className='chatScreen__input-field' 
          onChange={e => setInput(e.target.value)}
        />
        <button className='chatScreen__input-button' onClick={handleSend}>SEND</button>
      </form>
    </div>
  )
}

export default ChatScreen;
