<script>
  import PollListDetail from "./PollListDetail.svelte";

    export let polls = []
</script>

<div class="pollList flex items-center justify-center gap-8 w-full overflow-hidden flex-wrap">
    {#each polls as poll (poll.id)}
         <PollListDetail {poll} on:vote/>
    {/each}
</div>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->