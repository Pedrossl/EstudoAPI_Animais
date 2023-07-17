import { sequelize } from "../databases/conecta.js";
import { Animais } from "../models/animais.js";
import { Op } from "sequelize";

export const animaisIndex = async (req, res) => {
    try {
      const animal = await Animais.findAll();
      res.status(200).json(animal)
    } catch (error) {
      res.status(400).send(error)
    }
}

export const animalGet = async (req, res) => {
    const { id } = req.params
    try {
      const animal = await Animais.findByPk(id);
      res.status(200).json(animal)
    } catch (error) {
      res.status(400).send(error)
    }
}

export const animalCreate = async (req, res) => {
    const { nome, raca, idade, custo_mensal } = req.body
  
    // se não informou estes atributos
    if (!nome || !raca || !idade || !custo_mensal) {
      res.status(400).json({ id: 0, msg: "Erro... Informe nome, raca, idade e custo_mensal do jogador." })
      return
    }
  
    try {
      const animal = await Animais.create({
        nome, raca, idade, custo_mensal
      });
      res.status(201).json(animal)
    } catch (error) {
      res.status(400).send(error)
    }
}

export const animaisUpdate = async (req, res) => {
    const { id } = req.params
    const { nome, raca, idade, custo_mensal } = req.body
  
    // se não informou estes atributos
    if (!nome || !raca || !idade || !custo_mensal) {
        res.status(400).json({ id: 0, msg: "Erro... Informe nome, raca, idade e custo_mensal do animal." })
        return
      }
  
    try {
      const animal = await Animais.update({
        nome, raca, idade, custo_mensal
      }, {
        where: { id }
      });
      res.status(200).json(animal)
    } catch (error) {
      res.status(400).send(error)
    }
  }

export const animalDel = async (req, res) => {
    const { id } = req.params
    try {
      const animal = await Animais.destroy({
        where: { id }
      });
      res.status(200).json(animal)
    } catch (error) {
      res.status(400).send(error)
    }
}


export const animalPesqRaca = async (req, res) => {
    // const pesq = req.params.pesq  
    const { pesq } = req.params
    try {
      const animal = await Animais.findAll({
        where: {
          raca: {
            [Op.substring]: pesq
          }
        }
      });
      res.status(200).json(animal)
    } catch (error) {
      res.status(400).send(error)
    }
  }
  
  export const animalValor = async (req, res) => {
    // const pesq = req.params.pesq  
    const { valor } = req.params
    try {
      const animal = await Animais.findAll({
        where: {
          custo_mensal: {
            [Op.gte]: valor
          }
        }
      });
      res.status(200).json(animal)
    } catch (error) {
      res.status(400).send(error)
    }
  }


  export const animaisPesq_nome_raca_idade= async (req, res) => {
    try {
      const animal = await Animais.findAll({
        attributes: ['nome', 'raca', 'idade'],
        order: [
          ['idade', 'ASC']
        ]
      });
      res.status(200).json(animal)
    } catch (error) {
      res.status(400).send(error)
    }
 }
  
 export const animaisCustoTotalRaca = async (req, res) => {
    const {pesq} = req.params
    try {
      const custoTotal = await Animais.sum('custo_mensal',{where: {
        raca: {
          [Op.substring]: pesq
        }
      }})
      res.status(200).json({custoTotal})
    } catch (error) {
      res.status(400).send(error)
    }
  }

  export const animaisCustoTotal = async (req, res) => {
    try {
      const custoTotal = await Animais.sum('custo_mensal')
      res.status(200).json({custoTotal})
    } catch (error) {
      res.status(400).send(error)
    }
  }