<template>
    <div>
        <div class="bg-white flex flex-col justify-center text-center h-vh left-0 right-0 top-0 bottom-0 ">
            <img class="mx-auto mb-8 w-32 h-32 rounded-full" src="../assets/adatyar.svg" />
            <p class="text-silver font-bold text-3xl">Habits</p>
        </div>
        <div class="fixed bottom-5 left-0 right-0 mx-5">
            <p class="text-silver text-center text-sm">To start, create your habit plan</p>
            <button @click="setCategory()" class="bg-avocado py-3 mt-4 w-full rounded-3xl text-white font-bold tracking-wide shadow-md">Build the Program</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    methods: {
        setCategory() {
            this.$router.push(`/category`);
        }
    }
}
</script>