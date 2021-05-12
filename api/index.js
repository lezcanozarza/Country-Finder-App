//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const fetch = require('node-fetch');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    Country.findAll()
    .then(response => {
      if (!response) {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(response => {

        response.forEach(c => {

        	var paises = Country.findOrCreate({
        	where:{
        		id: c.alpha3Code,
        		nombre: c.name,
        		bandera: c.flag,
        		continente: c.region,
        		capital: c.capital,
        		subregion: c.subregion,
        		area: c.area ? c.area : null,
        		poblacion: c.population ? c.population : 0
        	}
        })
        })
        })
      }
    })



  });
});
