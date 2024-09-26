import connectDB from "../../../../../config/database";
import urlModel from "../../../../../models/urlModel";

export async function DELETE(req,{params}) {
    
    try {
        await connectDB();
       const deleted = await urlModel.findByIdAndDelete(params._id)
        return Response.json(deleted)
    } catch (error) {
        console.log(error);   
    }
}


export async function PATCH(req, {params}) {
    try {
        await connectDB()
        const body = await req.json()
        const update = await urlModel.findByIdAndUpdate(params._id, body);
        return Response.json(update)
    } catch (error) {
        
    }
}