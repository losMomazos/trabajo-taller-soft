db = db.getSiblingDB("meme");
db.cpus.drop();
db.cpus.insertMany([
{
    "name":"Celeron G3930",
    "fab":"Intel",
    "frequency":"2900MHz",
    "socket":"LGA 1151",
    "category":"Cpu",
    "img":"celeron_g3930.jpg",
    "nucleos":2,
},{
    "title":"Sempron 2650",
    "fab":"AMD",
    "frequency":"1450MHz",
    "socket":"FS1b",
    "category":"Cpu",
    "img":"sempron_2650.jpg",
    "nucleos":2,
},
{
    "title":"Pentium G4400",
    "fab":"Intel",
    "frequency":"3300MHz",
    "socket":"LGA 1151",
    "category":"Cpu",
    "img":"pentium_g4400.jpg",
    "nucleos":2,
},
{
    "title":"Ryzen 3 1200",
    "fab":"AMD",
    "frequency":"3100MHz",
    "socket":"AM4",
    "category":"Cpu",
    "img":"ryzen_3_1200.jpg",
    "nucleos":4,
},
{
    "title":"Core i3-7350k",
    "fab":"Intel",
    "frequency":"4200MHz",
    "socket":"LGA 1151",
    "category":"Cpu",
    "img":"Core_i3_7350k.jpg",
    "nucleos":2,
},
{
    "title":"Core i3-8100",
    "fab":"Intel",
    "frequency":"3600MHz",
    "socket":"LGA 1151-v2",
    "category":"Cpu",
    "img":"corei3-8100.jpg",
    "nucleos":4,
},

])