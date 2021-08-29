    import { writable } from 'svelte/store';

    export const user = writable({
        loggedIn: false,
        username: undefined
    });

    export const toastStore = writable ({
       summary: '',
       message: ''
    });


