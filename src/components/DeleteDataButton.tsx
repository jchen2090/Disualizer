import { RxTrash } from "react-icons/rx";
import { useDashboardContext } from "../hooks/useDashboardContext";
import { useEffect, useState } from "react";

const defaultMessage = "Delete Data";
const generateLoadingMsg = (message: string) => {
  const pattern = /\./g;
  const dotLength = message.match(pattern)?.length;

  //TODO: Refactor this later(?)
  if (dotLength === 3) {
    return "Resetting";
  } else if (dotLength === 2) {
    return "Resetting...";
  } else if (dotLength === 1) {
    return "Resetting..";
  } else {
    return "Resetting.";
  }
};

export default function DeleteDataButton() {
  const { resetRawData } = useDashboardContext();
  const [message, setMessage] = useState(defaultMessage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check is required since this gets ran on initial load
    if (message !== defaultMessage) {
      setTimeout(() => {
        setIsLoading(false);
        setMessage("Data wiped!");
      }, 1500);
    }
  }, [message]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // Check is required since this gets ran on initial load
    if (message !== defaultMessage && isLoading) {
      intervalId = setInterval(() => {
        setMessage(generateLoadingMsg(message));
      }, 250);
    }

    return () => {
      intervalId ? clearInterval(intervalId) : undefined;
    };
  }, [message, isLoading]);

  const handleOnClick = () => {
    resetRawData();
    setMessage("Resetting");
  };

  return (
    <button className="flex flex-row items-center self-center gap-1 mt-4 btn-danger" onClick={handleOnClick}>
      {message}
      <span>
        <RxTrash size={16} />
      </span>
    </button>
  );
}
