<template>
    <div class="Raisonlire">
        <div class="card" >
  <img src="src/images/articles-img/Rlire.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">7 BONNES RAISONS DE LIRE UNE HISTOIRE </h5>
    <p class="card-text">Développement de l’imagination, apprentissage du langage, stimulation des sens… Prendre l'habitude de lire un livre à son enfant peut devenir bénéfique pour son développement.</p>
    <a href="https://www.femmeactuelle.fr/enfant/enfants/7-bonnes-raisons-de-prendre-lhabitude-de-lire-une-histoire-a-ses-enfants-2069508" class="btn btn-primary" target="_blank">En Savoir Plus</a>
  </div>
</div>

    </div>
</template>
<script>
export default
{
name: "RaisonLire",
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