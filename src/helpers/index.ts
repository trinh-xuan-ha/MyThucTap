
const getData = async () => {
    const res = await fetch("http://localhost:3000/clothes");
    if (!res.ok) {
        throw new Error ("failed to fetch");
    }
    return res.json();
}
export const getSingleProduct = async(id:number) => {
    const item = await getData()
    const singleItem = await item.find((product:any) => product.id === id)
    return singleItem;
}