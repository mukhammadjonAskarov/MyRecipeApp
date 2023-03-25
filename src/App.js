import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./components/RecipeCard/RecipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  console.log("search", search);
  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const item = recipes.filter((el) =>
      el.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(item);
  }, [search]);
  return (
    <div className="App">
      <img src="/assets/banner.webp" alt="food-image" />
      <div className="container">
        <div className="searchInput">
          <input value={search} onChange={handleSearch} />
          <h3>Search By Title</h3>
        </div>
        <h1>Recipes</h1>
        <section className="recipes">
          {filtered?.length > 0
            ? filtered.map((el) => (
                <RecipeCard
                  title={el.title}
                  description={el.description}
                  src={el.src}
                  id={el.id}
                />
              ))
            : recipes.map((el) => (
                <RecipeCard
                  title={el.title}
                  description={el.description}
                  src={el.src}
                  id={el.id}
                />
              ))}
        </section>
      </div>
    </div>
  );
}

export default App;
