<template>
    <div>
        home bost
        <RemoteButton />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const RemoteButton = defineAsyncComponent(() => import("remote_app/Button"));
// import RemoteButton from "remote_app/Button"

// console.log(RemoteButton)
</script>