import App from "./app"

function Application() {
  return (
      <div>
       <App/>
      </div>
  )
}

const rootElement = document.getElementById("app");
ReactDOM.render(<Application />, rootElement);
