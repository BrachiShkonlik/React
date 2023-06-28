import pancake from '../Pictures/pancake.jpg';
import iceCream from '../Pictures/iceCream.jpg';
import pizza from '../Pictures/pizza.jpg';
import pizzaTomato from '../Pictures/pizzaTomato.jpg';
import sandwich from '../Pictures/sandwich.jpg';
import iceCreamInCone from '../Pictures/iceCreamInCone.jpg';
import lasagna from '../Pictures/lasagna.jpg';
import foccia from '../Pictures/foccia.jpg';
import personalPizza from '../Pictures/personalPizza.jpg';
import peaSoup from '../Pictures/peaSoup.jpg';
import mushrooms from '../Pictures/mushrooms.jpg';
import toast from '../Pictures/toast.jpg';
import chocolateCake from '../Pictures/chocolateCake.jpg';
import greekSalad from '../Pictures/greekSalad.jpg';
import salmonFish from '../Pictures/fish.jpg';
import batataPasta from '../Pictures/batataPasta.jpg';
import cheeseCake from '../Pictures/cheeseCake.jpg';
import belgianWaffles from '../Pictures/belgianWaffles.jpg';
import omelet from '../Pictures/omelet.jpg';
import vegetableOmele from '../Pictures/vegetableOmele.jpg';
import puff from '../Pictures/puff.jpg';
import onionPie from '../Pictures/onionPie.jpg';
import macaroniSalad from '../Pictures/macaroniSalad.jpg';
import noodles from '../Pictures/noodles.jpg';
import burekas from '../Pictures/burekas.jpg';
import couscous from '../Pictures/couscous.jpg';
import blinches from '../Pictures/blinches.jpg';
import frenchCrape from '../Pictures/frenchCrape.jpg';
import milkshake from '../Pictures/milkShake.jpg';
import orchid from '../Pictures/orchid.jpg';
import donut from '../Pictures/donut.jpg'


