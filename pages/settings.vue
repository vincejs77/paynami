<template>
  <div class="p-container relative py-[90px]">
    <div class="font-medium">
      <div class="pb-6 border-b border-b-gray-200">
        <NuxtLink to="/sync" class="flex justify-between items-center space-x-4">
          <div class="flex justify-start items-center space-x-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </span>
            <span>Synchroniser</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>

      <div class="pt-6">
        <button
          @click="logOut()"
          class="w-full flex justify-between items-center space-x-4"
        >
          <div class="flex justify-start items-center space-x-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5.5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </span>
            <span>Deconnexion</span>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";
let logCookie = useCookie("log-store");
const router = useRouter();

const logOut = async () => {
  logCookie.value = 0;
  router.push("/login");
};

onBeforeMount(() => {
  useGlobalStore().$state.menuTitle = "Paramètres";
  useGlobalStore().$state.isBackBtn = false;
  useGlobalStore().$state.isMenuVisible = true;
});
</script>
