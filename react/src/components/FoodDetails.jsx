import { useEffect, useState } from "react";

export default function FoodDetails({foodId}) {
    const [food,setFood]=useState({});
    const [isLoading, setIsLoading] = useState({});
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "3fdced503d074d23ada3dbc7e08ff4b1";
    useEffect(()=> {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    }, [foodId]);
    return (
        <div>
            <div>
                <h1>{food.title}</h1>

                <img src={food.image} alt="" />

                <div>
                    <span>
                        <strong>⏲️{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        👨‍👩‍👧‍👦<strong>Serves {food.servings} </strong>
                    </span>
                    <span>
                        {food.vegeterian ? "🥕Vegeterian" : "🍖Non-Vegetarian"}
                    </span>
                    <span>
                        {food.vegan ? "🐄 Vegan" : ""}
                    </span>
                </div>
                <div>
                    💲<span>{food.pricePerServing/100} Per serving</span>
                </div>
            </div>
            <div>
                <h2>Instructions</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    food.analyzedInstructions[0].steps.map((step) => <li key={step.step}>{step.step}</li>)
                )}
            </div>
        </div>
    );
}