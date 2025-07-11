import { useState } from "react";
import ChatSidebar from "@/components/SharedComponent/ChatSidebar";
import ChatWindow from "@/components/SharedComponent/ChatWindow";
import rawData from "@/Data/ChatData.json";
import { MessageCircle } from "lucide-react";

const chatData = rawData as any;

export default function ChatPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedConversation = chatData.conversations.find(
    (conv: any) => conv.id === selectedId
  );

  return (
    <div className="flex h-[90vh] min-h-full bg-white dark:bg-zinc-800">
      <div className="w-[300px] border-r h-full overflow-y-auto min-h-0">
        <ChatSidebar
          conversations={chatData.conversations}
          onSelectChat={(id) => setSelectedId(id)}
        />
      </div>

      <div className="flex-1 h-[89vh] overflow-y-auto h-full min-h-0">
        {selectedConversation ? (
          <ChatWindow conversation={selectedConversation} />
        ) : (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
            <MessageCircle className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Your messages
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Select a chat to start messaging.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
