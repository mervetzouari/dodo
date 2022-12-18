<template>
    <div class="Vidfr">
        <div class="card">
            <img class="image" id="image" src="../images/home1.webp" />
            <iframe
                id="top"
                width="100%"
                height="100%"
                :src="this.activeVideo.youtubeURL"
                frameborder="0"
            >
            </iframe>
        </div>
        <div class="search-box col-sm-12">
            <input
                type="text"
                v-model="search"
                placeholder="Rechercher titre..."
            />
        </div>
        <div class="container">
            <div class="videoPost row">
                <VideoFr
                    class="col-sm-3"
                    onclick="document.getElementById('image').style.display='none';"
                    @click="chooseVideo(video)"
                    v-for="(video, index) in filteredVideos"
                    v-bind:key="index"
                    :name="video.name"
                    :image="video.image"
                ></VideoFr>
                <div class="paginate">
                    <paginate
                        :page-count="getPageCount"
                        :key="search"
                        :click-handler="clickCallback"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                        :container-class="'pagination'"
                        :page-class="'page-item'"
                    >
                    </paginate>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VideoFr from "../components/VedPost/KissatiFr.vue";
import Kissatijson from "../json/VideoFr.json";
import Paginate from "vuejs-paginate-next";
export default {
    name: "Video-Fr",
    components: {
        VideoFr,
        Paginate,
    },
    data: function () {
        return {
            videos: Kissatijson,
            activeVideo: "",
            perPage: 8,
            currentPage: 1,
            pages: [],
            search: "",
        };
    },
    methods: {
        chooseVideo(video) {
            //SET VIDEO AS ACTIVE VIDEO
            this.activeVideo = video;
            let elmnt = document.getElementById("top");
            elmnt.scrollIntoView(false);
        },
        clickCallback: function (pageNum) {
            this.currentPage = Number(pageNum);
        },
    },
    computed: {
        filteredVideos() {
            let current = this.currentPage * this.perPage;
            let start = current - this.perPage;
            if (this.search.length > 0) {
                return this.videos.filter((p) => {
                    return (
                        p.name
                            .toLowerCase()
                            .indexOf(this.search.toLowerCase()) != -1
                    );
                });
            } else {
                return this.videos.slice(start, current);
            }
        },

        getPageCount: function () {
            return Math.ceil(this.videos.length / this.perPage);
        },
    },
};
</script>
<style scoped>
.container {
    margin-left: 12%;
}
.image {
    margin-top: 0px;
    height: 100%;
    width: 100%;
}

.videoPost {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
}
.search-box {
    padding-right: 30% !important;
    padding-left: 30% !important;
    margin-bottom: 2%;
    padding-top: 2% !important;
}
input {
    width: 100% !important;
    border-radius: 5px;
    border-color: #9a2f43;
    background-color: #fbf7f5;
    opacity: 50%;
}
::placeholder {
    color: #9a2f43;
    opacity: 50%;
    text-align: left;
}
.card {
    margin-top: 5%;
}
@media only screen and (max-width: 600px) {
    .image {
        margin-top: 0px;
        height: 100%;
        width: 100%;
    }
    .card {
        margin-top: 15%;
        height: 210px;
    }
    .container {
        margin-left: 8%;
    }
}
</style>
