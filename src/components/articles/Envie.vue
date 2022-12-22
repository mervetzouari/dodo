<template>
    <div class="Envie">
        <div class="card" >
  <img src="/src/images/articles-img/EnvieLire.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Mon ENFANT N'AIME PAS LIRE! </h5>
    <p class="card-text">Lire enrichit le vocabulaire, améliore l’orthographe, structure la pensée et renforce l’imagination. Or, si les enfants montrent une appétence pour la lecture, ce plaisir décline avec l’âge. </p>
    <a href="https://www.femmeactuelle.fr/enfant/enfants/mon-enfant-naime-pas-lire-comment-lui-donner-envie-2075468" class="btn btn-primary" target="_blank">En Savoir Plus</a>
  </div>
</div>

    </div>
</template>
<script>
export default
{
name: "Envie-lire",
data: function () {
        return {
           
        };
    },
};
</script>
<style scoped>
.card-title{
color: #9a2f43;
font-size: 100%;
}
.card-text{
color: #9a2f43;
opacity: 50%;
font-size: 100%;
text-align: justify;

}
img{
    margin-top:0px;
    padding-top:0px;
}
.card{
    width: 90%; 
    height: 98%;
    background: #fbf7f5;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-left: 5%;
}
.btn{
    display: flex;
    width:50%;
  justify-content: center;
  align-items: center!important;
    background: #9a2f43;
    border: none;
    margin-left: 25%;
    color: #f5cbb9;
}
@media only screen and (max-width: 1100px)  {

    .card{
    width: 96%; 
    height: 100%;
    background: #fbf7f5;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 2%;

}
}


</style>