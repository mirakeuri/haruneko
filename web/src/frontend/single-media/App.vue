<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { Choice } from '../../engine/SettingsManager';
import AppBar from './components/AppBar.vue';
import MainContent from './components/MainContent.vue';

const frontendSetting = ref(window.HakuNeko.SettingsManager.OpenScope("*").Get('frontend') as Choice)
const currentFrontend = ref(frontendSetting.value.Value)

watch(currentFrontend, (newFrontend) => {
    frontendSetting.value.Value = newFrontend
})

const count = ref(0);
const increment = () => {
    count.value++;
};
</script>

<style scoped>
#window {
    height: 100%;
}
#container {
    height: 100%;
    padding: 2em;
    text-align: center;
    background-color: lightgrey;
}

button {
    padding: 0.5em;
}
</style>

<template>
    <div id="window">
        <header>
            <AppBar /> 
            <div>
                    <select v-model="currentFrontend">
                        <option v-for="option in frontendSetting.Options" :value="option.key">{{ option.label }}
                        </option>
                    </select>
                </div>
        </header>
        <main id="container">
               <MainContent />
        </main>
    </div>

</template>