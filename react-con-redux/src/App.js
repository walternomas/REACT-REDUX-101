import "./App.css";
import { connect } from "react-redux";
import Buttons from "./components/Buttons";

function App({ count }) {
  return (
    <div className="App">
      <header className="App-header">
        <span>El contador es: {count}</span>
        <Buttons />
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
    isLoading: state.isLoading,
  };
}

export default connect(mapStateToProps)(App);
