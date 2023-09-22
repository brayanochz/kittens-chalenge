import fs from 'fs'
import { Kitty } from '../types/kitty';

export class KittyService {
    private kitties: Kitty[] = [];

    constructor() {
        this.kitties = JSON.parse(fs.readFileSync('./data/kittens.json', 'utf8'));
    }

    find = (): Kitty[] => {
        return this.kitties.map((kitty) => this.setImageUrl(kitty));
    }

    findById = (id: number): Kitty => {
        const kitty = this.kitties.find(kitty => kitty.id === id);
        return this.setImageUrl(kitty)
    }

    setImageUrl = (kitty: Kitty) => {
        kitty.imageFileName = `http://localhost:3000/images/${kitty.imageFileName}`;
        return kitty
    }

}