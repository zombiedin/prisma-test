import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const userRouter = Router();

/// GET USERS
userRouter.get('/dashboard', async (req, res) => {
  const Users = await prisma.user.findMany();
  const allHc = await prisma.user.aggregate({
    _count: { id: true }
  });
  const response = {
    "users": Users,
    "allHc": allHc
  }
  res.send(`${JSON.stringify(response)}`);
});

/// ADD NEW USER
userRouter.post('/dashboard', async (req, res) => {
  const {email, fname, lname, dept} = req.body;
  const user = await prisma.user.create({
    data: {
      email: email,
      firstName: fname,
      lastName: lname,
      department: dept,  
    },
  });
  res.send(`Created user: ${JSON.stringify(user)}`);
});

/// EDIT USER
userRouter.put('/dashboard', async (req, res) => {
  const {email, fname, lname, dept} = req.body;
  const user = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      firstName: fname,
      lastName: lname,
      department: dept,
    },
  });
  res.send(`Updated user user: ${JSON.stringify(user)}`);
});

/// DELETE USER
userRouter.delete('/dashboard', async (req, res) => {
  const {email} = req.body;
  const user = await prisma.user.delete({
    where: {
      email: email
    }
  });
  res.send(`User deleted`);
});