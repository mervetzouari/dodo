<template>
    <div class="Lire35">
        <div class="search-box col-sm-12">
            <input type="text" v-model="search"   placeholder="  Rechercher titre... "/>
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
import CardPost from "../components/CardPost/CardPost.vue";
import Lire35 from "../json/Lire35.json";
import Paginate from "vuejs-paginate-next";
export default {
    name: "Lire-3-5",
    components: {
        CardPost,
        Paginate,
    },
    data: function () {
        return {
            cards: Lire35,
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
    }
</script>
<style>
 ::placeholder{
    color:#9a2f43 ;
    opacity: 50%;
    text-align: left;
 }

input{

  width: 40%;
  border-radius: 5px;
  border-color:#9a2f43 ;
  background-color: #FBF7F5;
  opacity:50%;

}
.Lire35 {
    text-align: center;
    margin-top: 5rem;
    margin-left: 8%;
}
.search-box {
    padding-right: 8%!important;
}


    
</style>