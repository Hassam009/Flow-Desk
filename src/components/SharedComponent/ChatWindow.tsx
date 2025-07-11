import { format } from "date-fns";
import { Conversation } from "../SharedComponent/Types";
import clsx from "clsx";
import {
  Video,
  Phone,
  MoreVertical,
  Plus,
  Image,
  Paperclip,
  Send,
} from "lucide-react";

type Props = {
  conversation: Conversation;
};
import { useTheme } from "next-themes";
export default function ChatWindow({ conversation }: Props) {
  const { resolvedTheme } = useTheme();
  return (
    <div
      className="h-full flex flex-col overflow-y-auto  flex-end dark:bg-zinc-800 dark:text-white "
      style={{
        backgroundColor:
          resolvedTheme === "light" ? "oklch(0.968 0.007 247.896)" : undefined,
        boxShadow: "0 10px 15px -3px rgb(68 60 60 / 10%)",
      }}
    >
      <div className="flex items-center justify-between p-4 border-b dark:border-zinc-700">
        <div className="flex items-center gap-3">
          <img
            src={conversation.profile}
            className="w-10 h-10 rounded-full"
            alt={conversation.fullName}
          />
          <div>
            <p className="font-semibold dark:bg-zinc-800 dark:text-white">
              {conversation.fullName}
            </p>
            <p className="text-sm text-gray-500 dark:bg-zinc-800 dark:text-white">
              {conversation.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-zinc-500">
          <Video className="w-5 h-5 cursor-pointer" />
          <Phone className="w-5 h-5 cursor-pointer" />
          <MoreVertical className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50 dark:bg-zinc-900">
        {conversation.messages
          .slice()
          .reverse()
          .map((msg, idx) => {
            const isUser = msg.sender === "You";

            return (
              <div
                key={idx}
                className={clsx(
                  "flex items-end",
                  isUser ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={clsx(
                    "max-w-[75%] p-3 rounded-lg shadow text-sm",
                    isUser
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-100 rounded-bl-none"
                  )}
                >
                  <p className="mb-1 whitespace-pre-line">{msg.message}</p>
                  <p className="text-xs text-right text-gray-400">
                    {format(new Date(msg.timestamp), "p")}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className=" shrink-0 p-4 border-t flex items-center gap-2 dark:bg-zinc-800 dark:text-white">
        <Plus className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
        <Image className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
        <Paperclip className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 rounded border dark:bg-zinc-800 dark:text-white"
        />
        <Send className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
}
