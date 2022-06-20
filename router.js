import  express  from "express";
import SekolahController from "./controllers/SekolahController.js";

const Router = express.Router();

Router.get('/sekolah', SekolahController.getAll)
Router.get('/sekolah/:id', SekolahController.getId)
Router.post('/sekolah', SekolahController.input)
Router.patch('/sekolah/:id', SekolahController.update)
Router.delete('/sekolah/:id', SekolahController.delete)

// Router.get('/sekolah/:id', (req, res) => {
//     res.send('ok')
// })
// Router.post('/sekolah', (req, res) => {
//     res.send('ok')
// })
// Router.patch('/sekolah', (req, res) => {
//     res.send('ok')
// })
// Router.delete('/sekolah', (req, res) => {
//     res.send('ok')
// })


export default Router;