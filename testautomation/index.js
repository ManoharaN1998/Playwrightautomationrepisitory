const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = 3000;

// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample API',
      version: '1.0.0',
      description: 'Swagger API documentation',
    },
  },
  apis: ['./index.js'], // files with API docs
};

const swaggerSpec = swaggerJsdoc(options);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Sample API
/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Sample Hello API
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/hello', (req, res) => {
  res.send('Hello Swagger!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
