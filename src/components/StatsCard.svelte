<script lang="ts">
    export let props : StatsCardProps | undefined;
</script>

{#if props !== undefined}
    <div class="card col-2 mt-4 ms-2 p-2 d-flex flex-row justify-content-center" aria-hidden="true">
        <div class="single_quick_activity d-flex">
            <div class="icon">
                <span class={props.imageClass} />
            </div>
            <div class="count_content">
                <h3><span class="counter">{props.heading}</span></h3>
                <p>{props.text}</p>
            </div>
        </div>
    </div>
{/if}

{#if props === undefined}
    <div class="card col-2 mt-4 ms-2 p-2 d-flex flex-row justify-content-center" aria-hidden="true">
        <div class="card-body">
            <div class="card-text placeholder-glow d-flex flex-column justify-content-center">
                <h3>
                    <span class="placeholder col-4 float-end h3skeleton"></span>
                </h3>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text placeholder-glow d-flex flex-column justify-content-center">
                <div class="col-4">
                    <span class="placeholder col-12"></span>
                </div>
                <div class="col-3">
                    <span class="placeholder col-12"></span>

                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .card{
        border-radius: 1rem;
    }
    .count_content p{
        font-family: 'Roboto';
        font-size: larger;
    }
    .single_quick_activity{
        padding: 1rem;
        background-color: #fff;
        align-items: center;
        justify-content: center;
    }

    .icon {
        color: #03bae8;
        width: 60px;
        height: 60px;
        flex-basis: 60px;
        text-align: right;
    }

    .count_content {
        margin-left: 30px;
        text-align: left;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .h3skeleton{
        height: 4rem
    }

    h3{
        font-size: 45px;
        font-weight: 600;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        color: #2E4765;
        font-family: "Rajdhani", sans-serif;
        line-height: 1;
    }
</style>