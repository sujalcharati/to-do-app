import express from 'express';
const app = express();
import { PrismaClient} from "@prisma/client";
import { signupSchema } from "./schemas/validation";
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

app.listen(3000,()=> console.log('the server is running on port 3000'))

// app.post('/login', async (req, res) => {
//   const { email, password } = signupSchema.parse(req.body);

//   const user = await prisma.user.findUnique({ where: { email } });
//   if (!user || !(await bcrypt.compare(password, user.password))) {
//     return res.status(400).json({ error: 'Invalid credentials' });
//   }

//   const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
//   res.json({ token });
// });

