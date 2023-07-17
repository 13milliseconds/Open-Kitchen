import clientPromise from "@/utils/mongodb";
import type {Recipe} from "@/interfaces"
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
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
};