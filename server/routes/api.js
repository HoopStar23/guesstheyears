import express from 'express';
import { getEvents, getLeaderBoard } from '../services/gameService.js';

const router = express.Router();

router.get('/leaderboard', async (req, res) => {
    try{
        const leaderboard = await getLeaderBoard();
        res.json(leaderboard);
    }catch (e){
        res.status(500).json({e: 'Error al obtener el leaderboard'})
    }
});

router.get('/events/:year', async (req,res) =>{
    try{
        const events = await getEvents(parseInt(req.params.year));
        console.log('Año recibido:', req.params.year, 'Parseado:', parseInt(req.params.year));
        res.json(events);
    }catch (error){
        res.status(500).json({error: error.message});
    }
});

export default router;