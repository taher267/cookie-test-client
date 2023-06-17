import "./App.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;

export const Home = () => {
  const login = () => {
    const url = "http://localhost:4001/auth";
    fetch(`${url}/login`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((d) => {
        console.log(d);
      })
      .catch(console.error);
  };
  const credentials = () => {
    const url = "http://localhost:4001/auth";
    fetch(`${url}/credentials`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((d) => {
        console.log(d);
      })
      .catch(console.error);
  };
  const logout = () => {
    // const url = "http://localhost:4001/auth";
    const Live = "https://cookie-test-server.onrender.com/auth";
    fetch(`${Live}/logout`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((d) => {
        console.log(d);
      })
      .catch(console.error);
  };
  return (
    <>
      <button onClick={login}>Login</button> |{" "}
      <button onClick={credentials}>Credentils</button> |
      <button onClick={logout}>logout</button>
    </>
  );
};
