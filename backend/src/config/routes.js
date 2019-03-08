const express = require('express')
const BillingCycle = require('../api/billingCycle/billingCycleService')

module.exports = function (server) {

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Cicle de Pagamento
    BillingCycle.register(router, '/billingCycles')
}

