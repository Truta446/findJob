'use strict'

const { test, trait } = use('Test/Suite')('Session')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

trait('Test/ApiClient')

test('It should return JWT token whem session created.', async ({ client }) => {
  const user = await User.create({
    name: 'Juan Versolato Lopes',
    email: 'juan.versolato@outlook.com',
    password: '123456'
  })

  const response = await client
    .post('/sessions')
    .send({
      email: 'juan.versolato@outlook.com',
      password: '123456'
    })
    .end()
})
