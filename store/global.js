import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
	id: "global-store",
	state: () => {
		return {
			isAuth: false
		};
	}
});
