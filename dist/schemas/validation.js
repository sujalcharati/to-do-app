"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = exports.signupSchema = void 0;
const z = require('zod');
exports.signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});
exports.todoSchema = z.object({
    todo: z.string().min(1),
    description: z.string().min(1),
    done: z.boolean().optional()
});
