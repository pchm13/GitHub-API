import { useState } from "react";
import { CreateView } from "./components/CreateView";

export const App = () => {
  const [inputText, setInputText] = useState("js-primer-example");
  const [userId, setUserId] = useState("");

  const onChangeInputText = (event) => {
    setInputText(event.target.value);
  };

  const fetchUserInfo = (userId) => {
    return fetch(
      `https://api.github.com/users/${encodeURIComponent(userId)}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        response.json();
      }
    });
  };

  const onClickButton = (inputText) => {
    setUserId(inputText);
  };

  return (
    <>
      <h2>GitHub User Info</h2>

      <div>
        <input
          id="userId"
          type="text"
          value={inputText}
          onChange={onChangeInputText}
        />
        <button onClick={() => onClickButton(inputText)}>Get user info</button>
      </div>

      <CreateView userInfo={() => fetchUserInfo(userId)} />
    </>
  );
};
