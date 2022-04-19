import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        {/*we render pages to avoid rendering each individual page, because we will add routing later*/}
        {/*always render to see results*/}
        {/*Pages will have all the pages, eg Home, search items, etc*/}
        <Pages />
    </div>
  );
}

export default App;

