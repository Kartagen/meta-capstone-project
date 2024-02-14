import chefsMarioAndAdrianAImage from '../../../img/icons_assets/Mario and Adrian A.jpg';
import chefsMarioAndAdrianBImage from '../../../img/icons_assets/Mario and Adrian b.jpg';

const Foundation = () => {
    return (
        <section className={"center grid foundation"}>
            <div className={"foundationText"}>
                <h1>Little Lemon</h1>
                <h2>Seattle</h2>
                <p>
                    Founded with a passion for celebrating the rich tapestry of European culinary traditions, our restaurant stands as a testament to a vision that goes beyond merely serving food. Established on the belief that food is a universal language that brings people together, our foundation is rooted in the idea of creating a dining experience that transcends borders. From the very beginning, we set out to create a space where patrons could immerse themselves in the authentic flavors of Europe, fostering a sense of cultural appreciation and connection. Our commitment to quality, innovation, and the artistry of culinary traditions is at the core of our foundation, shaping our menu, ambiance, and the warm hospitality extended to each guest. Whether it's a cozy family dinner or a celebratory gathering, our restaurant foundation is built on the joy of sharing exceptional moments around the table, leaving a lasting impression on all who seek a taste of Europe in every bite.
                </p>
            </div>
            <div className={"foundationChefs"}>
                <img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
                <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
            </div>
        </section>
    );
};

export default Foundation;