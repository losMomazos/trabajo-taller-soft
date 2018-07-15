db = db.getSiblingDB("meme");
db.motherboards.drop();
db.motherboards.insertMany([
    {
        "name":"H310M-G/M.2",
        "year":2018,
        "socket":"LGA 1151-v2",
        "chipset":"Intel H310",
        "category":"Motherboard",
        "img":"h310m-g/m2.jpg",
        "puerto":"PCI express 3.0 x16",
        "fab":"ASRock",
        "format":"ATX",
    },
    {
        "name":"B250M PRO-VH",
        "year":2017,
        "socket":"LGA 1151",
        "chipset":"Intel B250",
        "category":"Motherboard",
        "img":"b250mpro-vh.jpg",
        "puerto":"PCI express 3.0 x16",
        "fab":"MSI",
        "format":"Micro ATX",
    },
    {
        "name":"A320M GAMING PRO",
        "year":2017,
        "socket":"AM4",
        "chipset":"AMD A320",
        "category":"Motherboard",
        "img":"a320mgamingpro.jpg",
        "puerto":"PCI express 3.0 x16",
        "fab":"MSI",
        "format":"Micro ATX",
    },
    {
        "name":"C7H270-CG-ML",
        "year":2017,
        "socket":"LGA 1151",
        "chipset":"Intel H270",
        "category":"Motherboard",
        "img":"c7h270-cg-ml.jpg",
        "puerto":"PCI express 3.0 x16",
        "fab":"SuperMicro",
        "format":"Micro ATX",
    }
])