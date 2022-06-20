import { Sequelize, DataTypes }  from 'sequelize';
import Nama from "../model/Sekolah.js";

const SekolahController = {
    getAll : async (req, res) => {


    try{
        const data = await Sekolah.findAll({
            attributes : ['id', 'Nama', "Alamat"]
        })
        res.json(data)


    } catch (error) {
        res.status(404).json({msg : error})
    }

    },
    getId : async (req, res) => {


        try{
            const data = await Sekolah.findAll({
                attributes : ['id', 'Nama', "Alamat"],
                where : { id : req.params.id }
            })
            res.json(data)
        } catch (error) {
    
        }
    },
    input : async (req, res) => {


            try{
            const data = await Sekolah.create(req.body)
            res.status(201).json({ msg : "sukses" })
            } catch (error) {
            res.status(404).json({msg : error})
        
            }

    },
    update : async (req, res) => {


            try{
            const data = await Sekolah.update(req.body, {
                where : { id : req.params.id }
            })
            res.status(201).json({ msg : "sukses" })
            } catch (error) {
            res.status(404).json({msg : error})
            }
    },
    delete : async (req, res) => {


            try{
            const data = await Sekolah.destroy({
                    where : { id : req.params.id }
            })
            } catch (error) {
            res.status(404).json({msg : error})
            }
    }
}

export default SekolahController