'use server'
import { revalidateTag } from "next/cache";
export async function getURL(url) {
   try {
    const res = await fetch(url, {next : {tags : ["code"]}, cache : "no-store"})
    const data = await res.json();
    return data
   } catch (error) {
    console.log(error);
   }
}

export async function createURL(url,inputValue) {
 try {
    const res = await fetch(url, {method : "POST",body : JSON.stringify({url :inputValue})})
    const data = await res.json();
    revalidateTag("code")
    return data
 } catch (error) {
    console.log(error);
    
 }
}


export async function deleteUrl(url) {
    try {
        const res = await fetch(url,{method : "DELETE"})
        const data = await res.json()
    revalidateTag("code")
        return data
    } catch (error) {
        console.log(error); 
    }
}


export async function updateUrl(url, updateValue) {
    try {
        const res = await fetch(url, {method:"PATCH", body:JSON.stringify({url : updateValue})})
        const data = await res.json();
        revalidateTag("code")
        return data
    } catch (error) {
        console.log(error);
        
    }
}
