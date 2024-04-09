<script>
    import { createEventDispatcher } from 'svelte'
  import PollStore from '../stores/PollStores';
    let fields = { question: '', answerA: '', answerB: ''};
    let error = { question: '', answerA: '', answerB: ''};
    let valid = false
    let dispatch = createEventDispatcher();
    const submitHandler = () => {
        valid = true

        if(fields.question.trim().length < 5){
            valid = false
            error.question = 'Question must be at least 5 characters long'
        }else{
            error.question = ''
        }

        if(fields.answerA.trim().length < 1){
            valid = false
            error.answerA = 'Answer A cannot be empty'
        }else{
            error.answerA = ''
        }

        if(fields.answerB.trim().length < 1){
            valid = false
            error.answerB = 'Answer B cannot be empty'
        }else{
            error.answerB = ''
        }

        if(valid){
            let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()}
            PollStore.update(currentPoll => {
                return [poll, ...currentPoll]
            })
            dispatch('add')
        }
    }
</script>

<form on:submit|preventDefault={submitHandler} class="p-8 bg-gray-200 w-[400px] flex flex-col items-center justify-center gap-8 rounded-lg">
    <h1 class="font-bold uppercase text-xl">Create New <span class="text-[#FF3E00]">Poll</span></h1>
    <div class="form-field flex flex-col w-full gap-2">
        <label for="question" class="font-semibold text-sm text-gray-800">Poll Question: </label>
        <input type="text" id="question" bind:value={fields.question} class="w-full h-[35px] px-2"/>
        <div class="error">{error.question}</div>
    </div>
    <div class="form-field flex flex-col w-full gap-2">
        <label for="answer-a" class="font-semibold text-sm text-gray-800">Answer A: </label>
        <input type="text" id="answer-a" bind:value={fields.answerA} class="w-full h-[35px] px-2"/>
        <div class="error">{error.answerA}</div>
    </div>
    <div class="form-field flex flex-col w-full gap-2">
        <label for="answer-b" class="font-semibold text-sm text-gray-800">Answer B: </label>
        <input type="text" id="answer-b" bind:value={fields.answerB} class="w-full h-[35px] px-2"/>
        <div class="error">{error.answerB}</div>
    </div>
    <button type="submit" class="py-2 px-6 bg-[#FF3E00] hover:bg-[#ff4000e3] text-white uppercase font-semibold w-full duration-200">Submit</button>
</form>

<style>
    .error{
        font-size: 14px;
        color: red;
    }
</style>
