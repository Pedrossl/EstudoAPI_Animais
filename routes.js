import { Router } from "express"
import { animaisCustoTotal, animaisCustoTotalRaca, animaisIndex, animaisPesq_nome_raca_idade, animaisUpdate, animalCreate, animalDel, animalGet, animalPesqRaca, animalValor } from "./controllers/animaisController.js"

const router = Router()
 

.get('/animais', animaisIndex)
.get('/animais/ordem/idade',animaisPesq_nome_raca_idade)
.get('/animais/:id', animalGet)
.get('/animais/pesq/:pesq',animalPesqRaca)
.get('/animais/custo/total',animaisCustoTotal)
.get('/animais/custo/raca/:pesq', animaisCustoTotalRaca)   
.get('/animais/custo/:valor',animalValor)
.post('/animais/create', animalCreate)
.put('/animais/update/:id', animaisUpdate)
.delete('/animais/del/:id',animalDel)


export default router
