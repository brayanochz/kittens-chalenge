import fs from 'fs'
import { Kitty } from '../types/kitty';

export class KittyService {
    private kitties: Kitty[] = [];

    constructor() {
        this.kitties = JSON.parse(fs.readFileSync('./data/kittens.json', 'utf8'));
    }

    find = (): Kitty[] => {
        return this.kitties;
    }

    findById = (id: number): Kitty => {
        return this.kitties.find(kitty => kitty.id === id);
    }

}