import "./App.css";
import List from "./components/List";
import MoviesList from "./components/MoviesList";
import ProjectsList from "./components/ProjectsList"


function App() {
  return (
    <div className="App">
     <MoviesList />
     <ProjectsList />
     <List />

    </div>
  );
}

export default App;
