import clientPromise from "@/utils/mongodb";
import { Request, Response } from "express";
import { ObjectId } from "bson";

export default async (req: Request, res: Response) => {
    
    if( !['GET', 'POST'].includes(req.method) ){
        res.status(405).send({ message: 'Only POST and GET requests allowed' })
        return
    }
    
    if(req.method == 'GET'){
        try {
            const client = await clientPromise;
            const db = client.db("openkitchen-v1");
     
            const recipes = await db
                .collection("recipes")
                .find({})
                .toArray();
     
            res.json(recipes);
        } catch (e) {
            console.error(e);
        }
    }

    if(req.method == 'POST'){
        try {
            const client = await clientPromise
            const db = client.db("openkitchen-v1")
            const col = db.collection("recipes")

            let recipeToUpdate = req.body
            const id = recipeToUpdate._id
            delete recipeToUpdate._id // Delete id to avoid updating it

            const p = id ? await col.updateOne({_id: new ObjectId(id)}, {$set: recipeToUpdate})
                        : await col.insertOne(recipeToUpdate)
            
            res.json(p)
        } catch (e) {
            console.error(e)
        }
    }
};