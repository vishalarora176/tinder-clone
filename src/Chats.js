import React from 'react'
import Chat from './Chat';

import './Chats.css';
const Chats = () => {
  return (
    <div>
      <Chat 
        name='Jennifer'
        message='Yo! Whats up 🙂'
        timeStamp='35 minutes ago'
        profilePic='https://media1.popsugar-assets.com/files/thumbor/ptdgPx5tCvvD9kUsU7pQFMUkBIA/207x134:1865x1792/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/028/n/1922398/066318895d76e2ef0c31d8.46065434_/i/Jennifer-Aniston.jpg'
      />      
      <Chat 
        name='Ellen'
        message='Hey, How are you?'
        timeStamp='58 minutes ago'
        profilePic='https://www.usmagazine.com/wp-content/uploads/2021/01/Ellen-DeGeneres-Most-Controversial-Moments-Over-the-Years.jpg'
      />      
      <Chat 
        name='Sandra'
        message='Ola!'
        timeStamp='3 days ago'
        profilePic='https://media1.popsugar-assets.com/files/thumbor/fshWrSj1K4d74mMVlkHV7VBrX9o/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/12/19/887/n/1922153/526215f35c1aa7736841f5.28696822_/i/Sandra-Bullock-Quotes-About-Her-Haircut-Today-Show-2018.jpg'
      />      
      <Chat 
        name='Natasha'
        message='I missed you 💝 '
        timeStamp='1 week ago'
        profilePic='...'
      />      
    </div>
  )
}

export default Chats;
