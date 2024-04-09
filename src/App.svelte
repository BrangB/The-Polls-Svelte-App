<script>
// @ts-nocheck

  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import PollsList from "./components/PollsList.svelte";
  import Tabs from "./shared/Tabs.svelte";

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
    polls = [
      ...polls, e.detail
    ]
    console.log(polls)
    activeItem = "Current Polls"
  }

  const handleVote = (e) => {
    let {option, id} = e.detail;
    polls = polls.map(poll => {
        if (poll.id === id) {
            if (option === 'a') {
                return {...poll, votesA: poll.votesA + 1};
            } else {
                return {...poll, votesB: poll.votesB + 1};
            }
        }
        return poll;
    });
};


</script>

<Header />

<main class="mx-24 my-12 gap-8 flex flex-col items-center justify-center">
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler}/>
  {#if  activeItem === 'Current Polls'}
    <PollsList {polls} on:vote={handleVote} />
  {:else if activeItem === 'Add New Polls'}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>

<Footer />