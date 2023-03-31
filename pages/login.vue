<template>
  <div class="login-form pb-[100px] h-screen flex justify-center items-center px-8">
    <div class="max-w-xs mx-auto space-y-8">
      <div>
        <h1 class="text-3xl font-black mb-4">Connexion</h1>
        <p class="text-lg text-gray-400">Entrez vos coordonées pour ouvrir une session</p>
      </div>
      <div class="">
        <form action="login" class="space-y-4">
          <div>
            <label class="relative" for="mail">
              <span class="absolute top-1/2 -translate-y-1/2 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5 text-gray-700"
                >
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                  />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                  />
                </svg>
              </span>
              <input
                class="w-full pl-12"
                type="mail"
                name="mail"
                id="mail"
                placeholder="Entrez votre adresse e-mail"
              />
            </label>
          </div>
          <div>
            <label class="relative" for="">
              <span class="absolute top-1/2 -translate-y-1/2 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5 text-gray-700"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <input
                class="w-full pl-12"
                type="password"
                name=""
                id=""
                placeholder="Votre mot de passe"
              />

              <span class="absolute top-1/2 -translate-y-1/2 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-gray-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </label>
          </div>

          <button class="btn-primay w-full" type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>
