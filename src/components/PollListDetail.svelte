<script>
  import PollStore from "../stores/PollStores";
  import { tweened } from "svelte/motion";

    export let poll = {};
    $: totalVotes = poll.votesA + poll.votesB
    $: percentA = Math.floor(100 / totalVotes * poll.votesA);
    $: percentB = Math.floor(100 / totalVotes * poll.votesB);

    const tweenedA = tweened(percentA);
    const tweenedB = tweened(percentA);

    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);

    console.log("display", tweenedA)


    const handleVote = (option, id) => {
        // @ts-ignore
        let polls = PollStore.update(currentpolls => {
            let copiedPoll = [...currentpolls]
            let upvotedPoll = copiedPoll.find(poll => poll.id == id);

            if(option === "a"){
                upvotedPoll.votesA++;
            }
            if(option === "b"){
                upvotedPoll.votesB++;
            }
            return copiedPoll
        })
};

    const handleDelete = (id) => {
        PollStore.update(currentPoll => {
            return currentPoll.filter(poll => poll.id !== id)
        })
    }
</script>

<div class="poll p-4 bg-gray-100 rounded-md flex flex-col min-w-[400px] shadow-lg">
    <h3 class="text-lg">{poll.question}</h3>
    <p class="text-gray-600 mb-8 mt-1 text-sm">Total Voting: {totalVotes}</p>
    <button class="answer relative bg-gray-200 w-full h-[40px] p-2 mb-4 cursor-pointer duration-100" on:click={() => handleVote('a', poll.id)}>
        <div class={`precent percent-a absolute h-full top-0 left-0`} style="width: {tweenedA}%;"></div>
        <span>{poll.answerA} ({poll.votesA})</span>
    </button>
    <button class="answer relative bg-gray-200 w-full h-[40px] p-2 mb-4 cursor-pointer duration-100" on:click={() => handleVote('b', poll.id)}>
        <div class={`precent percent-b absolute h-full top-0 left-0 `} style="width: {tweenedB}%;"></div>
        <span>{poll.answerB} ({poll.votesB})</span>
    </button>
    <button class="p-2 uppercase bg-red-500 text-white mt-3" on:click={() => handleDelete(poll.id)}>Delete</button>
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
