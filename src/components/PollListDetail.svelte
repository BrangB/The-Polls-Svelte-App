<script>
    // Import statements
    import PollStore from "../stores/PollStores";
    import { tweened } from "svelte/motion";
    import { onMount } from 'svelte';
    import { cubicOut } from "svelte/easing";
  
    // Props
    export let poll;
  
    // Reactive declarations
    let totalVotes = 0;
    let percentA = 0;
    let percentB = 0;

    // Tweened values
    const tweenedA = tweened(percentA, {
        duration: 300,
        easing: cubicOut
    });
    const tweenedB = tweened(percentB, {
        duration: 300,
        easing: cubicOut
    });

    // Functions
    const handleVote = (option, id) => {
      if (option === "a") {
        poll.votesA++;
      } else if (option === "b") {
        poll.votesB++;
      }
      PollStore.update(currentpolls => {
        let copiedPoll = currentpolls.map(p => (p.id === id ? poll : p));
        return copiedPoll;
      });
    };
  
    const handleDelete = id => {
      PollStore.update(currentPoll => currentPoll.filter(p => p.id !== id));
    };

    $: {
        totalVotes = poll ? poll.votesA + poll.votesB : 0;
        percentA = totalVotes ? Math.floor(100 / totalVotes * poll.votesA) : 0;
        percentB = totalVotes ? Math.floor(100 / totalVotes * poll.votesB) : 0;

        tweenedA.set(percentA);
        tweenedB.set(percentB);
    }

    onMount(() => {
        tweenedA.set(percentA);
        tweenedB.set(percentB);
    });
</script>
  
<div class="poll p-4 bg-gray-100 rounded-sm md:rounded-md flex flex-col w-[300px] md:min-w-[400px] shadow-lg">
    <h3 class="text-lg">{poll.question}</h3>
    <p class="text-gray-600 mb-8 mt-1 text-sm">Total Voting: {totalVotes}</p>
    <button class="answer relative bg-gray-200 w-full h-[40px] p-2 mb-4 cursor-pointer duration-100" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a absolute h-full top-0 left-0" style={`width: ${$tweenedA}%;`}></div>
      <span>{poll.answerA} ({poll.votesA})</span>
    </button>
    <button class="answer relative bg-gray-200 w-full h-[40px] p-2 mb-4 cursor-pointer duration-100" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b absolute h-full top-0 left-0" style={`width: ${$tweenedB}%;`}></div>
      <span>{poll.answerB} ({poll.votesB})</span>
    </button>
    <button class="p-2 uppercase bg-red-500 text-white mt-3" on:click={() => handleDelete(poll.id)}>Delete</button>
</div>
  
<style>
    /* your styles go here */
    .percent {
      height: 100%;
    }
    .percent-a {
      background: #ff9f80a4;
      border-left: 4px solid #ff5820;
    }
    .percent-b {
      background: #9aff9aad;
      border-left: 4px solid #1cd33b;
    }
</style>
