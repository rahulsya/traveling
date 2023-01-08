import { StaticImport } from "next/image"

export interface Hotels{
    id:number,
    name:string,
    type:string,
    imageUrl:string | StaticImport ,
    country:string,
    city:string,
    price:number,
    unit:string
}

interface image{
    id:string,
    url:string
}

interface features{
    id:string,
    qty:number,
    name:string,
    imageUrl:string
}

export interface featuredHotel{
    id:number,
    name:string,
    hotels:Array<Hotels>
}

export interface DetailHotel extends Hotels{
    
}