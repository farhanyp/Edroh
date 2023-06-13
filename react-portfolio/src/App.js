import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  console.log(isDesktop)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
