export interface Product {
    id: number,
    description: string,
    title: string,
    category: string,
    image:string,
    price:number
    rating: {
        rate: number,
        count: number
    }
    

}