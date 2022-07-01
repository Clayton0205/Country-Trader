localStorage.setItem("country", JSON.stringify(country = [
    {
        name: "Argentina ",
        continent: "South-America",
        price: 383100000000,
        Image: "https://i.postimg.cc/VLHkx8KT/Argentina.png",
        population: 45380000,
        size: 2780000,
        McDonalds: 222
    },
    {
        name: "Canada",
        continent: "North-America",
        price: 1640000000000,
        Image: "https://i.postimg.cc/fTkwjPMv/canada.png",
        population: 38010000,
        size: 9985000,
        McDonalds: 1462
    },
    {
        name: "India",
        continent: "Asia",
        price: 2623000000000,
        Image: 'https://i.postimg.cc/gcgzhpbJ/India.webp',
        population: 1380000000,
        size: 3287000,
        McDonalds: 305
    },
    {
        name: "Indonesia",
        continent: "Asia",
        price: 1058000000000,
        Image: "https://i.postimg.cc/xT79sPCV/Indonesia.png",
        population: 273500000,
        size: 7810000,
        McDonalds: 227
    },
    {
        name: "Italy",
        continent: "Europe",
        price: 1886000000000,
        Image: "https://i.postimg.cc/htdcN7zz/Italy.png",
        population: 59550000,
        size: 301230,
        McDonalds: 578
    },
    {
        name: "Japan",
        continent: "Asia",
        price: 5065000000000,
        Image: "https://i.postimg.cc/PqnTHrY6/Japan.png",
        population: 59550000,
        size: 377975,
        McDonalds: 2900
    },
    {
        name: "Mexico",
        continent: "North-America",
        price: 1076000000000,
        Image: "https://i.postimg.cc/d33K67c0/Mexico.png",
        population: 128900000,
        size: 1964000,
        McDonalds: 402
    },
    {
        name: "Republic of Korea",
        continent: "Asia",
        price: 1631000000000,
        Image: "https://i.postimg.cc/R019Z5Tv/Republic-of-Korea.png",
        population: 51780000,
        size: 100210,
        McDonalds: 400
    },
    {
        name: "South Africa",
        continent: "Africa",
        price: 301900000000,
        Image: "https://i.postimg.cc/nz0Jq455/South-Africa.webp",
        population: 59310000,
        size: 1219000,
        McDonalds: 145
    },
    {
        name: "Turkey",
        continent: "Europe",
        price: 720100000000,
        Image: "https://i.postimg.cc/9MW248xZ/Turkey.png",
        population: 84340000,
        size: 783562,
        McDonalds: 3131
    },
])
);

const countries = JSON.parse(localStorage.getItem("country"));
const countrybox = document.getElementById("countrybox");

function loadData(war){
    countrybox.innerHTML= ""
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
    });
    loadData(newcountry)
}
loadData(countries); 

document.querySelector('#price').addEventListener('change',prices);

function populations(event){
    let newcountry = countries.filter(x => {
        return x.population <= event.target.value
    });
    loadData(newcountry)
}
loadData(countries); 

document.querySelector('#population').addEventListener('change',populations);

function areas(event){
    let newcountry = countries.filter(x => {
        return x.size <= event.target.value
    });
    loadData(newcountry)
}
loadData(countries); 

document.querySelector('#area').addEventListener('change',areas);

function amounts(event){
    let newcountry = countries.filter(x => {
        return x.McDonalds <= event.target.value
    });
    loadData(newcountry)
}
loadData(countries); 

document.querySelector('#amount').addEventListener('change',amounts );