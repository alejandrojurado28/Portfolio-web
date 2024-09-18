"use client"

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const ContactForm = () => {

    const [ successForm, setSuccessForm ] = useState(false)

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string(),
    })

    const form = useForm<z.infer<typeof formSchema>> ({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        }
    })

    const onSubmit = async ( values: z.infer<typeof formSchema> ) => {
        const response = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(values)
        })
        if (response.status === 200) {
            setSuccessForm(true)
        }
    }

    return (
        <Form {...form}>
            {successForm ? (
                <h4>El formulario se ha enviado con éxito</h4>
            ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input 
                                        placeholder="Your name"
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input 
                                        placeholder="Your email"
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea 
                                        placeholder="Escribe tu mensaje..."
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Enviar</Button>
                </form>
                )}
            
        </Form>
    );
}
 
export default ContactForm;