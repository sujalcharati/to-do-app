import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


async function insertUser(email: string, password: string) {
    const res = await prisma.user.create({
      data: {
          email,
          password,
      }
    })
    console.log(res);
  }
  
  insertUser("admin1@gmail.com", "12345634")



// async function createTodo(userId: number, title: string, description: string) {
//   const user = await prisma.user.findUnique({
//     where: { id: userId },
//   });

//   if (!user) {
//     throw new Error(`User with id ${userId} does not exist`);
//   }

//   const todo = await prisma.todo.create({
//     data: {
//       title,
//       description,
//       userId
//     },
//   });
//   console.log(todo);

// }

// createTodo(1, "go to gym", "go to gym and do 10 pushups");