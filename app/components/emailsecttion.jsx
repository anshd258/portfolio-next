"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

import axios from 'axios'
function EmailSection() {
    const [email, setemail] = useState(false)

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const jsonData = JSON.stringify(data);
        const endPoint = "/api/send";
        await axios.post(endPoint, jsonData, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            console.log("message submitted sucessfully" + response['data']['id']);
            setemail(true);
            setTimeout(() => {
                setemail(false);
            }, 3000);
        })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <section className='grid  md:grid-cols-2 my-12  md:gap-4 relative'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-2/4 -left-5 transform -translate-x-1/2 -translate-1/2"></div>
            <div className='z-10'>
                <h5 className='font-bold text-white text-xl mb-2 justify-self-start'> Let`s Connect</h5>
                <p className='text-slate-300 text-base mb-4 max-w-md'>Hello and welcome! I'm thrilled to connect with fellow developers, tech enthusiasts, and potential collaborators. Whether you're here to explore my portfolio, discuss exciting projects, or simply share your insights, I'm eager to hear from you.</p>
                <div className='flex-row flex gap-2'>
                    <Link target="_blank" href={"https://www.linkedin.com/in/ansh-deep/"}>
                        <Image width="50" height="50" ta src={"https://img.icons8.com/3d-fluency/94/linkedin.png"} alt="linkedin" />
                    </Link>
                    <Link target="_blank" href={"https://github.com/anshd258"}>
                        <Image width="50" height="50" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github" />
                    </Link>
                </div>
            </div>
            <form className='flex flex-col gap-4' onSubmit={handleFormSubmission}>
                <div >
                    <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
                        Your Email
                    </label>
                    <input name='email' type='email'
                        id='email'
                        className='bg-[#18191E] border border-[#33353F] hover:border-blue-400 placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        required
                        placeholder='temp@temp.com' />
                </div>
                <div >


                    <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                        Subject
                    </label>
                    <input name='subject' type='text'
                        id='subject'
                        className='bg-[#18191E] border border-[#33353F] hover:border-blue-400 placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        required
                        placeholder='Just saying hi' />
                </div>
                <div >


                    <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                        Message
                    </label>
                    <textarea name='message' type='text'
                        id='message'
                        className='bg-[#18191E] border border-[#33353F] hover:border-blue-400 placeholder-slate-400 text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        required
                        placeholder='Let`s talk about....' />
                </div>
                <button type='submit' className='px-4 py-2 mr-5 w-full  rounded-lg bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-white '>Send email</button>
                {


                    email && (<p className='text-green-400 z-15 text-sm mt-2 transition ease-in-out duration-500'>Mesage sent sucessfully</p>)


                }
            </form>


        </section>
    )
}

export default EmailSection

