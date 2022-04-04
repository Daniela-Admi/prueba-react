const productos = [
  {
    id: 1,
    categoria: "Collar",
    name: "Boho",
    price: 230,
    foto: "https://i.postimg.cc/8cVGPQZm/Collar0.jpg",
  },
  {
    id: 2,
    categoria: "Collar",
    name: "Bainha de Ruffle",
    price: 190,
    foto: "https://i.postimg.cc/DwmwNhHS/Collar1.jpg",
  },
  {
    id: 3,
    categoria: "Collar",
    name: "Regata",
    price: 150,
    foto: "https://i.postimg.cc/bvDfxNMR/Collar1.jpg",
  },
  {
    id: 4,
    categoria: "Collar",
    name: "Luna",
    price: 170,
    stock: 20,
    foto: "https://i.postimg.cc/qMSPkdgh/Collar3.jpg",
  },
  {
    id: 5,
    categoria: "Collar",
    name: "Vitoria",
    price: 180,
    stock: 20,
    foto: "https://i.postimg.cc/tTzbTv80/Collar2.jpg",
  },
  {
    id: 6,
    categoria: "Collar",
    name: "Orion",
    price: 150,
    stock: 20,
    foto: "https://i.postimg.cc/vmdCVLrG/Collar5.jpg",
  },
  {
    id: 7,
    categoria: "Collar",
    name: "Acua",
    price: 140,
    stock: 20,
    foto: "https://i.postimg.cc/5tqTqYgL/Collar6.jpg",
  },
  {
    id: 8,
    categoria: "Tobillera",
    name: "Valencia",
    price: 170,
    stock: 20,
    foto: "https://i.postimg.cc/RV6YpbGM/Tobillera0.jpg",
  },
  {
    id: 9,
    categoria: "Tobillera",
    name: "Milanie",
    price: 140,
    stock: 20,
    foto: "https://i.postimg.cc/8P202BnL/Tobillera1.jpg",
  },
  {
    id: 10,
    categoria: "Tobillera",
    name: "Vermela",
    price: 140,
    stock: 20,
    foto: "https://i.postimg.cc/CxbQSBWX/Tobillera2.jpg",
  },
];

//emulador de retraso web
export const getFetch = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
      //tarea asincronica
    }, 2000);
  } else {
    reject("400 - not found");
  }
});
