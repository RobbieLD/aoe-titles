<script setup lang="ts">
import { useGamesStore } from '@/stores/games';

    const store = useGamesStore();

</script>

<template>
  <main>
    <div class="main">
        <div class="title" v-for="(title, key) in Object.keys(store.titles())" :key="key">
            <div class="name">
                <span>{{ title }}</span>
                <div>{{ store.titles()[title].icon }}</div>
            </div>
            <div class="winner">{{ store.titles()[title].winner }}</div>
            <img src="/shield.png" class="shield" />
        </div>
    </div>
  </main>
</template>

<style scoped>
.main {
    padding: 2em;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    justify-items: center;
}

.title {
    padding: 1em;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 12em;
}

.winner {
    position: absolute;
    margin-top: 1em;
    font-size: 1.2em;
    font-weight: bold;
    color: #434343;
    font-variant: all-small-caps;
    max-width: 5em;
    text-align: center;
}

.name {
    font-family: Ancient;
    color: #694205;
    font-size: 2em;
    position: absolute;
    width: 5em;
    text-align: center;
    margin-top: 2em;
    text-shadow: 1px 1px 2px #c25c1fcc;
}

.shield {
    min-width: 100%;
    min-height: 100%;
}

</style>
