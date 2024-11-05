import { z } from 'zod';

export const signupSchema =z.object({
    email :z.string().email(),
    password :z.string().min(8)
})

export const todoSchema =z.object({
    title: z.string().min(1),
    description :z.string().min(1),
    done : z.boolean().optional(),
    userId:z.number()
})