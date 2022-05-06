import "./styles.css";

export const App = () => {
  return (
    <>
      <h2>GitHub User Info</h2>
      <div>
        <input id="userId" type="text" value="js-primer-example" />
        <button onclick="main();">Get user info</button>
      </div>
      <div id="result"></div>
    </>
  );
};
