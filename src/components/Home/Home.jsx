// import Cart from "../Cart/Cart";
import { useEffect } from "react";
import "./Home.css"
import { useState } from "react";
import Cart from "../Cart/Cart";

/*
functionality
1.not more than 6 players
2. when select click name and price is added to card only once

*/
const Home = () => {

    const [allActors, setAllactors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then((data) => setAllactors(data));
    }, [])
    // console.log(allActors)
    const handleSelectActor = (actor) => {
        // console.log(actor);
        //validating if selected item exist or not 
        const isExist = selectedActors.find((item) => item.id === actor.id);
        // console.log(isExist);
        if (isExist) {
            return alert('already added')
        }
        setSelectedActors([...selectedActors, actor]);//store prev array and add new array

    }
    console.log(selectedActors);

    return (
        <div className="container">
            <div className="home-container">
                <div className="card-container">
                    {allActors.map(actor => (
                        <div key={actor.id} className="card">
                            <div className="card-img">
                                <img className="photo" src={actor.image} alt="" />
                            </div>
                            <h2>{actor.name}</h2>
                            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, porro.</small></p>
                            <div className="info">
                                <p>salary: ${actor.salary}</p>
                                <p>{actor.role}</p>
                            </div>
                            <button onClick={() => handleSelectActor(actor)} className="card-btn">Select</button>
                        </div>
                    ))}
                </div>
                <div className="cart">
                    <Cart selectedActors={selectedActors}></Cart>
                </div>
            </div>
            {/* <h1>home</h1> */}
            {/* <Cart></Cart> */}
        </div>
    );
};


export default Home;