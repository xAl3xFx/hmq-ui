<script lang="ts">
    import { user } from "../stores";
    import {link, navigate} from "svelte-routing"
    import axios from "axios";
    // import Toast from './Toast.svelte'
    import {afterUpdate, getContext} from "svelte";

    let currentPage = 'home';

    const logout = () => {
        axios.post("authentication/logout").then(response =>{
            if(response.status === 200){
                user.set({
                    loggedIn: false,
                    username: undefined
                })
                navigate("login")
            }
        }).catch(err => {

        });
    }

    const setCurrentPage = value => currentPage = value;

</script>
<!--<head>-->
<!--    <link-->
<!--            rel="stylesheet"-->
<!--            href="resources/bootstrap-5.1.0-dist/bootstrap-5.1.0-dist/css/bootstrap.min.css"-->
<!--    />-->
<!--</head>-->

{#if $user.loggedIn}
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">HandleMyQueue</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="loggedNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a id="homeLink" on:click={() => setCurrentPage('home')} class={`nav-link ${currentPage === 'home' ? 'fw-bold' : ''}`} use:link href="/">Home</a>
                </li>
                <li class="nav-item active">
                    <a id="messagesLink" on:click={() => setCurrentPage('messages')} class={`nav-link ${currentPage === 'messages' ? 'fw-bold' : ''}`} use:link href="/messages">Messages</a>
                </li>
            </ul>
        </div>
        <form class="form-inline">
            <a class="btn btn-primary my-2 my-sm-0 me-3 pe-3 ps-3" on:click={logout}>Logout</a>
        </form>
    </nav>
{/if}
{#if !$user.loggedIn}
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/" use:link>HandleMyQueue</a>
        <form class="form-inline">
            <a class="btn btn-primary my-2 my-sm-0 me-3 pe-3 ps-3" href="/login" use:link>Login</a>
        </form>
    </nav>
{/if}
