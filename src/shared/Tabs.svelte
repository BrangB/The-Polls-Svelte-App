<script>
// @ts-nocheck

    import { createEventDispatcher } from "svelte";
    export let items;
    export let activeItem;

    let dispatch = createEventDispatcher();
</script>

<div class="tabs">
    <ul class="flex items-center justify-center gap-4">
        {#each items as item (item)}
            <button class:active={item === activeItem} on:click={() => dispatch("tabChange", item)}>
                {item}
            </button>
        {/each}
    </ul>
</div>

<style>
    .tabs button{
        display: inline-block;
        padding: 8px 0;
        cursor: pointer;
        border-bottom: 2px solid rgb(168, 168, 168);
    }
    .active{
        color: #FF3E00 !important;
        border-bottom: 2px solid #FF3E00 !important;
    }
</style>