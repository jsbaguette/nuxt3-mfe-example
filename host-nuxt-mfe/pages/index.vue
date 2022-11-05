<template>
    <div>
        home bost
        <!-- <RemoteButton /> -->
    </div>
</template>

<script setup>
// import {RemoteButton} from "remoteApp/Button"

const RemoteButton = () => import("remoteApp/Button")

console.log(RemoteButton)
// import { defineAsyncComponent } from "vue";
// const RemoteButton = defineAsyncComponent(() => import("remoteApp/Button"));
// import RemoteButton from "remote_app/Button"

// console.log(RemoteButton)
</script>