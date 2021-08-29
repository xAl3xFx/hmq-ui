<script lang="ts">
    import { Toast } from '../resources/bootstrap-5.1.0-dist/bootstrap-5.1.0-dist/js/bootstrap.min.js'
    import { toastStore } from '../stores'
    import {onDestroy} from "svelte";

    let message : string;
    let summary: string;

    const unsubscribe = toastStore.subscribe(value => {
        message = value.message;
        summary = value.summary;

        if(message !== ''){
            const toastLiveExample = document.getElementById('liveToast')
            const toast = new Toast(toastLiveExample, {delay: 3000});
            toast.show(toastLiveExample);
        }

    });

    onDestroy(unsubscribe);

</script>

<div class="position-fixed mt-2 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            {summary}
<!--            <img src="..." class="rounded me-2" alt="...">-->
            <strong class="me-auto"></strong>
<!--            <small>11 mins ago</small>-->
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            {message}
        </div>
    </div>
</div>