const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    // antes de tudo 
    beforeEach( async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    // depois de tudo
    afterAll(async () => {
        await connection.destroy()
    })

    // Teste em si 
    it('should be able to create new ong',  async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'idDaOng)
            .send({
                name: "APAD2",
                email: "contato@apad.com.br",
                whatsapp: "4700000000",
                city: "Rio do Sul",
                uf: "SC"
            })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})