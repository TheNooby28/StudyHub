import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import supabase from 'db.js';

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

supabase.auth.getUser