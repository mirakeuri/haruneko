<script setup lang="ts">
import { GetLocale } from '../../../i18n/Localization';
import type { ILocale } from '../../../i18n/ILocale';
import { ref } from 'vue';

const locale = ref<ILocale>(GetLocale())

</script>

<template>
    <div id="windowbar">
        <div id="title">
            {{locale.Frontend_Product_Title()}} - {{ locale.Frontend_Product_Description() }}
        </div>
    <div>
        {{  }}
    </div>
    </div>
</template>

<style scoped>
    #app-bar {
        display: flex;
        padding-top: 1em;
        padding-bottom: 1em;
        padding-left: 2em;
        padding-right: 2em;
        background-color: azure;
    }

    #title {
        font-size: large;
        font-weight: 700;
    }

</style>