<script lang="ts">
    import StatsCard from "../components/StatsCard.svelte";
    import axios from "axios";
    let data : IStatsCardProps;

    let count = 0;
    let count2 = 0;

    $: evenOrOdd = () => {
        console.log("Executing evenOrOdd");
        return (count + count2) % 2 === 0 ? "Even" : "Odd"
    }



    const createMessage = () => {
        for(let i =0; i < 1000; i++){
            axios.post('messages', {
                queueName: "test",
                messageContent: {
                    type: "test",
                    nest: false
                }
            });
        }

    }

    axios.get("messages/countAllMessages").then(response => {
        const responseData : IQueuesCount = response.data;
        data = {
            iconClass: "fas fa-database fa-4x",
            heading: responseData.totalCount,
            text: "Total Messages",
            info: [
                {
                    iconClass: 'fas fa-check',
                    heading: responseData.processedCount,
                    text: 'Processed',
                    iconColor: 'limegreen'
                },
                {
                    iconClass: 'fas fa-times',
                    heading: responseData.unProcessedCount,
                    text: 'Not Processed',
                    iconColor: 'tomato'
                }
            ],
            link:{
                href: "messages",
                label: "Preview"
            }
        }
    })
</script>

<h1 class="mb-4">Home</h1>
<StatsCard props={data} />
<button on:click={createMessage} type="button">Create</button>
<button type="button" on:click={() => count++} >Increment count</button>
<button type="button" on:click={() => count2++} >Increment count2</button>
<label>{count + count2} is {evenOrOdd()}</label>