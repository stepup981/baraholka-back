import { Router } from "express";
import userController from "../conntrollers/user-controller.js";
import {body} from 'express-validator'

const router = new Router();

router.post('/registration', 
  body('email').isEmail(),
  body('password').isLength({min: 3, max: 32}),
  userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

export default router