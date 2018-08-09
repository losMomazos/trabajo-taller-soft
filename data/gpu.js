db = db.getSiblingDB("meme");
db.gpus.drop();
db.gpus.insertMany([
    {
        "name":"GeForce 1030 AERO ITX",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"geforce1030aeroitx.jpg",
        "memory":"2GB GDDR5",
        "fab":"MSI",
        "peso":"246 g",
        "cuda":"Si",
        "nucleoscuda":"384",
        "versiondi":"12.0"
        "versionopl":"4.5"

    },
    {
        "name":"Radeon RX 550 AERO ITX",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"radeonrx550aeroitx.jpg",
        "memory":"4GB GDDR5",
        "fab":"MSI"
        "peso":"320 g",
        "cuda":"No",
        "nucleoscuda":"0",
        "versiondi":"12.0"
        "versionopl":"4.5"
    },
    {
        "name":"GeForce 1050 AERO ITX",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"geforce1050aeroitx.jpg",
        "memory":"2GB GDDR5",
        "fab":"MSI"
        "peso":"308 g",
        "cuda":"Si",
        "nucleoscuda":"640",
        "versiondi":"12.0"
        "versionopl":"4.5"
    },
    {
        "name":"GeForce GTX 1050 GAMING",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"geforce1030aeroitx.jpg",
        "memory":"2GB GDDR5",
        "fab":"EVGA"
        "peso":"280 g",
        "cuda":"Si",
        "nucleoscuda":"640",
        "versiondi":"12.0"
        "versionopl":"4.6"
    },
    {
        "name":"GeForce GTX 1050 Ti Mini",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"radeonrx560.jpg",
        "memory":"4GB GDDR5",
        "fab":"Zotac"
        "peso":"300 g",
        "cuda":"Si",
        "nucleoscuda":"768",
        "versiondi":"12.0"
        "versionopl":"4.5"
    },

])