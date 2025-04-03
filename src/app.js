import express from 'express'
import restaurantsRouter from './routes/restaurants.routes.js';
import indexRouter from './routes/index.routes.js';

const app = express()

app.use(express.json())
app.use(indexRouter)
app.use('/api', restaurantsRouter)
app.use((req, res, next) => {
    res.status(404).json({
        message : 'Esa ruta no existe'
    })
})

export default app