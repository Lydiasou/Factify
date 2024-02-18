import React from 'react';
import '../src/app/globals.scss';

interface NotificationProps {
  date: string;
  content: string;
  avatarSrc: string;
}

const Notification: React.FC<NotificationProps> = ({ date, content, avatarSrc }) => {
  return (
    <div className="notification">
      <img src={avatarSrc} className="avatar-large" />
      <div className="notification-content">
        <p><small>{date}</small></p>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <div className="notification-actions">
        <a href="#">Edit <i className="fas fa-pencil-alt"></i></a>
        <a href="#">Delete <i className="far fa-trash-alt"></i></a>
      </div>
    </div>
  );
};

export default Notification;
