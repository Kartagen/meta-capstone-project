import {Link} from "react-router-dom";
import restaurant_food from "../../../img/icons_assets/restauranfood.jpg"

const Info = () => {
    return (
        <section className={"infoSection center"}>
            <div className={"infoDiv"}>
                <div className={"infoTextDiv"}>
                    <h1>Little Lemon</h1>
                    <h2>Seattle</h2>
                    <p>
                        Indulge your palate in a culinary journey through the heart of Europe at our exquisite
                        restaurant!
                    </p>
                </div>
                <Link className={"btn infoBtn"}>Reserve a table</Link>
            </div>
            <img className={"infoImg"} src={restaurant_food} alt={"Restaurant food"}/>
        </section>
    )
}
export default Info;