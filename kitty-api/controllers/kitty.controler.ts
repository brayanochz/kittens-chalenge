import express, { Request, Response } from "express";
import { KittyService } from "../services/kitty.service";

export class KittyController {

    kittyService: KittyService;

    constructor() {
        this.kittyService = new KittyService()
    }

    getKitties = (req: Request, res: Response) => {
        const kitties = this.kittyService.find();
        res.json(kitties);
    }

    getKitty = (req: Request, res: Response) => {
        const kittyId = parseInt(req.params.id)
        const kitty = this.kittyService.findById(kittyId);
        res.json(kitty);
    }

    routes() {
        const router = express.Router()

        router.get('/', this.getKitties)
        router.get('/:id', this.getKitty)

        return router
    }
}