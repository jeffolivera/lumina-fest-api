// index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());  // Habilita CORS para permitir requisições externas

const PORT = 3000;

// Simulando data do evento e previsão para três dias
const EVENT_DATE = "2025-06-15";
const CITY = "Aurora";

// Rota para buscar a previsão
app.get('/previsao', async (req, res) => {
  try {
    // Previsão fictícia para os 3 dias
    const previsao = [
      {
        dia: "15-06-2025",
        clima: "Ensolarado com nuvens",
        temperatura: "27°C"
      },
      {
        dia: "16-06-2025",
        clima: "Parcialmente nublado",
        temperatura: "25°C"
      },
      {
        dia: "17-06-2025",
        clima: "Possibilidade de chuvas esparsas",
        temperatura: "23°C"
      }
    ];

    res.json(previsao);  // Retorna a previsão para os 3 dias
  } catch (e) {
    res.status(500).json({ error: "Erro ao obter previsão" });
  }
});

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
