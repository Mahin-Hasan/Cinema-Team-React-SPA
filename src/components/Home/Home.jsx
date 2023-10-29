// import Cart from "../Cart/Cart";
import { useEffect } from "react";
import "./Home.css"
import { useState } from "react";


const Home = () => {

    const [allActors, setAllactors] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then((data) => setAllactors(data));
    }, [])
    console.log(allActors)


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
                                <button className="card-btn">Select</button>
                            </div>
                        ))}
                </div>
                <div className="cart">
                    <h1>this is cart</h1>
                </div>
            </div>
            {/* <h1>home</h1> */}
            {/* <Cart></Cart> */}
        </div>
    );
};


export default Home;