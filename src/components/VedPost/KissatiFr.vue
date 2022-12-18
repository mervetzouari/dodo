<template>
    <div class="row">
        <div class="video-list card col">
            <img class="imag" v-bind:src="image" alt="image" />
            <h2>{{ name }}</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: "KissaVideo",
    props: ["name", "image"],
};
</script>
<style scoped>
.row {
    height: 100%;
}
.imag {
    width: 100%;
    border-radius: 5%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 0%;
}
img {
    width: 100% !important;
}

h2 {
    position: absolute;
    bottom: 0px;
    color: #9a2f43 !important;
    padding: 3%;
    background: #f8f1f1;
    opacity: 0.8;
    font-size: 15px;
    width: 100%;
    text-align: left;
}

.video-list {
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 2%;
    background: #fbf7f5;
    position: relative;
    border-radius: 5%;
    height: 100%;
    padding: 0%;
}
</style>
