// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/IndexController'


const router = Router();
router.get('/findAll', indexCtrl.JobCtrl.findAll);
router.get('/findByParams/:desc/:location/:fullTime', indexCtrl.JobCtrl.findByParams);
router.get('/findByJobId/:jobId', indexCtrl.JobCtrl.findByJobId);
export default router;
