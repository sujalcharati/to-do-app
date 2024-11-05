import express from 'express';
const app = express();
import { PrismaClient} from "@prisma/client";
import { signupSchema, todoSchema } from "./schemas/validation";
import { Request, Response } from 'express';
import { ZodError } from "zod";

const prisma = new PrismaClient();

app.use(express.json());

app.post('/signup', async (req: Request, res: Response) => {
  try {
    const { email, password } = signupSchema.parse(req.body);

    const userdetail = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    res.status(201).json({ msg: 'user created successfully', userdetail });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.message });
    } else  {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});



app.post('/todo', async (req: Request, res: Response) => {
  try {
    const { title, description, done, userId } = todoSchema.parse(req.body);
    const tododetail = await prisma.todo.create({
      data: {
        title,
        description,
        done,
        userId
      },
    });
    res.status(201).json({ msg: "todo successfully added", tododetail });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});
app.listen(3000,()=> console.log('the server is running on port 3000'));
