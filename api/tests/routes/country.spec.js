/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

// describe('Ruta Post', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   describe('POST /countries', () => {
//     it('responds with 200', () => agent.post('/countries').expect(200))
//     it('should return the detail of the country', (done) => 
//       agent.post('/countries')
//       .send({
//         id: ["BHR","AUS","ARM","ABW","AGO"],
//         nombre: "futbol",
//         dificultad: "1",
//         duracion: "dos horas",
//         temporada: "verano"
//         }).then(function(res){
//           expect(res.body).to.deep.equal({
//         id: ["BHR","AUS","ARM","ABW","AGO"],
//         nombre: "futbol",
//         dificultad: "1",
//         duracion: "dos horas",
//         temporada: "verano"})
//         })
//       )
//   });
// });
