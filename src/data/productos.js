const productos = [
    {
        id: "1",
        nombre: "Base líquida natural",
        descripcion: "Unifica el tono de tu piel con una textura liviana",
        precio: 3500,
        categoria: "maquillaje",
        imagen: "https://via.placeholder.com/200"
    },
    {
        id: "2",
        nombre: "Crema hidratante",
        descripcion: "Ideal para pieles sensibles y secas",
        precio: 4200,
        categoria: "skincare",
        imagen: "https://via.placeholder.com/200"
    },
    {
        id: "3",
        nombre: "Labial rosa",
        descripcion: "Color intenso con acabado mate",
        precio: 2500,
        categoria: "maquillaje",
        imagen: "https://via.placeholder.com/200"
    }
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    });
};

export const getProductoPorId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find((prod) => prod.id === id));
        }, 1000);
    });
};