const products = [
    {
        description: "A delicious pancake"
        , price: 20
        , image: pancake
        , qty: 3
        , name: "Pancake"
        , id: 1
    }
    ,
    {
        description: "Real Italian pizza"
        , price: 20
        , image: pizza
        , qty: 50
        , name: "Pizza"
        , id: 2
    }
    ,
    {
        description: "Real Italian pizza with lots of tomatoes"
        , price: 50
        , image: pizzaTomato
        , qty: 10
        , name: "Pizza Tomato"
        , id: 3
    }
    ,
    {
        description: "Tunisian/ israeli/ american sandwich"
        , price: 15
        , image: sandwich
        , qty: 10
        , name: "Sandwich"
        , id: 4
    }
    ,
    {
        description: "Dairy ice creams in 10 different flavors in Cone"
        , price: 15
        , image: iceCreamInCone
        , qty: 10
        , name: "Ice Cream in Cone"
        , id: 5
    }
    ,
    {
        description: "Delicious and hot lasagna"
        , price: 10
        , image: lasagna
        , qty: 10
        , name: "Lasagna"
        , id: 6
    }
    ,
    {
        description: "Delicious and hot focaccia"
        , price: 10
        , image: foccia
        , qty: 10
        , name: "Foccia"
        , id: 7
    }
    ,
    {
        description: "Steaming pea soup"
        , price: 15
        , image: peaSoup
        , qty: 10
        , name: "Pea Soup"
        , id: 8
    }
    ,
    {
        description: "Mushrooms in hot sauce"
        , price: 15
        , image: mushrooms
        , qty: 10
        , name: "Mushrooms"
        , id: 9
    }
    ,
    {
        description: "Delicious toast"
        , price: 15
        , image: toast
        , qty: 10
        , name: "Toast"
        , id: 10
    }
    ,
    {
        description: "a Real Italian personal pizza"
        , price: 20
        , image: personalPizza
        , qty: 10
        , name: "Personal Pizza"
        , id: 11
    }
    ,
    {
        description: "a Rich chocolate cake"
        , price: 80
        , image: chocolateCake
        , qty: 10
        , name: "chocolate Cake"
        , id: 12
    }
    ,
    {
        description: "Greek salad with feta cheese"
        , price: 19
        , image: greekSalad
        , qty: 10
        , name: "Greek Salad"
        , id: 13
    }
    ,
    {
        description: "Salmon fish in pesto"
        , price: 30
        , image: salmonFish
        , qty: 10
        , name: "salmon Fish"
        , id: 14
    }
    ,
    {
        description: "Sweet pasta with batata"
        , price: 25
        , image: batataPasta
        , qty: 10
        , name: "Batata Pasta"
        , id: 15
    }
    ,
    {
        description: "Addictive cheese and cream cake"
        , price: 90
        , image: cheeseCake
        , qty: 10
        , name: "cheese Cake"
        , id: 16
    }
    ,
    {
        description: "A dream belgian Waffles"
        , price:25
        , image: belgianWaffles
        , qty: 10
        , name: "Belgian Waffles"
        , id: 17
    }
    ,
    {
        description: "a tasty omelet"
        , price: 10
        , image: omelet
        , qty: 10
        , name: "Omelet"
        , id: 18
    }
    ,
    {
        description: "asty vegetable Omele"
        , price: 13
        , image: vegetableOmele
        , qty: 10
        , name: "Vegetable Omele"
        , id: 19
    }
    ,
    {
        description: "A dream puff"
        , price: 10
        , image: puff
        , qty: 10
        , name: "Puff"
        , id: 20
    }
    ,
    {
        description: "Dairy ice creams in 10 different flavors"
        , price: 13
        , image: iceCream
        , qty: 10
        , name: "Ice Cream"
        , id: 21
    }
    ,
    {
        description: "Vegetables and pasta in halloumi salad with Wingate sauce"
        , price: 18
        , image: macaroniSalad
        , qty: 10
        , name: "Macaroni Salad"
        , id: 22
    }
    ,
    {
        description: "Chinese noodles in teriyaki/chili sauce"
        , price: 17
        , image: noodles
        , qty: 10
        , name: "Noodles"
        , id: 23
    }
    ,
    {
        description: "Refreshing milk shake in different flavors"
        , price: 5
        , image: milkshake
        , qty: 10
        , name: "Milk Shake"
        , id: 28
    }
    ,
    {
        description: "A warm and pampering orchid"
        , price: 10
        , image: orchid
        , qty: 10
        , name: "Orchid"
        , id: 29
    }
    ,
    {
        description: "Donuts in a variety of flavors and toppings"
        , price: 6
        , image: donut
        , qty: 10
        , name: "Donut"
        , id: 30
    }
    ,
    {
        description: "Hot cheese/potato burekas in sauce"
        , price: 5
        , image: burekas
        , qty: 10
        , name: "Burekas"
        , id: 24
    }
    ,
    {
        description: "Low calorie onion pie"
        , price: 8
        , image: onionPie
        , qty: 10
        , name: "Onion Pie"
        , id: 25
    }
    ,
    {
        description: "Soft and pleasant blintzes"
        , price: 14
        , image: blinches
        , qty: 10
        , name: "Blinches"
        , id: 26
    },
    {
        description: "A dreamy French crepe"
        , price: 25
        , image: frenchCrape
        , qty: 10
        , name: "French Crape"
        , id: 27
    },
 


];

const ProductReducer = (state = products, action) => {

    switch (action.type) {

        case "ADDITIONQTY" :{
            const product = products.find(p => p.id == action.payload);
            if(product.qty>0){
                product.qty += 1
            }
            else if(product == undefined){
                alert()
            }
            return products;
        }

        case ("REDUCTIONQTY") :{
            const product = products.find(p => p.id == action.payload)
            if(product.qty > 0){
                product.qty -= 1
                return state;
            }
            else {
                alert("We bake every product for you with great love, and give each and every dish a personal touch :)\n Unfortunately, we still haven't prepared what you asked for. \n We will be happy to prepare for you now, try in a few minutes to order again...")
                {document.querySelector(".plusButton").ariaDisabled = "true"}
                return state;
            }
        }

        default:
            return state;
    }
}
export default ProductReducer;