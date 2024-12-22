import { useState, FormEvent, useEffect, useCallback } from "react";
import { JoinChat } from "./components/join-chat";
import { ChatRoom } from "./components/chat-room";
import io from "socket.io-client";
import { debounce } from "lodash";


const socket = io("http://localhost:3000");

export interface Message {
  by: string;
  text: string;
}

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [messageInputValue, setMessageInputValue] = useState<string>("");
  const [messagesByRoom, setMessagesByRoom] = useState<{ [key: string]: Message[] }>({
    General: [],
    Sports: [],
    Movies: [],
    Studying: [],
  });
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsername, setTypingUsername] = useState("");
  const [currRoom, setCurrRoom] = useState("General");

  useEffect(() => {
    if (isJoined) {
      socket.emit("join-room", currRoom);

      socket.on("message", (message) => {
        setMessagesByRoom((prev) => ({
          ...prev,
          [currRoom]: [...prev[currRoom], message],
        }));
      });

      socket.on("previous-messages", (messages) => {
        setMessagesByRoom((prev) => ({
          ...prev,
          [currRoom]: messages,
        }));
      });

      socket.on("user-typing-message", (typingUsername) => {
        setIsTyping(true);
        setTypingUsername(typingUsername);
      });
      socket.on("stop-typing-message", () => {
        setIsTyping(false);
        setTypingUsername("");
      });

      return () => {
        socket.off("message");
        socket.off("user-typing-message");
        socket.off("stop-typing-message");
        socket.off("previous-messages");
      };
    }
  }, [isJoined, currRoom]);

  function join(e: FormEvent) {
    e.preventDefault();
    if (username) {
      socket.emit("join", username);
      setIsJoined(true);
    }
  }

  function handleRoomChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newRoom = e.target.value;
    socket.emit("leave-room", currRoom);
    setCurrRoom(newRoom);
  }

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (messageInputValue) {
      socket.emit("message", messageInputValue);
      setMessageInputValue("");
      socket.emit("stop-typing-message");
    }
  }

  function onMessageInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    socket.emit("user-typing-message");
    setMessageInputValue(e.target.value);
    debouncedTyping();
  }

  const debouncedTyping = useCallback(
    debounce(() => {
      socket.emit("stop-typing-message");
    }, 500),
    [currRoom, username]
  );

  return (
    <div className="h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="min-w-96 text-slate-950 bg-slate-50 p-4 rounded-xl">
        {!isJoined ? (
          <JoinChat username={username} setUsername={setUsername} join={join} />
        ) : (
          <div className="flex flex-col gap-5">
            <select className="self-center" value={currRoom} onChange={handleRoomChange}>
              <option value="General">General</option>
              <option value="Sports">Sports</option>
              <option value="Movies">Movies</option>
              <option value="Studying">Studying</option>
            </select>
            <ChatRoom
              chatName={currRoom}
              username={username}
              messages={messagesByRoom[currRoom]}
              messageInputValue={messageInputValue}
              onMessageInputChange={onMessageInputChange}
              sendMessage={sendMessage}
            />
          </div>
        )}
      </div>
      {isTyping ? `${typingUsername} is typing...` : null}
    </div>
  );
}
