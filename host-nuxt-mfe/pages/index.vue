<template>
    <div>
        home bost
        <RemoteButton />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const RemoteButton = defineAsyncComponent(() => import("remoteapp/Button"));
// import RemoteButton from "remoteapp/Button"

// const RemoteButton = () => import("remoteapp/Button")

// RemoteButton().then(B => console.log(B))
</script>