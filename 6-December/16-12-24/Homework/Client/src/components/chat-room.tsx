import { FormEvent } from "react";
import { Message } from "../App";
import { MessageList } from "./message-item";
import { AddMessageForm } from "./add-message-form";

interface ChatRoomProps {
  chatName: string;
  username: string;
  messages: Message[];
  messageInputValue: string;
  onMessageInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendMessage: (e: FormEvent) => void;
}

export function ChatRoom({
  chatName,
  username,
  messages,
  messageInputValue,
  onMessageInputChange,
  sendMessage,
}: ChatRoomProps) {
  return (
    <div>
      <div className="text-xl font-bold border-b-2 pb-2 mb-4 flex gap-5 justify-between">
        <h1>Chat Room - {chatName}</h1>
        <span>{username}</span>
      </div>

      <MessageList
        messages={messages}
        username={username}
      />

      <AddMessageForm
        messageInputValue={messageInputValue}
        onMessageInputChange={onMessageInputChange}
        sendMessage={sendMessage}
      />
    </div>
  );
}
