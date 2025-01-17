---
title: Contact Us
date: 2021-12-18T03:10:36.000Z
draft: false
language: en
description: A test with @tailwindcss/typography & Prose
---

<!-- @format -->

<div class="max-w-screen-md px-4 mx-auto">
    <form name="contact" action="https://formsubmit.co/60ec9bd9fb0268d167b5386306793f42" method="POST" class="space-y-8">
        <div class="my-4">
            <label for="email" class="block mb-2 font-medium text-md text-gray-300 font-dmsans"><strong>Your Email*:</strong></label>
            <input type="email" name="email" class="shadow-sm border  text-md rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-indigo-500 focus:border-indigo-500 shadow-sm-light" placeholder="name@example.com" required>
        </div>
        <div class="my-4">
            <label for="subject" class="block mb-2 font-medium text-md text-gray-300 font-dmsans"><strong>Subject*:</strong></label>
            <input type="text" name="subject" class="block w-full p-3 border rounded-lg shadow-sm text-md focus:border-indigo-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-indigo-500 shadow-sm-light" placeholder="Let us know how we can help you" required>
        </div>
        <div class="my-4 sm:col-span-2">
            <label for="message" class="block mb-2 font-medium text-md text-gray-400 font-dmsans"><strong>Your Message*:</strong></label>
            <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-md rounded-lg shadow-sm border focus:ring-indigo-500 focus:border-indigo-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Leave a comment..." required></textarea>
        </div>
        <div class="mt-6 lg:pb-16 flex justify-end">
            <button type="submit" class="px-5 py-3 font-bold text-center text-gray-50 bg-accent rounded-full font-pp-neue-machina">SEND</button>
        </div>
    </form>
</div>
