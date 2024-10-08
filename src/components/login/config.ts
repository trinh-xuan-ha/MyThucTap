import { z } from 'zod'
const configSchema = z.object({
    NEXT_PUBLIC_API_USERDATA: z.string()
})
const configProject = configSchema.safeParse({
    NEXT_PUBLIC_API_USERDATA: process.env.NEXT_PUBLIC_API_USERDATA
})
if(!configProject.success) {
    console.error(configProject.error.issues)
    throw new Error('check file .env error')
}
const envConfig = configProject.data
export default envConfig