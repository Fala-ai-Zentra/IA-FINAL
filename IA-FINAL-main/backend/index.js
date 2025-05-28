const express = require('express');
const cors = require('cors');
require('dotenv').config();

const iaHotRoutes = require('./routes/iaHotRoutes');
const iaDeliveryRoutes = require('./routes/iaDeliveryRoutes');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/ia/hot', iaHotRoutes);
app.use('/ia/delivery', iaDeliveryRoutes);
app.use('/tokens', tokenRoutes);

app.get('/', (req, res) => {
  res.send('IA Mutante está viva!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
