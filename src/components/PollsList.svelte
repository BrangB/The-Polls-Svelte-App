<script>
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollStore from "../stores/PollStores";
  import PollListDetail from "./PollListDetail.svelte";

</script>

<div class="pollList flex items-center justify-center gap-8 w-full overflow-hidden flex-wrap">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration : 500}}>
            <PollListDetail {poll}/>
        </div>
    {/each}
</div>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->