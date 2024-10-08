"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import path from "path"

interface User {
    id: number;
    name: string;
    email: string;
}

const formSchema = z.object({
    fullname: z.string().min(2).max(50),
    email: z.string().email(),
    password: z.string().min(6).max(50),
    confirmPassword: z.string().min(6).max(50),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
}).refine(async (data) => {
    // Check if email exists in backend
    const emailCheckURL = `${process.env.NEXT_PUBLIC_API_USERDATA}/check-email`;
    const response = await fetch(emailCheckURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
    });

    const emailCheckResult = await response.json();
    return !emailCheckResult.exists;
}, {
    message: "Email already exists",
    path: ["email"],
});

type formValues = z.infer<typeof formSchema>

export default function RegisterPage() {
    const [emailExists, setEmailExists] = useState(false);

    const form = useForm<formValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Check if email exists
        const emailCheckURL = `${process.env.NEXT_PUBLIC_API_USERDATA}/check-email`; // Update this URL to your actual endpoint
        try {
            const emailCheckResponse = await fetch(emailCheckURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: values.email }),
            });

            const emailCheckResult = await emailCheckResponse.json();
            if (emailCheckResult.exists) {
                setEmailExists(true);
                return;
            } else {
                setEmailExists(false);
            }

            // If email does not exist, submit the form
            const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdr-LPgoLSlq6m-HHkDPpV2dG3Sudg_74TGCtSBBX3dMu-H-g/formResponse";
            const formData = new FormData();
            formData.append("entry.883892408", values.fullname);
            formData.append("entry.2033399428", values.email);
            formData.append("entry.85446810", values.password);

            try {
                const response = await fetch(googleFormURL, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' // Chế độ no-cors để tránh lỗi CORS
                });

                console.log("Dữ liệu đã được gửi thành công.");
                alert("thnh công")
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        } catch (error) {
            console.error('Error checking email:', error);
            setEmailExists(true);
            

        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 my-3">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Full Name" {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                {emailExists && (
                                    <p className="text-red-500">Email đã tồn tại. Vui lòng nhập email khác.</p>
                                )}
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" type="password" {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Confirm Password" type="password" {...field} />
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full uppercase" type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}