import React from "react";

import "./Chat.css";
import Card from "../UI/Card";

const Chat = () => {
  return (
    <Card className="Card__Chat flex__column">
      <h2 className="h2__title">Chat Channel</h2>
      <div id="messageContainer"></div>
      <form id="messageInputs" className="flex_row space_between"></form>
    </Card>
  );
};

export default Chat;
