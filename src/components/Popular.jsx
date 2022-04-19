import {useEffect, useState } from "react";

function Popular() {
    const [popular, setPopular] = useState([]);

    //invokes the function. when the page reloads, eg localhost3000, it runs the function
    useEffect(() => {
        getPopular();
    }, []);

    //runs getPopular when the component gets mounted, and an empty array is added to tell the function to only run when the component gets mounted
    // empty array can be used to pass in other info eg values in our app get updated


    // we add async because we are waiting for data. We make sure we have data before rendering anything else
    const getPopular = async () => {
        // we also set the number os recipes we want to get back
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
        //gives us a json format to play with the data
        const data = await api.json();

        //the console is an array that holds 10 objects. These objects are not saved for use. We use state and react for that
        // They are variables that hold info, and when the var changes, eg, the data, the UI reacts and removes/adds the data
        // we import usestate for this to happen
        // console.log(data);

        //we remove the console and use the setpopular
        // when we fetch popular, we are setting it into an array that holds objects
        setPopular(data.recipes);
        };

    return (
        <div>
            {/*render something on the screen*/}
            {/*we are mapping/looping the recipes and outputting each recipe*/}
            {popular.map((recipe) => {
                //return jsx
                // react requires you to add a unique id for each element in the array in case one gets changed/ removed from the dom.
                // add a kep prop to parent div
                return(
                    <div key={recipe.id}> {/*gets unique identifier*/}
                        <p>{recipe.title}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Popular;