import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const deptRouter = Router();

/// GET DEPARTMENT
deptRouter.get('/dashboard/dept', async (req, res) => {
  const depts = await prisma.dept.findMany();
  res.send(`${JSON.stringify(depts)}`);
});

/// ADD DEPARTMENT
deptRouter.post('/dashboard/dept', async (req, res) => {
	const { aka, desc } = req.body;
	const newDept = await prisma.dept.create({
		data: {
			aka: aka,
			desc: desc,
		},
	});
  res.send(`${JSON.stringify(newDept)}`);
});

/// EDIT DEPARTMENT
deptRouter.put('/dashboard/dept', async (req, res) => {
  const { id, aka, desc } = req.body;
  const dept = await prisma.dept.update({
    where: {
      id: id,
    },
    data: {
      aka: aka,
      desc: desc,
    },
  });
  res.send(`${JSON.stringify(dept)}`);
});

/// DELETE DEPARTMENT
deptRouter.delete('/dashboard/dept', async (req, res) => {
  const {id} = req.body;
  const dept = await prisma.dept.delete({
    where: {
      id: id
    }
  });
	res.send(`department deleted.`)
});