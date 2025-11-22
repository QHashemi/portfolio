"use client"
import React, { useEffect } from 'react'
import styles from "./style.module.scss"
import { Button, Group, Textarea, TextInput } from '@mantine/core'
import { notifications } from '@mantine/notifications';
import { useForm } from '@mantine/form';
import { useContact } from '@/contexts/contactContext';
export default function Form() {

    const { sendEmail, resetState, state } = useContact()

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            first_name: "",
            last_name: "",
            message: "",
        },
    });

    useEffect(() => {
        if (state.success) {
            notifications.show({
                title: `Message sent!`,
                message: state.msg,
                position: "top-right",
            })
            form.reset()
            resetState()
        }
    }, [state.success])


    return (
        <div className={styles.form}>

            <form onSubmit={form.onSubmit((values) => sendEmail(values))}>

                <TextInput
                    withAsterisk
                    label="First Name"
                    placeholder="John"
                    key={form.key('first_name')}
                    {...form.getInputProps('first_name')}
                />
                <TextInput
                    withAsterisk
                    label="Last Name"
                    placeholder="Dov"
                    key={form.key('last_name')}
                    {...form.getInputProps('last_name')}
                />
                <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="example@email.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />
                <Textarea
                    label="Message"
                    placeholder="Input you message..."
                    key={form.key("message")}
                    maxRows={10}
                    {...form.getInputProps('message')}
                />
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>

            </form>


        </div>
    )
}
