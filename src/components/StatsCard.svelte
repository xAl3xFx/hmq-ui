<script lang="ts">
    import { link } from "svelte-routing";

    export let props : IStatsCardProps | undefined;
</script>

{#if props !== undefined}
    <div class="card col-12 col-md-8 col-lg-6 col-xl-6 col-xxl-4 p-2 d-flex flex-row justify-content-evenly" aria-hidden="true">
        <div class="single_quick_activity d-flex">
            <div class="icon">
                <span class={props.iconClass} />
            </div>
            <div class="count_content">
                <h3><span class="counter">{props.heading}</span></h3>
                <p>{props.text}</p>
            </div>
        </div>
        <div class="d-flex flex-column justify-content-center">
            {#if props.info}
                <div class="info_content">
                    {#each props.info as info}
                        <div class="d-flex justify-content-evenly align-items-center">
                            <span class={info.iconClass} style={`color: ${info.iconColor}`} />
                            <h4 class="ps-2 pe-2">{info.heading}</h4>
                            <label>{info.text}</label>
                        </div>
                    {/each}
                </div>
            {/if}

        </div>
        {#if props.link}
            <div class="link_content">
                <a class="btn btn-primary" href={props.link.href} use:link>{props.link.label}</a>
            </div>
        {/if}

    </div>
{/if}

{#if props === undefined}
    <div class="card col-12 col-md-8 col-lg-6 col-xl-6 col-xxl-4 mt-4 p-2 d-flex flex-row justify-content-evenly" aria-hidden="true">
        <div class="card-body">
            <div class="card-text placeholder-glow d-flex flex-column justify-content-center">
                <h3>
                    <span class="placeholder col-4 float-end h3skeleton"></span>
                </h3>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text placeholder-glow d-flex flex-column justify-content-center">
                <div class="col-3 d-flex ms-2 justify-content-end">
                    <span class="placeholder col-6 pt-3 pb-3"></span>
                </div>
                <div class="col-6">
                    <span class="placeholder col-12"></span>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="card-text placeholder-glow d-flex flex-column justify-content-center">
                <div class="col-6">
                    <span class="placeholder col-12"></span>
                </div>
                <div class="col-7">
                    <span class="placeholder col-12"></span>
                </div>
            </div>
        </div>
        <div class="card-body btn_placeholder">
            <div class="card-text placeholder-glow d-flex flex-column justify-content-center">
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-6"></span>
            </div>
        </div>
    </div>
{/if}

<style>
    .btn_placeholder{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .card{
        border-radius: 1rem;
    }

    .link_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .info_content{
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
    }

    .count_content p{
        font-family: 'Roboto';
        font-size: larger;
    }
    .single_quick_activity{
        padding: 1rem;
        background-color: #fff;
        align-items: center;
        justify-content: space-evenly;
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