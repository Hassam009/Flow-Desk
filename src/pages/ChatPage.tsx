import { useState, useEffect } from "react";
import ChatSidebar from "@/components/SharedComponent/ChatSidebar";
import ChatWindow from "@/components/SharedComponent/ChatWindow";
import rawData from "@/Data/ChatData.json";
import { MessageCircle, ArrowLeft } from "lucide-react";

const chatData = rawData as any;

export default function ChatPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const selectedConversation = chatData.conversations.find(
    (conv: any) => conv.id === selectedId
  );

  // Handle screen resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile(); // initial check

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const showSidebar = isMobile ? selectedId === null : true;
  const showChatWindow = isMobile ? selectedId !== null : true;

  return (
    <div className="flex h-[90vh] min-h-full bg-white dark:bg-zinc-800">
      {showSidebar && (
        <div className={`w-full sm:w-[300px] border-r h-full overflow-y-auto min-h-0`}>
          <ChatSidebar
            conversations={chatData.conversations}
            onSelectChat={(id) => setSelectedId(id)}
          />
        </div>
      )}

      {showChatWindow && (
        <div className="flex flex-1 overflow-y-auto h-full min-h-0">
          {selectedConversation ? (
            <div className="w-full relative">
              {/* Mobile-only Back Button */}
              {isMobile && (
                <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 left-4 z-10 bg-gray-100 dark:bg-zinc-700 p-2 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              )}
              <ChatWindow conversation={selectedConversation} />
            </div>
          ) : (
            !isMobile && (
              <div className="h-full w-full flex flex-col items-center justify-center text-center text-gray-500">
                <MessageCircle className="w-12 h-12 mb-4" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Your messages
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Select a chat to start messaging.
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
