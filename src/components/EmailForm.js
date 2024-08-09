import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from 'emailjs-com';

export const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s7htxdq', 'contact_form', form.current, 'z5zepmi0R4KULEekF')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
                setEmail('');
                setMessage('');
                setName('');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send email. Please try again later.');
            });
        
    }

    return (
        <div className='bg-black text-white flex items-center justify-center h-screen'>
            <div className='border border-gray-500 p-6 rounded-lg'>
                Write to me
                <form ref={form} onSubmit={sendEmail} className='py-4'>
                    <input
                        type='email'
                        name='user_email'
                        value={email}
                        placeholder='name@email.com'
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full mb-4 p-2 bg-black border border-gray-500 text-white'
                        required='true'
                    />
                    <input
                        type='text'
                        name='user_name'
                        value={name}
                        placeholder='name'
                        required='true'
                        onChange={(e) => setName(e.target.value)}
                        className='w-full mb-4 p-2 bg-black border border-gray-500 text-white'
                    />                   
                    <textarea
                        rows='6'
                        name='message'
                        value={message}
                        placeholder='message..'
                        required='true'
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-full mb-4 p-2 bg-black border border-gray-500 text-white'
                    />
                    <input
                        type='submit'
                        value='Send'
                        className='w-full p-2 bg-orange-500 text-white cursor-pointer'
                    />
                </form>
                <div className='flex w-full justify-center items-center space-x-4 py-4'>
                    <a className='border border-white p-1 rounded-full cursor-pointer'
                        href = "https://github.com/shivangdatta"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a className='border border-white p-1 rounded-full cursor-pointer'
                        href = "https://www.linkedin.com/in/shivang-datta-aa8127256/"
                    >
                        <FaLinkedin size={32} className='rounded-full' />
                    </a>
                    <a className='border border-white p-1 rounded-full cursor-pointer
                        href = "https://leetcode.com/u/shivang_datta/"
                    '>
                        <SiLeetcode size={32} />
                    </a>
                </div>
            </div>
        </div>
    );
}
