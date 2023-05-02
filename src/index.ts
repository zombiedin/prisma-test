import express from 'express';
import { PrismaClient } from '@prisma/client';
import { routes } from './routers/index'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
