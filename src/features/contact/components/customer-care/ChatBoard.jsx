import RegularList from "@/components/_design-patterns/RegularList";

const ChatBoard = ({
  conversations,
  chatBoardComponent: ChatBoardComponent,
  extractKeys,
}) => {
  return (
    <div className="flex-1 w-full px-2 overflow-hidden overflow-y-scroll no-scrollbar">
      <RegularList
        list={conversations}
        // component={ChatBox}
        component={ChatBoardComponent}
        // keyExtractor={conversations.map((item) => item.messages)}
        keyExtractor={extractKeys(conversations) || []}
      />
    </div>
  );
};

export default ChatBoard;
