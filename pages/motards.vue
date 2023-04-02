<template>
  <div class="p-container relative py-[100px]">
    <div class="flex justify-between items-center space-x-4">
      <div class="w-full">
        <label class="relative" for="search_motard">
          <span class="absolute top-1/2 -translate-y-1/2 left-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-gray-700"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <input
            v-model="search"
            key="search"
            class="w-full pl-12"
            type="search"
            name=""
            id="search"
            placeholder="Rechercher par nom"
          />
        </label>
      </div>
      <div>
        <button type="button" class="p-3 bg-gray-800 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="mt-8">
      <div
        class="text-sm font-medium text-gray-500 flex justify-left items-center space-x-2 whitespace-nowrap"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <span>Date : </span>
        <span>
          {{
            new Date().toLocaleDateString("fr", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })
          }}</span
        >
        <div class="h-[1px] w-full bg-gray-200"></div>
      </div>
    </div>

    <div class="mt-8" v-if="motards_l <= 0">
      <Vue3Lottie
        animationLink="/img/lottie_files/empy-1.json"
        :height="10"
        :width="200"
        class="opacity-70 w-60 mx-auto"
      />
      <div class="-mt-12 text-center">
        <p class="text-gray-500">Aucune donnée collectée aujourd'hui.</p>
      </div>
    </div>

    <div class="mt-8" v-else>
      <ul class="space-y-4">
        <li
          :key="motard"
          v-for="motard in motards"
          class="relative pb-4 border-b border-b-gray-200"
        >
          <div class="flex justify-start items-center space-x-4">
            <div>
              <img
                class="w-16 h-16 rounded-full object-cover"
                :src="config.public.apiBase + '/assets/' + motard.image_profile"
                alt="img_alt"
              />
            </div>
            <div>
              <h2 class="font-bold mb-1">{{ motard.nom_complet }}</h2>
              <div class="text-gray-400">{{ motard.telephone }}</div>
            </div>
          </div>

          <div
            v-if="motard.saved"
            class="flex justify-center items-center absolute validate top-0 h-full right-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";

const search = ref("");

/*
const motards = ref([
  {
    avatar: "https://placehold.co/500x500",
    nom_complet: "Vincent Asani",
    telephone: "+243 970578507",
    saved: true,
  },
  {
    avatar: "https://placehold.co/500x500",
    nom_complet: "Zobozo de Waterloo",
    telephone: "+243 973434530",
    saved: true,
  },
  {
    avatar: "https://placehold.co/500x500",
    nom_complet: "Lungilu Mutomboki",
    telephone: "+243 913457399",
    saved: false,
  },
  {
    avatar: "https://placehold.co/500x500",
    nom_complet: "Yamine Mama Batoto",
    telephone: "+243 853244555",
    saved: false,
  },
]);
 */

onBeforeMount(() => {
  useGlobalStore().$state.menuTitle = "Motards enregistrés";
  useGlobalStore().$state.isBackBtn = false;
  useGlobalStore().$state.isMenuVisible = true;
});

const config = useRuntimeConfig();
const { getItems } = useDirectusItems();

const [{ data: motards }] = await Promise.all([
  useAsyncData("motards", () =>
    getItems({
      collection: "data_collection",
    })
  ),
]);

const motards_l = Object.keys(motards.value || {}).length;
</script>

<style lang="scss" scoped>
.validate svg {
  background: linear-gradient(180deg, #89d859 0%, #06c06c 100%);
  @apply p-1 rounded-full text-white -mt-4;
}
</style>
