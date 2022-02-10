import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { store } from "./state/index"

/* Import Open San Fonts */
const Fonts = document.createElement("link");
Fonts.rel = "stylesheet";
Fonts.href =
  "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap";
document.head.appendChild(Fonts);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();