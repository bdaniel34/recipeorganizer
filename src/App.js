import "./App.css";
import Todolist from "./Components/Todolist";
import Searchbar from "./Components/Searchbar";
import  Calendar  from "./Components/Calendar";

export default function App() {
  return (
    <div>
      <Todolist />
      <Searchbar />
      <Calendar/>
    </div>
  );
}
