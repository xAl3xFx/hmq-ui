<script lang="ts">
    import {onMount} from "svelte";
    import axios from "axios";
    import moment from "moment";

    let messages : IMessage[] = [];

    onMount(() => {
       axios.get("messages/getAllMessages").then(response => {
           messages = response.data;
       });
    });
</script>

<h1 class="mb-4">Messages</h1>
{#each messages.reverse().slice(0,20) as message}
    <div class="card">
        <p>{message.queueName}</p>
        <p>{moment(message.createdAt).format("DD.MM.YYYY HH:mm:ss")}</p>
        <p>{message.processed}</p>
        <pre>{JSON.stringify(message.messageContent, null, 2)}</pre>
    </div>
{/each}
