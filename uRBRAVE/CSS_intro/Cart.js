const product = [
        {
            id: 0,
            image: '/uRBRAVE/Eintein.jpg',
            title: 'Eintein',
            price: '₹100.0',
        },
        {
            id: 1,
            image: '/uRBRAVE/featured/download.png',
            title: 'Harry Potter',
            price: '₹100.0',
        },
        {
            id: 2,
            image: '/uRBRAVE/featured/download.jpg',
            title: 'Invisible Woman',
            price: '₹100.0',
        },
        {
            id: 3,
            image: '/uRBRAVE/download.jpg',
            title: 'Eintein',
            price: '₹100.0',
        }
];


const category = [...new Set(product.map((item) => {return item}))]

let i=0 ;
document.getElementById('root').innerHTML = category.map((item)=>{
    var {image, title, price} = item;
    return(
        `<div class="box">
        <div class="img-box">
            <img class="image" src="${image}" alt=""></img>
            </div>
            <div class="bottom">
            <p> ${title} </p>
            <h2> ${price} </h2>` + 
            "<button onclick= addtocart("+(i++)+") >Add to Cart</button>"+ 
         `</div></div>`
         )


        } ).join(' ')
        
        
        const cart = [];
        
        console.log(cart);
        function addtocart(a){
            cart.push({...category[a]});
            displayCart();
            console.log(cart)
}

function displayCart(a){
    let j =0;   
    if (cart.length==0) {
        document.getElementById('cartItem').innerHTML = "Cart is"
    } 
    else {
            document.getElementById("cartItem").innerHTML = cart.map((item)=>{
                var {image, title, price} = item;
                return(
                    `<div class="cart-i tem">
                    <div class="row-img">
                    <img class="rowimg" src="${image}" alt=""></img>
                        </div>
                        <p style = 'font-size:12px;'> ${title} </p>
                        <h2 style = 'font-size:15px;'> ${price} </h2>` +
                        "<i class = 'fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
                        );
                }).join(' ');
    }   
}
