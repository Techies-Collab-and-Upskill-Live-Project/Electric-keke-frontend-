import RegularList from "@/components/_design-patterns/RegularList";
import { useEffect, useRef } from "react";

const ChatBoard = ({
  conversations,
  chatBoardComponent: ChatBoardComponent,
  extractKeys = () => [],
}) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    element.scrollTo(0, element.scrollHeight);
  }, [conversations]);

  return (
    <div
      className="flex-1 w-full px-2 overflow-y-scroll no-scrollbar"
      ref={ref}
    >
      <RegularList
        list={conversations}
        // component={ChatBox}
        component={ChatBoardComponent}
        // keyExtractor={conversations.map((item) => item.messages)}
        keyExtractor={extractKeys(conversations)}
      />
    </div>
  );
};

export default ChatBoard;
