import "./App.css";
import Index from "./components/Index";

function App() {
  return (
    <div
      className="App p-3"
      style={{
        background: "linear-gradient(to right, #0062cc, #007bff)",
      }}
    >
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" /> */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <Index />
    </div>
  );
}

export default App;
