<script>
// @ts-nocheck

  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import PollsList from "./components/PollsList.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import { fade, scale, slide } from "svelte/transition";

  let items = [ "Current Polls", "Add New Polls"];
  let activeItem = 'Current Polls'
  let polls = [
    {
      id: 122243,
      question: 'Python or Javascript',
      answerA: "Python",
      answerB: "Javascript",
      votesA: 23,
      votesB: 21
    },
    {
      id: 234,
      question: 'Python or Javascript',
      answerA: "Python",
      answerB: "Javascript",
      votesA: 23,
      votesB: 21
    },
    {
      id: 122223543,
      question: 'Python or Javascript',
      answerA: "Python",
      answerB: "Javascript",
      votesA: 23,
      votesB: 21
    },
  ]

  const tabChangeHandler = (e) => {
    activeItem = e.detail
  }

  const handleAdd = (e) => {
    activeItem = "Current Polls"
  }



</script>

<Header />

<main class="mx-3 md:mx-24 my-12 gap-8 flex flex-col items-center justify-center">
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler}/>
  {#if  activeItem === 'Current Polls'}
    <div in:fade >
      <PollsList/>
    </div>
  {:else if activeItem === 'Add New Polls'}
    <div in:fade>
      <CreatePollForm on:add={handleAdd} />
    </div>
  {/if}
</main>

<Footer />