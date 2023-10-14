import Home from "./pages/Home/Home";
import MenuProvider from "./context/MenuProvider";

function App() {
  return (
    <>
      <MenuProvider>
        <Home />
      </MenuProvider>
    </>
  );
}

export default App;
