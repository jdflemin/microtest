import * as express from 'express';
import weightClass from '../model/weightclass';

let router = express.Router();

router.get('/', (req, res) => {
  weightClass.find().then((foundWC) => res.json(foundWC))
})


export default router
