import { Avatar, AvatarFallback, Button } from "../ui/index";
interface ProfileDropdownLinkProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const ProfileDropdown = () => {
  const ProfileDropDownLink = ({
    onClick,
    text,
    className,
  }: ProfileDropdownLinkProps) => {
    return (
      <>
        <style>{`
        .underline-slide {
            position: relative;
            display: inline-block;
          }
          .underline-slide::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: currentColor;
            transition: transform 0.3s ease-in-out;
            transform: scaleX(0);
            transform-origin: bottom left;
          }
          .underline-slide-div:hover .underline-slide::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
      `}</style>
        <div
          className={`${className} h-10 py-2 underline-slide-div cursor-pointer`}
          onClick={onClick}
        >
          <p className="underline-slide">{text}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="absolute right-0 top-full w-64 flex gap-4 flex-col justify-around py-6 px-8 bg-white border-2 border-gray-300 shadow-md rounded-md cursor-default">
        <div className="flex flex-col h-42 gap-4 items-center">
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
          <h1 className="font-bold">Krishna Singha</h1>
        </div>
        <div className="flex flex-col font-bold">
          <ProfileDropDownLink
            text="Unlock Premium"
            className="text-green-700"
            onClick={() => alert("Placeholder")}
          />
          <ProfileDropDownLink
            text="View Profile"
            className="text-primary"
            onClick={() => alert("Profile page still needs to be implemented.")}
          />
          <ProfileDropDownLink
            text="Settings"
            className="text-primary"
            onClick={() =>
              alert("Settings page still needs to be implemented.")
            }
          />
          <ProfileDropDownLink
            text="Help"
            className="text-primary"
            onClick={() => alert("Placeholder")}
          />
        </div>
        <Button
          variant="destructive"
          onClick={() => alert("Auth still needs to be implemented.")}
        >
          Log Out
        </Button>
      </div>
    </>
  );
};

export default ProfileDropdown;
