<template>
  <div id="app" class="relative">
    <div class="bg-indigo-200 top-0 h-1 z-[99999] fixed left-0 right-0">
      <NuxtLoadingIndicator color="false" :height="h" />
    </div>
    <NuxtLayout :name="topbar"> </NuxtLayout>

    <div v-if="useGlobalStore().$state.isMenuVisible">
      <NuxtLayout :name="main"> </NuxtLayout>
    </div>

    <main class="pt-52 pb-[80px]">
      <!-- <StatesEnMaintenance /> -->
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";

const h = 4;
const topbar = "topbar";
const main = "main";
const router = useRouter();

router.push("/motards");

onBeforeUpdate(() => {
  console.log(useGlobalStore().$state.isAuth);
});
</script>
