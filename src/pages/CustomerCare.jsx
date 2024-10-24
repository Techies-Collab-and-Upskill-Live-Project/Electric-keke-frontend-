import { ChatBoard, Messaging } from "@/features/contact";
import Heading from "@/components/Heading";
import Btn from "@/components/btn/Btn";
import { ArrowLeft } from "lucide-react";
import TypingBoard from "@/features/contact/components/TypingBoard";
import { goBack } from "@/utils/goBack";
import { Section } from "@/layouts";
import { useSocket } from "@/hooks/useSocket";

const CustomerCare = () => {
  const socket = useSocket('/ws/support');
  console.log(socket);
  return (
    <Section darkLogo={true} mobileHeaderStyle="mobile-header">
      <div className="home-pad py-5 md:pt-[145px]">
        <div className="flex items-start gap-x-3">
          <Btn
            icon={<ArrowLeft color="black" size={24} />}
            styling="size-6 bg-transparent p-0"
            onClick={goBack}
          />

          <Heading
            title="Help & Support Center"
            tclass="font-bold text-xl md:text-[2rem] font-josefin"
            description="Customer Sevice"
            dclass="text-sm md:text-base mt-1"
          />
        </div>

        <div className="border py-8">
          <ChatBoard />
          <TypingBoard styling="h-[84px] mt-5 flex-center px-6 py-4" />
        </div>
      </div>
    </Section>
  );
};

export default CustomerCare;
