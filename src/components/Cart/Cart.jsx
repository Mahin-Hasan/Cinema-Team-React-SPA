import './Cart.css'

const Cart = ({ selectedActors ,remaining, totalCost }) => {
    console.log(selectedActors);
    return (
        <div>
            <h5>Total Actors: {selectedActors.length}</h5>
            <h5>remaining: {remaining}</h5>
            <h5>totalCost: {totalCost}</h5>
            {
                selectedActors.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};



export default Cart;