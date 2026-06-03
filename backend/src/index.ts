import express, { type Request, type Response } from 'express'

// Instance de l'application Express
const app = express()
const PORT = 8000

// Middlewares
app.use(express.json())

// Routes
app.get('/', (_req: Request, res: Response) =>{
    res.json({ message: 'Hello from Kash API'})
})

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Serveur
app.listen(PORT, () =>{
    console.log(`Le serveur tourne sur http://localhost:${PORT}`)
})