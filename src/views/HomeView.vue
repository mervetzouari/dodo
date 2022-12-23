<template>
    <div>
        <img :src="changeme" @click="setInterval()" :alt="created()" />
    </div>
    <div class="card">
        <iframe
            class="video"
            src="https://www.youtube.com/embed/nNytqkkJtmE?autoplay=1&mute=1"
            title="YouTube video player"
            frameborder="0"
        >
        </iframe>
    </div>
    <div class="foot">
        <RaisonLire />
        <Envie />
        <EducationLire />
    </div>
</template>
<script>
import RaisonLire from "../components/articles/RaisonLire.vue";
import Envie from "../components/articles/Envie.vue";
import EducationLire from "../components/articles/EducationLire.vue";
export default {
    data: function () {
        return {
            photos: [
                "/dodo/assets/home1.68f02cf5.webp",
                "/dodo/assets/home2.webp",
                "../images/home3.webp",
            ],
            changeme: "",
        };
    },
    components: { RaisonLire, Envie, EducationLire },
    methods: {
        randomPhoto(imgs) {
            return imgs[Math.floor(Math.random() * this.photos.length)];
        },
        created() {
            this.changeme = this.randomPhoto(this.photos);
        },
        setInterval: function () {
            this.created();
            setInterval(this.created, 4000);
        },
    },
};
</script>
<style>
img {
    width: 100%;
    margin-top: 4%;
}
.video {
    margin: 2px;
    width: 98%;
    height: 98%;
}
.card {
    margin: 2px;
    width: 80%;
    height: 550px;
    background: black;
    margin-left: 10%;
}
.foot {
    display: flex;
}
@media only screen and (max-width: 1100px) {
    img {
        margin-top: 5%;
        width: 100%;
    }
    .video {
        margin-top: 2px;
        width: 100%;
        height: 100%;
    }
    .card {
        display: flex;
        margin: 0px;
        width: 100%;
        height: 300px;
        background: black;
    }
    .foot {
        display: block;
    }
}
</style>
