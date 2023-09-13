import SearchContainer from "./components/SearchContainer";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetailedPage from "./components/BookDetailedPage";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<SearchContainer />} />
            <Route path="/book/:bookId" element={<BookDetailedPage />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
