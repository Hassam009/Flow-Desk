import { Input } from "@/components/ui/input";
import { Conversation } from "../SharedComponent/Types"; // adjust if needed

type Props = {
  conversations: Conversation[];
  onSelectChat: (id: string) => void;
};

export default function ChatSidebar({ conversations, onSelectChat }: Props) {
  return (
    <div className=" py-4 px-2 space-y-4 bg-white dark:bg-zinc-800">
      <h2 className="text-xl font-bold">Inbox</h2>
      <div className="sticky top-0 z-10 bg-white dark:bg-zinc-800 pb-2">
        <Input placeholder="Search chat..." />
      </div>
      <div className="max-h-[65vh] overflow-y-auto">
  <div className="mt-4 space-y-2 bg-white dark:bg-zinc-800">
    {conversations.map((chat) => {
      const lastMsg = chat.messages[0];

      return (
        <div
          key={chat.id}
          onClick={() => onSelectChat(chat.id)}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer flex items-start gap-2"
        >
          <img src={chat.profile} className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <p className="font-medium">{chat.fullName}</p>
            <p className="text-sm text-gray-500 truncate max-w-[200px]">
              {lastMsg?.sender === "You" ? "You: " : `${lastMsg?.sender}: `}
              {lastMsg?.message}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>

   
    </div>
  );
}
