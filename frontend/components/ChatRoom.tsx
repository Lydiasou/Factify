import React, { useState, useEffect } from 'react';
import Box from '../components/Box';
import  Button from '../components/Button';
import Avatar from '../components/Avatar';
import '../src/app/globals.scss';
import FlexContent, { FlexContentAlignment, FlexContentDirection, FlexContentSpacing } from './FlexContent';
import { PostText2, PostText3, PostText4, PostText5 } from '../src/app/data/PostText';
import { useNavigate } from 'react-router-dom';

const ChatRoom: React.FC = () => {


  const defaultMessages = [
    { author: PostText2.USER_NAME, content: PostText2.USER_POST },
    { author: PostText3.USER_NAME, content: PostText3.USER_POST },
    { author: PostText4.USER_NAME, content: PostText4.USER_POST }
  ];

  const getAvatarPath = (author: string) => {
    switch (author) {
      case "JohnDoe123":
        return "/images/avatar2.png";
      case "Alice456":
        return "/images/avatar1.png";
      case "Emily789":
        return "/images/avatar1.png";
      case "David101":
        return "/images/avatar2.png";
      case "Sophia222":
        return "/images/avatar1.png";
      default:
        return "/images/avatar1.png"; // Par défaut, l'avatar 1 est utilisé
    }
  };

  const [messages, setMessages] = useState<{ author: string; content: string }[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else {
      setMessages(defaultMessages);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newMessage = { author: name, content: comment };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    localStorage.setItem('chatMessages', JSON.stringify([...messages, newMessage]));
  };

  const handleRefresh = () => {
    localStorage.removeItem('chatMessages');
    setMessages([]);
  };

  return (
    <div className="chatroom">
      <h3>Partagez votre vision</h3>
        <form onSubmit={handleSubmit}>
          <FlexContent direction={FlexContentDirection.ROW} spacing={FlexContentSpacing.LARGE_PLUS}>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Pseudo"
              required
            />
            <input
              type="text"
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Message"
              required
            />
          </FlexContent>
          <button className="btn" onClick={handleSubmit}>Poster</button>
        </form>
        <ul id="messages">
          {messages.map((message, index) => (
            <li key={index}>
               <Box
              productName={message.author}
              productDescription={message.content}
              avatarUrl={getAvatarPath(message.author)}
            />
            </li>
          ))}
        </ul>
        <button className="btn" onClick={handleRefresh}>Nettoyer</button>

    </div>
  );
};

export default ChatRoom;
