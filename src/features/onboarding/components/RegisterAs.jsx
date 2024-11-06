import Heading from "@/components/Heading";
import { Link, useNavigate } from "react-router-dom";
import RegisterAsLink from "./RegisterAsLink";
import { addItemToLs, clearLs } from "@/utils/ls";
import RegularList from "@/components/_design-patterns/RegularList";
import { account_types } from "../constants";
import { ArrowLeftCircle } from "lucide-react";
import { Btn } from "@/components";

const RegisterAs = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    addItemToLs("onboarding-process", 0);
  };

  return (
    <div className="board__register">
      <div className="flex-spread">
        <Btn
          icon={<ArrowLeftCircle color="black" size={30} />}
          href="/"
          linkBtnWidth="md:hidden"
          styling="bg-transparent p-0"
          onClick={clearLs}
        />

        <p className="board__text ms-auto mr-5 laptop:mr-[120px]">
          Already have an account?{" "}
          <Link
            to="/onboarding/login"
            className="text-green-500"
            onClick={goToLoginPage}
          >
            Log in
          </Link>
        </p>
      </div>

      <div className="h-[92vh] flex-center">
        <div className="w-full md:w-[55%]">
          <Heading
            title="Join Us!"
            tclass="title__default"
            description="To begin, select your kind of account"
            dclass="desc__default mt-2"
          />

          <div className="mt-10 flex flex-col gap-y-6">
            <RegularList
              list={account_types}
              component={RegisterAsLink}
              keyExtractor={account_types.map((item) => item.role)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAs;
