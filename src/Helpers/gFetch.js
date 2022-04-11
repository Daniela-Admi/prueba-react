const productos = [
  {
    id: 1,
    category: "Collares",
    name: "Boho",
    price: 230,
    stock: 12,
    photo: "https://i.postimg.cc/8cVGPQZm/Collar0.jpg",
  },
  {
    id: 2,
    category: "Collares",
    name: "Bainha de Ruffle",
    price: 190,
    stock: 24,
    photo: "https://i.postimg.cc/DwmwNhHS/Collar1.jpg",
  },
  {
    id: 3,
    category: "Collares",
    name: "Regata",
    price: 150,
    stock: 20,
    photo: "https://i.postimg.cc/bvDfxNMR/Collar1.jpg",
  },
  {
    id: 4,
    category: "Collares",
    name: "Luna",
    price: 170,
    stock: 8,
    photo: "https://i.postimg.cc/qMSPkdgh/Collar3.jpg",
  },
  {
    id: 5,
    category: "Collares",
    name: "Vitoria",
    price: 180,
    stock: 5,
    photo: "https://i.postimg.cc/tTzbTv80/Collar2.jpg",
  },
  {
    id: 6,
    category: "Collares",
    name: "Orion",
    price: 150,
    stock: 10,
    photo: "https://i.postimg.cc/vmdCVLrG/Collar5.jpg",
  },
  {
    id: 7,
    category: "Collares",
    name: "Acua",
    price: 140,
    stock: 12,
    photo: "https://i.postimg.cc/5tqTqYgL/Collar6.jpg",
  },
  {
    id: 8,
    category: "Tobillera",
    name: "Valencia",
    price: 170,
    stock: 15,
    photo: "https://i.postimg.cc/RV6YpbGM/Tobillera0.jpg",
  },
  {
    id: 9,
    category: "Tobillera",
    name: "Milanie",
    price: 140,
    stock: 10,
    photo: "https://i.postimg.cc/8P202BnL/Tobillera1.jpg",
  },
  {
    id: 10,
    category: "Tobillera",
    name: "Vermela",
    price: 140,
    stock: 8,
    photo: "https://i.postimg.cc/CxbQSBWX/Tobillera2.jpg",
  },
  {
    id: 11,
    category: "Aros",
    name: "Trust",
    price: 40,
    stock: 8,
    photo: "https://i.postimg.cc/k5mr3Rws/0219df56612879864c46c58efa3512f2.jpg",
  },
  {
    id: 12,
    category: "Aros",
    name: "Bohemia",
    price: 50,
    stock: 5,
    photo: "https://i.postimg.cc/gJ4bKcVD/9c18c84d15d5514d1daf9524c33d74ee.jpg",
  },
  {
    id: 13,
    category: "Aros",
    name: "Persa",
    price: 80,
    stock: 12,
    photo: "https://i.postimg.cc/XNDTNzQp/488b597adbb24268bcb6b7d3b9fad1ac.jpg",
  },
  {
    id: 14,
    category: "Otros",
    name: "Diadema Diana",
    price: 90,
    stock: 10,
    photo: "https://i.postimg.cc/cC9Zd16H/3ba30c5d2e419cb55367b9ba3087d70f.jpg",
  },
  {
    id: 15,
    category: "Otros",
    name: "Liga con Cadenas Iris",
    price: 70,
    stock: 5,
    photo: "https://i.postimg.cc/T1yNWTCh/ed39815a4b14ee9783789c6acc022281.jpg",
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
