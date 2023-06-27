import express from 'express';
import { createUser, deleteUser, getUser, getUsers, search, test, updateUser } from '../controllers/cCrud.js';
const router = express.Router();

// CREATE USER
router.get('/test', test);

// CREATE USER
router.post('/userCreation', createUser);

// DELETE USERS
router.delete('/deleteUser/:id', deleteUser);

// GET ALL USERS
router.get('/getUsers', getUsers);

// UPDATE USER
router.put('/updateUser/:id', updateUser);

// SEARCH
router.get('/search', search);

// GET USER
router.get('/getUser/:id', getUser);

export default router;
