// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();
router.post('/signin', indexCtrl.AuthCtrl.signin);

export default router;
