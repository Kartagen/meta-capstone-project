import {Link} from "react-router-dom";

import bruschetta from '../../../img/icons_assets/bruchetta.svg';
import greek_salad from '../../../img/icons_assets/greek salad.jpg';
import lemon_dessert from '../../../img/icons_assets/lemon dessert.jpg';
import Meal from "./Meal";
const meals = [
    {
        name: 'Greek Salad',
        image: greek_salad,
        price: '$5.00',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
    },
    {
        name: 'Bruschetta',
        image: bruschetta,
        price: '$2.99',
        description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
        name: 'Lemon Dessert',
        image: lemon_dessert,
        price: '$3.50',
        description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
    },
];
const Specials = () =>{
    return(
        <section className={"center grid specials"}>
            <div className={"specialsHeader"}>
                <h2>This week specials!</h2>
                <Link className={"btn"}>Menu</Link>
            </div>
            {meals.map((meal, index)=>
                <Meal meal={meal} key={index}/>
            )}
        </section>
    )
}
export default Specials;