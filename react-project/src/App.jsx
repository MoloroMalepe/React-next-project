/* eslint-enable react/jsx-key */
/* eslint-disable react/prop-types */

import './App.css'

function Header({ name, year }){
  
  return (
    <header>
  <h2>Welcome to my react + vite {name}!</h2>
  <p>Copyright {year}</p>
  </header>
  );
}


const items = ["Mashonja", 
  "Maotwana", "Oxtails", "tribe", "banana", "chicken livers"
];

const dishObjects = items.map((dish, i) => ({
  id : i,
  title: dish
}));
console.log(dishObjects);
  function Main({ dishes }) {
    return (
      <>
      <div>
        <h2>Welcome to wildboar pots</h2>
    </div>
      <main>
      <img 
      src="https://github.com/moloromalepe.png" 
      height={200} 
        alt='github photo'
      />
    <ul>
      { dishes.map((dish) => (

     <li key={dish.id} style={{listStyleType: "none"}}> {dish.title} </li>
  
      ))}
    </ul>
    </main>
    </>

    );
  }

function App() {
  return (
   <div>
    <Header name="project" year={new Date().getFullYear()} />
    <Main dishes =  {dishObjects} />
    </div>

  ); 
}

export default App
