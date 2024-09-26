import connectDB from "../../../../config/database";
import urlModel from "../../../../models/urlModel";

export async function GET() {
    try {
        await connectDB();
       const data = await urlModel.find()
       return Response.json(data)
       
    } catch (error) {
        return {errMsg : error.message}
    }
}

export async function POST(req) {
    try {
        await connectDB();
        const urlBody = await req.json()
        const newUrl = await urlModel.create(urlBody)
        console.log(newUrl);
        return Response.json(newUrl)
        
    } catch (error) {
        return Response.json(error)
    }
}


// export async function DELETE(id) {
//     try {
//         await connectDB();
//         const deleted = await urlModel.findOneAndDelete({id:id})
//         return Response.json(deleted)
//     } catch (error) {
//         console.log(error);
        
//     }
// }