const items = [
    {
        id: 1, 
        title: "Fertilizante Treemix",
        precio: 500,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLUeW0qZOI0Vt_JgcUoSHnTvhNASKkIQ83UQMN_3Rcy3rkA_-HgqCoByUrXwPtatsHVQ&usqp=CAU",
        stock: 5,
        initial: 1,
    },
    {
        id: 2, 
        title: "Micorrizas Amazonia",
        precio: 800,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9J9hpRXGl9oDJ-CH5skK8rKfBEucQIqv0gQ&usqp=CAU",
        stock: 20,
        initial: 2,
    },{
        id: 3, 
        title: "Revienta cogollos",
        precio: 1200,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IRqJv_hAQN_FiqDIscFnR1wmJdpJiprl0Q&usqp=CAU",
        stock: 3,
        initial: 3,
    },
];

export default function getItems(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (items);
        }, 2000)
    }
    )
}

export function getAnItem(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let itemFind = items.find((item) => item.id === Number (id));
            if (itemFind) resolve (itemFind);
            else reject (new Error("Item no encontrado"));
            
        }, 2000)
    }
    )
}
