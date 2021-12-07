import Header from "./components/Header";
import QuoteList from "./components/QuoteList";
import ActionButtons from "./components/ActionButtons";

function App() {
  return (
    <div className="content">
      <div className="Header" />
      <Header />
      <div />
      <div>
        <ActionButtons />
        <QuoteList />
      </div>
    </div>
  );
}

export default App;
