db = db.getSiblingDB("meme");
db.gpus.drop();
db.gpus.insertMany([
    {
        "name":"GeForce 1030 AERO ITX",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"geforce1030aeroitx.jpg",
        "memory":"2GB GDDR5",
        "fab":"MSI"
    },
    {
        "name":"Radeon RX 550 AERO ITX",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"radeonrx550aeroitx.jpg",
        "memory":"4GB GDDR5",
        "fab":"MSI"
    },
    {
        "name":"GeForce 1050 AERO ITX",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"geforce1050aeroitx.jpg",
        "memory":"2GB GDDR5",
        "fab":"MSI"
    },
    {
        "name":"GeForce GTX 1050 GAMING",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"geforce1030aeroitx.jpg",
        "memory":"2GB GDDR5",
        "fab":"EVGA"
    },
    {
        "name":"GeForce GTX 1050 Ti Mini",
        "puerto":"PCI express 3.0 x16",
        "category":"Gpu",
        "img":"radeonrx560.jpg",
        "memory":"4GB GDDR5",
        "fab":"Zotac"
    },

])