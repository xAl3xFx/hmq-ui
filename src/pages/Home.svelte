<script>
    import StatsCard from "../components/StatsCard.svelte";
    import axios from "axios";
    let data;

    axios.get("queues/countAllQueues").then(response => {
        data = {
            imageClass: "fas fa-database fa-4x",
            heading: response.data,
            text: "Queues"
        }
    })
</script>

<StatsCard props={data} />