"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the form schema using zod
const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(50),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
    // Initialize the form with react-hook-form and zod resolver
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // Define the submit handler
    async function onSubmit(values: FormValues) {
        const { email, password } = values;
        try {
            const response = await fetch(`https://script.google.com/macros/s/AKfycbyHiwxEQ0MyzBbLXz66ORKdi8Pi8Cwk2_kwj5Xu5W8o9OKiwM1oNBOBIRS32JKNVhJM/exec?email=${email}&password=${password}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            if (data.status === "Success") {
                alert(`Welcome ${data.user.name}`);
            } else {
                alert(data.status);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 my-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormDescription>
                                    {/* Add any description if needed */}
                                </FormDescription>
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
                                    <Input type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormDescription>
                                    {/* Add any description if needed */}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full uppercase" type="submit">Login</Button>
                </form>
            </Form>
        </div>
    );
}