<script lang="ts">
    import { user } from '../stores'
    import axios from "axios";
    import { navigate } from "svelte-routing";
    import { toastStore } from '../stores';

    let username: string;
    let password: string;
    let loading: boolean = false;

    const login = e => {
        loading = true;
        e.preventDefault();
        axios.post("authentication/login", {username, password}).then(response => {
            loading = false;
            if(response.status === 200){
                user.set({
                    loggedIn: true,
                    username: username
                });
                navigate("/");
                toastStore.set({
                    summary: 'Welcome',
                    message: `Hello, ${username}!`
                })
            }
        }).catch(err => {
            loading = false;
            document.getElementById("username").classList.add('is-invalid');
        });
    }
</script>

<div class="loginFormWrapper card col-12 col-md-8 col-lg-8 col-xl-6 col-xxl-4">
    <form on:submit={login} class="needs-validation">
        <h1>Login</h1>
        <div class="mb-4 position-relative">
            <label for="username" class="form-label">Username</label>
            <input required type="username" bind:value={username} class="form-control" id="username">
            <div class="invalid-tooltip">
                Username or password is incorrect.
            </div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input required type="password" bind:value={password} class="form-control" id="password">
        </div>
        {#if !loading}
            <button required type="submit" class="btn btn-primary float-end">Login</button>
        {/if}
        {#if loading}
            <button class="btn btn-primary float-end" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="sr-only">Loading...</span>
            </button>
        {/if}


    </form>
</div>

<style>
    .loginFormWrapper{
        display: flex;
        justify-content: center;
        margin: 10rem auto auto auto;
        padding: 1rem;
    }
    .loginFormWrapper h1{
        text-align: center;
    }
</style>