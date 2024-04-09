<script>
    import { createEventDispatcher } from 'svelte'
    export let poll = {};
    $: totalVotes = poll.votesA + poll.votesB
    $: percentA = Math.floor(100 / totalVotes * poll.votesA);
    $: percentB = Math.floor(100 / totalVotes * poll.votesB);

    let dispatch = createEventDispatcher();

    const handleVote = (/** @type {string} */ option, /** @type {any} */ id) => {
        dispatch("vote", { option, id });
    }
</script>

<div class="poll p-4 bg-gray-100 rounded-md flex flex-col min-w-[400px] shadow-lg">
    <h3 class="text-lg">{poll.question}</h3>
    <p class="text-gray-600 mb-8 mt-1 text-sm">Total Voting: {totalVotes}</p>
    <button class="answer relative bg-gray-200 w-full h-[40px] p-2 mb-4 cursor-pointer duration-100" on:click={() => handleVote('a', poll.id)}>
        <div class={`precent percent-a absolute h-full top-0 left-0`} style="width: {percentA}%;"></div>
        <span>{poll.answerA} ({poll.votesA})</span>
    </button>
    <button class="answer relative bg-gray-200 w-full h-[40px] p-2 mb-4 cursor-pointer duration-100" on:click={() => handleVote('b', poll.id)}>
        <div class={`precent percent-b absolute h-full top-0 left-0 `} style="width: {percentB}%;"></div>
        <span>{poll.answerB} ({poll.votesB})</span>
    </button>
</div>

<style>
    /* your styles go here */
    .percent-a{
        background: #ff9f80a4;
        border-left: 4px solid #ff5820;
    }
    .percent-b{
        background: #9aff9aad;
        border-left: 4px solid #1cd33b;
    }
</style>
