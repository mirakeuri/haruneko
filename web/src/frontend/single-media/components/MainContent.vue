<script setup lang="ts">

    import {ref} from 'vue'

    const mediaUrl = ref<URL>()

    const pasteFromClipboard = async () => {
        mediaUrl.value = new URL(await navigator.clipboard.readText())
    }

    const fetchMedia = async () => {
        try {
            const link = mediaUrl.value.href
            for (const website of HakuNeko.PluginController.WebsitePlugins) {
                 const media = await website.TryGetEntry(link);
                if (media) {
                    console.log(media.Title)
                    return;
                }
            }
        }
        catch {
            console.error()
        }
    }
</script>

<template>
    <div>
        <div id="input-bar">
            Media URL
            <button @click="pasteFromClipboard">from Clipboard</button>
            <input :disabled="true" type="url" name="media-url" id="media-url" v-model="mediaUrl">
            <button @click="fetchMedia">Fetch media</button>
        </div>
        <div id="media-details">
            Media Title
        </div>
        <div>

        </div>
    </div>
</template>

<style scoped>
    #input-bar {
        display: flex;
    }

    #input-bar input {
        flex-grow: 1;
    }

</style>