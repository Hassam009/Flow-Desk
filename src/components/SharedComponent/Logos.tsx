import { JSX } from "react";
import {
  Github,
  Gitlab,
  Figma,
  Slack,
  Mail,
  Book,
  FileText,
  Phone,
  Dock,
  MessageCircle,
  CreditCard,
  Send,
} from "lucide-react";

export const logos: Record<string, JSX.Element> = {
  Discord: <MessageCircle className="w-6 h-6" />, // substitute
  Docker: <Dock className="w-6 h-6" />, // closest match
  Figma: <Figma className="w-6 h-6" />,
  GitHub: <Github className="w-6 h-6" />,
  GitLab: <Gitlab className="w-6 h-6" />,
  Gmail: <Mail className="w-6 h-6" />,
  Medium: <Book className="w-6 h-6" />, // substitute
  Notion: <FileText className="w-6 h-6" />, // substitute
  Skype: <Phone className="w-6 h-6" />, // substitute
  Slack: <Slack className="w-6 h-6" />,
  Stripe: <CreditCard className="w-6 h-6" />, // substitute
  Telegram: <Send className="w-6 h-6" />,
};
