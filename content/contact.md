---
title: Contact
date: 2021-12-18T03:10:36.000Z
draft: false
language: en
description: A test with @tailwindcss/typography & Prose
---

<!-- @format -->

<div class="max-w-screen-md px-4 mx-auto">
    <p class="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl font-dmsans">Reach out to get access to our closed Beta.</p>
    <form name="contact" action="https://formsubmit.co/info@neodynamics.ai" method="POST" class="space-y-8">
        <div class="my-4">
            <label for="email" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300 font-dmsans"><strong>Your Email:</strong></label>
            <input type="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="name@example.com" required>
        </div>
        <div class="my-4">
            <label for="subject" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-300 font-dmsans"><strong>Subject:</strong></label>
            <input type="text" name="subject" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg shadow-sm text-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
        </div>
        <div class="my-4 sm:col-span-2">
            <label for="message" class="block mb-2 font-medium text-gray-900 text-md dark:text-gray-400 font-dmsans"><strong>Your message:</strong></label>
            <textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Leave a comment..."></textarea>
        </div>
        <div class="mt-6 lg:pb-16">
            <button type="submit" class="px-5 py-3 font-bold text-center text-gray-50 bg-accent rounded-full font-pp-neue-machina">SEND MESSAGE</button>
        </div>
    </form>
</div>
