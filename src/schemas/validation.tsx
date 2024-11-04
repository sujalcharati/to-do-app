const z =require('zod');

export const signupSchema =z.object({
    email :z.string().email(),
    password :z.string().min(8)
})

export const todoSchema =z.object({
    todo: z.string().min(1),
    description :z.string().min(1),
    done : z.boolean().optional()
})