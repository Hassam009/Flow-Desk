type Message = {
    sender: string;
    message: string;
    timestamp: string;
  };
  
  type Conversation = {
    id: string;
    profile: string;
    username: string;
    fullName: string;
    title: string;
    messages: Message[];
  };
  
  type ChatData = {
    conversations: Conversation[];
  };
  