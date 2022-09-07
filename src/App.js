import logo from './logo.svg';
import './App.css';
import Topimg from "./Components/Topimg.js"
import Navbar from './Components/Navbar';
import Card from "./Components/Card";
import data from "./Components/data";
import "./Components/style.css"

function App() {
  const cards = data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
        />
    )
})            
  return (
    <div >
      <Navbar />
     <Topimg />
     <section className="clist justify-content-center">
                {cards}
            </section>
    </div>
  );
}

export default App;
