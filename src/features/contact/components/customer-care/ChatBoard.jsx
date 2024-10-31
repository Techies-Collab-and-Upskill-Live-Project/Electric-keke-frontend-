import RegularList from "@/components/_design-patterns/RegularList";
import { ChatBox } from "./ChatBox";

const ChatBoard = ({ conversations }) => {
  return (
    <div className="flex-1 w-full px-2 overflow-hidden overflow-y-scroll no-scrollbar">
      <RegularList
        list={conversations}
        component={ChatBox}
        keyExtractor={conversations.map((item) => item.messages)}
      />
    </div>
  );
};

export default ChatBoard;
