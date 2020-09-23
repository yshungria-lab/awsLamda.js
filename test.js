'use strict';

exports.handler = (event, context, callback) => {
  const done = (err, res) =>
    callback(null, {
      statusCode: err ? '400' : '200',
      body: err ? err.message : res,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  switch (event.httpMethod) {
    case 'GET':
      done(null, 'GET fue llamado');
      break;
    default:
      done(new Error(`No esta soportado ese metodo "${event.httpMethod}"`));
  }
};
