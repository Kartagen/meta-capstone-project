import {Link} from "react-router-dom";
import restaurant_food from "../../../img/icons_assets/restauranfood.jpg"

const Info = () =>{
    return(
        <section>
            <div>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Seattle</h2>
                    <p>
                        Indulge your palate in a culinary journey through the heart of Europe at our exquisite restaurant!
                    </p>
                    <Link>Reserve a table</Link>
                </div>
            </div>
            <img src={restaurant_food} alt={"Restaurant food"}/>
        </section>
    )
}
export default Info;