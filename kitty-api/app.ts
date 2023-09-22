import express, { Request, Response, NextFunction } from 'express';
import { KittyController } from './controllers/kitty.controler';

const app = express();
const port = 3000;

const kittyController = new KittyController()

app.use('/kitty', kittyController.routes());

app.get('/k', kittyController.getKitties)

app.listen(port, () => {
  console.log(`Kitty Api run at port ${port}.`);
});