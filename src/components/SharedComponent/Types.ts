export type Message = {
    sender: string;
    message: string;
    timestamp: string;
  };
  
  export type Conversation = {
    id: string;
    profile: string;
    username: string;
    fullName: string;
    title: string;
    messages: Message[];
  };
  
  export type ChatData = {
    conversations: Conversation[];
  };
  