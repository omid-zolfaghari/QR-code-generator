import { Schema, model, models } from "mongoose";

const urlSchema = new Schema({
    url: String
})

const urlModel =models.url || model("url", urlSchema)

export default urlModel

