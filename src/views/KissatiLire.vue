<template>
    <div class="Kissati">
        <div class="search-box col-sm-12">
            <input type="text" v-model="search" placeholder=" إبحث هنا " />
            <br />
            <br />
        </div>

        <div class="container">
            <div class="posts-area row">
                <CardPost
                    class="col-md-3"
                    v-for="card in filteredCards"
                    v-bind:key="card.id"
                    :name="card.name"
                    :image="card.image"
                    :link="card.link"
                    :description="card.description"
                ></CardPost>
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
import CardPost from "../components/CardPost/CardPostArabe.vue";
import KissatiLire from "../json/KissatiLire.json";
import Paginate from "vuejs-paginate-next";
export default {
    name: "kissati-Lire",
    components: {
        CardPost,
        Paginate,
    },
    data: function () {
        return {
            cards: KissatiLire,
            perPage: 8,
            currentPage: 1,
            pages: [],
            search: "",
        };
    },
    methods: {
        clickCallback: function (pageNum) {
            this.currentPage = Number(pageNum);
        },
    },
    computed: {
        filteredCards() {
            let current = this.currentPage * this.perPage;
            let start = current - this.perPage;
            if (this.search.length > 0) {
                return this.cards.filter((p) => {
                    return (
                        p.name
                            .toLowerCase()
                            .indexOf(this.search.toLowerCase()) != -1
                    );
                });
            } else {
                return this.cards.slice(start, current);
            }
        },

        getPageCount: function () {
            return Math.ceil(this.cards.length / this.perPage);
        },
    },
};
</script>
<style>
::placeholder {
    color: #9a2f43;
    opacity: 50%;
    text-align: right;
}

input {
    width: 40%;
    border-radius: 5px;
    border-color: #9a2f43;
    background-color: #fbf7f5;
    opacity: 50%;
}
.Kissati {
    text-align: center;
    margin-top: 5rem;
    margin-left: 8%;
}
.search-box {
    padding-right: 8% !important;
}
</style>
