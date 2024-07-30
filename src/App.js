import React, { useState, useEffect } from "react";
import "./App.css";

const recipes = [
  {
    author: "Josef",
    name: "Chicken Curry",
    description: "Delicious spicy chicken curry",
    image: "https://tse2.mm.bing.net/th?id=OIP.nTT5tvHk0Up59zRcC6oEygHaHa&pid=Api&P=0&h=220",
    ingredients: ["Chicken", "Curry Powder", "Onion", "Garlic", "Tomato"]
  },
  {
    author: "Aisha",
    name: "Hamburger",
    description: "Juicy burger with toppings and a soft bun",
    image: "https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18.jpg",
    ingredients: ["Beef Patty", "Bun", "Lettuce", "Tomato", "Cheese"]
  },
  {
    author: "Mary",
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with creamy egg sauce and pancetta",
    image: "https://tse4.mm.bing.net/th?id=OIP.NVy83zznC_cAClWPsS3RgAHaE6&pid=Api&P=0&h=220",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"]
  },
  {
    author: "Carlos",
    name: "Tacos",
    description: "Mexican tacos with a variety of fillings and toppings",
    image: "https://i0.wp.com/kristineskitchenblog.com/wp-content/uploads/2020/08/tacos-1200-2990.jpg?resize=768%2C1152&ssl=1",
    ingredients: ["Taco Shells", "Ground Beef", "Lettuce", "Tomato", "Cheese", "Sour Cream"]
  },
  {
    author: "Li",
    name: "Sushi",
    description: "Japanese sushi rolls with fresh fish and vegetables",
    image: "https://www.wikihow.com/images/b/b4/Make-a-Maki-Sushi-Final.jpg",
    ingredients: ["Sushi Rice", "Nori", "Tuna", "Avocado", "Cucumber", "Soy Sauce"]
  },
  {
    author: "Nina",
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with chocolate frosting",
    image: "https://tse1.mm.bing.net/th?id=OIP.RF-npsXIp5x4jIvpPilMsgHaLH&pid=Api&P=0&w=300&h=300",
    ingredients: ["Flour", "Cocoa Powder", "Sugar", "Butter", "Eggs", "Milk"]
  },
  {
    author: "Omar",
    name: "Chicken Alfredo",
    description: "Creamy pasta dish with chicken and 
    Alfredo sauce",
    image: "https://tse3.mm.bing.net/th?id=OIP.wg4qKVPaGE4zIkIEfmLXTQHaLH&pid=Api&P=0&h=220",
    ingredients: ["Fettuccine", "Chicken Breast", "Heavy Cream", "Parmesan Cheese", "Garlic", "Butter"]
  }
];

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedRecipe) {
      setShowDetails(false);
      const timer = setTimeout(() => setShowDetails(true), 100);
      return () => clearTimeout(timer);
    }
  }, [selectedRecipe]);

  const handleRecipeClick = (recipe, index) => {
    setSelectedRecipe(recipe);
    setSelectedIndex(index);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <button className="sidebar-button" onClick={toggleSidebar}>
        Recipe List
      </button>
      <div className={`sidebar ${isSidebarOpen ? "show" : "hidden"}`}>
        <h2>Recipe List</h2>
        <ul>
          {recipes.map((recipe, index) => (
            <li
              key={index}
              onClick={() => handleRecipeClick(recipe, index)}
              className={selectedIndex === index ? "selected" : ""}
            >
              {recipe.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={`details ${showDetails ? "visible" : "hidden"}`}>
        {selectedRecipe ? (
          <>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.name} />
            <p><strong>Author:</strong> {selectedRecipe.author}</p>
            <p><strong>Description:</strong> {selectedRecipe.description}</p>
            <p><strong>Ingredients:</strong></p>
            <div className="ingredients-list">
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  {ingredient}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Select a recipe to see the details</p>
        )}
      </div>
    </div>
  );
}

export default App;
