import { writable } from "svelte/store"

const PollStore = writable([
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
])

export default PollStore;