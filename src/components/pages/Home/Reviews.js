import customer1Image from '../../../img/icons_assets/Mario and Adrian b.jpg';
import customer2Image from '../../../img/icons_assets/Mario and Adrian b.jpg';
import customer3Image from '../../../img/icons_assets/Mario and Adrian b.jpg';
import customer4Image from '../../../img/icons_assets/Mario and Adrian b.jpg';
import Review from "./Review";
const customers = [
    {
        fullName: 'Maria Sanchez',
        image: customer1Image,
        rating: [5, 4, 5, 5, 4.5],
        says: `A delightful culinary experience! The flavors were exquisite, and the presentation was top-notch. From appetizers to desserts, every dish was a masterpiece.`,
    },
    {
        fullName: 'Antony Clifton',
        image: customer2Image,
        rating: [5, 5, 5, 5, 5],
        says: `Absolutely fantastic! The attention to detail in each dish was remarkable. A true gastronomic delight that left me wanting more. Highly recommend.`,
    },
    {
        fullName: 'Tamika Jackson',
        image: customer3Image,
        rating: [4, 5, 4.5, 4, 4.5],
        says: `An enjoyable dining experience! The ambiance was charming, and the fusion of flavors in the dishes was impressive. I'll definitely be returning for more.`,
    },
    {
        fullName: 'Brandon Ming',
        image: customer4Image,
        rating: [4, 4, 4.5, 4.5],
        says: `Great place with a diverse menu! The service was prompt, and the staff was friendly. A perfect spot for those seeking a well-rounded dining experience.`,
    },
];
const Reviews = () => {
    return (
        <section>
            <div>
                <h2>What people say about us!</h2>
                {customers.map((customer, index) =>
                    <Review key={index} customer={customer} />
                )}
            </div>
        </section>
    );
};

export default Reviews;