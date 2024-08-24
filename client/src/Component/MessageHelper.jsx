import React, { useState } from "react";

const MessageHelper = ({ message = "" }) => {

    const [showMessage,setShowMessage] = useState("")

    React.useEffect(() => {
        errorMessages(300)
    },[])

  const errorMessages = (sec) => {
     setShowMessage(message);
    setTimeout(() => {
        setShowMessage(null);
    }, sec);
  };



  return (
    <div>
      <div className="p-3 border-2 border-red-500 text-red-800">{showMessage}</div>
    </div>
  );
};

export default MessageHelper;
