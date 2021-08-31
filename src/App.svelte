<script lang="ts">
	import { user } from "./stores";
	import Navigation from "./components/Navigation.svelte";
	import {Router, Link, Route, navigate} from "svelte-routing";
	import Login from "./pages/Login.svelte";
	import Home from "./pages/Home.svelte";
	import NotFound from "./pages/NotFound.svelte";
	import {onMount} from "svelte";
	import axios from "axios";
	import { setupAxiosInterceptor } from './setupAxiosInterceptor';
	import ToastComponent from "./components/ToastComponent.svelte";
	import './resources/bootstrap-5.1.0-dist/bootstrap-5.1.0-dist/css/bootstrap.min.css';
	import './resources/fontawesome-free-5.15.4-web/css/all.min.css';
	import Messages from "./pages/Messages.svelte";

	export let url: string;
	url="";

	let loading = true;

	onMount(() => {
		setupAxiosInterceptor();
		axios.get("authentication/checkIfAuthenticated").then(response => {
			loading = false;
			if(response.status === 200){
				user.set({
					loggedIn: true,
					username: ""
				});
				navigate("/");
			}
		}).catch(err => {
			loading = false;
			navigate("login")
		})
	});

</script>
{#if !loading}
	<main>
		<Navigation />
		<ToastComponent />
		<Router url="{url}">
			<div style="height: 100%">
				<Route path="/login" component="{Login}" />
				<Route path="/messages" component="{Messages}" />
				<!--for now the router just support case sensitive,
					one workaround colud be add two time the route
					Example.
				   <Route path="About" component="{About}" />
				-->
				<Route component="{NotFound}" />
				<Route path="/"><Home /></Route>
			</div>
		</Router>
	</main>
{/if}

{#if loading}
	<div class="d-flex justify-content-center" style="margin-top: 15rem;">
		<div class="spinner-border spin" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	</div>
{/if}

<style>
	main {
		/*text-align: center;*/
		padding: 0.5em;
		/*max-width: 240px;*/
		margin: 0 auto;
		height: 100%;
	}

	.spin{
		width: 5rem !important;
		height: 5rem !important;
	}


</style>