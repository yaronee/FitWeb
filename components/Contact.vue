<template>
    <div class="isolate bg-lime-400 py-12 text-white">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-bold text-center mb-8 text-black">Contactez Max</h2>
        <p class="text-center text-black mb-12">
          Une question, un projet ou envie de commencer un coaching ?
        </p>
      </div>
  
      <form action="#" method="POST" class="mx-auto mt-12 max-w-xl sm:mt-16">
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <!-- Nom -->
          <div>
            <label for="name" class="block text-sm font-semibold text-black">Nom complet</label>
            <div class="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Max Juno"
                required
                class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-400 sm:text-sm"
              />
            </div>
          </div>
  
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-semibold text-black">Adresse email</label>
            <div class="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Max@gmail.com"
                required
                class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-400 sm:text-sm"
              />
            </div>
          </div>
  
          <!-- Téléphone -->
          <div class="sm:col-span-2">
            <label for="phone" class="block text-sm font-semibold text-black">Numéro de téléphone</label>
            <div class="mt-2">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="0609673410"
                required
                class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-400 sm:text-sm"
              />
            </div>
          </div>
  
          <!-- Message -->
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold text-black">Message</label>
            <div class="mt-2">
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Je voudr"
                required
                class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-400 sm:text-sm"
              ></textarea>
            </div>
          </div>
        </div>
  
        <div class="mt-10 flex justify-center">
          <button
            type="submit"
            class="inline-block rounded-md bg-neutral-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </template>