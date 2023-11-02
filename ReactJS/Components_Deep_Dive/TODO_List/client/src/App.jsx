import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div>
         {/* Navigation header  */}
        <Header />

   {/* Main content  */}
  <main className="main">

     {/* Section container  */}
    <TodoList />
  </main>

   {/* Footer  */}
  
        <Footer />
    </div>
  );
}

export default App;
