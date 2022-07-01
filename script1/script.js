localStorage.setItem("country", JSON.stringify(country = [
    {
        name: "Argentina ",
        continent: "South-America",
        price: "383.100 000 000",
        Image: "https://i.postimg.cc/VLHkx8KT/Argentina.png",
        population: "45.38 million",
        size: "2,78 million km²",
        McDonalds: "222"
    },
    {
        name: "Canada",
        continent: "North-America",
        price: "$1.64 trillion",
        Image: "https://i.postimg.cc/fTkwjPMv/canada.png",
        population: "38.01 million",
        size: "9,985 million km²",
        McDonalds: "1,462"
    },
    {
        name: "India",
        continent: "Asia",
        price: "$2.623 trillion",
        Image: 'https://i.postimg.cc/gcgzhpbJ/India.webp',
        population: "1.38 billion",
        size: "3,287 million km²",
        McDonalds: "305"
    },
    {
        name: "Indonesia",
        continent: "Asia",
        price: "$1.058 trillion",
        Image: "https://i.postimg.cc/xT79sPCV/Indonesia.png",
        population: "273.5 million",
        size: "7,81 million km²",
        McDonalds: "227"
    },
    {
        name: "Italy",
        continent: "Europe",
        price: "$1.886 trillion",
        Image: "https://i.postimg.cc/htdcN7zz/Italy.png",
        population: "59.55 million",
        size: "301,230 km2",
        McDonalds: "578"
    },
    {
        name: "Japan",
        continent: "Asia",
        price: "$5.065 trillion",
        Image: "https://i.postimg.cc/PqnTHrY6/Japan.png",
        population: "59.55 million",
        size: "377 975 km²",
        McDonalds: "2,900"
    },
    {
        name: "Mexico",
        continent: "North-America",
        price: "$1.076 trillion",
        Image: "https://i.postimg.cc/d33K67c0/Mexico.png",
        population: "128.9 million",
        size: "1,964 million km²",
        McDonalds: "402"
    },
    {
        name: "Republic of Korea",
        continent: "Asia",
        price: "$1.631 trillion",
        Image: "https://i.postimg.cc/R019Z5Tv/Republic-of-Korea.png",
        population: "51.78 million",
        size: "100 210 km²",
        McDonalds: "400"
    },
    {
        name: "South Africa",
        continent: "Africa",
        price: "$301.9 billion",
        Image: "https://i.postimg.cc/nz0Jq455/South-Africa.webp",
        population: "59.31 million",
        size: "1,219 million km²",
        McDonalds: "145"
    },
    {
        name: "Turkey",
        continent: "Europe",
        price: "$720.1 billion",
        Image: "https://i.postimg.cc/9MW248xZ/Turkey.png",
        population: "84.34 million",
        size: "783 562 km²",
        McDonalds: "3,131"
    },
])
);

const countries = JSON.parse(localStorage.getItem("country"));
const countrybox = document.getElementById("countrybox");

console.log(countries);

function loadData(war){
war.forEach(salestax => {
    countrybox.innerHTML +=
        `
    
    <div class="container bg-primary my-3"> 
    <div class="row mb-5 text-center">
    <h1>${salestax.name}</h1>  
    </div>
    <div class="row mb-5 text-center">
    <img src="${salestax.Image}" id="image">
    </div>
    <div class="row mb-5 text-center">
    <h3>
    ${salestax.continent}
    </h3>
    </div>
    <div class="row mb-5 text-center">
     <h3>
     ${salestax.price}
     </h3>
    </div>
    <div class="row text-center">
    <div class="col-md-4">
    <h6>Population</h6>
    </div>
    <div class="col-md-4">
    <h6>Area</h6>
    </div>
    <div class="col-md-4">
    <h6>Amount of McDonald's</h6>
    </div>
    </div>
    <div class="row mb-5 text-center">
    <div class="col-md-4">
    <i class="fa-solid fa-person"></i>
    ${salestax.population}
    </div>
    <div class="col-md-4">
    <i class="fa-solid fa-mountain-sun"></i>
    ${salestax.size}
    </div>
    <div class="col-md-4">
    <i class="fa-solid fa-burger"></i>
    ${salestax.McDonalds}
    </div>
    </div>

    </div>
    `
});
}

function prices(event){
    let newcountry = countries.filter(x => {
        return x.price <= event.target.value
    })
    console.log(newcountry);
    loadData(newcountry)
}
loadData(countries);

document.querySelector('#price').addEventListener('change',prices);
