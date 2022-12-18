<template>
    <div class="row">
        <div class="Posts card col">
            <img v-bind:src="image" alt="image" class="post-image" />
            <div class="card-body">
                <h2 class="post-name">
                    <a v-bind:href="link" class="post-link" target="_blank">
                        {{ name }}
                    </a>
                </h2>
                <p class="post-description">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
   
export default {
    name: "CardPost",
    props: ["name", "description", "image", "link"],
  
};
</script>
<style scoped>
.row{
    margin-bottom: 1%;
}
.Posts {
    background: #fbf7f5;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    text-align: right;
    position: relative;
    padding-right: 0px;
    padding-left: 0px;
    border-radius: 5%;
    height: 100%;
    
    
}

.post-image {
    
    width: 100%;
    margin-top: 0px;
    border-radius: 2%;
  
}
.card-body {
    width: 15rem;
}
.col {
    margin: 7px;
}

.post-link{
    color: #9a2f43;
}
.post-description{
    color: #9a2f43;
    opacity: 80%;
    font-size: 13px;
    padding:3px;

}
h2{
    font-size:20px ;
    
}
</style>
