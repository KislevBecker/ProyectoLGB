import express from "express";
import { engine } from 'express-handlebars';//added
import IndexRoutes from "./routes/index.routes";
import path from "path";
import './database'
import morgan from 'morgan'
import bodyParser from 'body-parser';

const app = express();

// Configura Express para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, "views"));

app.engine('.hbs',
engine({
    layoutsDir: path.join(app.get('views'),'layouts'),
    defaultLayout:'main',
    extname:'.hbs'
})
)
app.set('view engine', '.hbs');

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//rutas
app.use(IndexRoutes);

export default app;
