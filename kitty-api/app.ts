import express from 'express';
import { KittyController } from './controllers/kitty.controler';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors())

app.use('/images', express.static('images'))

const kittyController = new KittyController()

app.use('/kittens', kittyController.routes());

app.get('/k', kittyController.getKitties)

app.listen(port, () => {
  console.log(`Kitty Api run at port ${port}.`);
});