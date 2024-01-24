import React from "react";

interface NotificationMenuProps {
  visible?: boolean;
}

const NotificationMenu: React.FC<NotificationMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  const user = true;

  return (
    <div className="bg-black w-56 absolute top-16 right-20 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white text-sm hover:underline">
          No Notification Yet
        </div>
      </div>
    </div>
  );
};

export default NotificationMenu;
