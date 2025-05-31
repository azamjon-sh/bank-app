import axios from "axios";
export default defineNuxtPlugin(() => {
	const runtimeConfig = useRuntimeConfig()
	const instance = axios.create({
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		baseURL: runtimeConfig.public.baseURL,
		withCredentials:true,
	});

	return {
		provide: {
			axios: instance,
		},
	};
});
