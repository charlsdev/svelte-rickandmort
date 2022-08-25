<script>
   import Character from "./lib/Character.svelte";
   import Btns from "./lib/Buttons.svelte";
   import Page from "./lib/Page.svelte";
   import Footer from "./lib/Footer.svelte";

   let characteres = [],
      page = 1;

   const searchAPI = async () => {
      const data = await fetch(
         `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const resp = await data.json();
      characteres = resp.results;
   };

   searchAPI();

   const nextPage = () => {
      ++page;
      searchAPI();
   };

   const backPage = () => {
      --page;
      searchAPI();
   };
</script>

<main>
   <div class="container">
      <div class="row mt-3 mb-2">
         <div class="col-md-6 text-center mx-auto">
            <h3 class="__tittle text-danger">API - Rick and Morty</h3>
         </div>
      </div>

      <Btns {page} {nextPage} {backPage} />

      <Page {page} />

      <div class="row mb-2">
         {#each characteres as character}
            <Character {character} />
         {/each}
      </div>

      <Page {page} />

      <Btns {page} {nextPage} {backPage} />
   </div>

   <Footer />
</main>

<style>
   .container {
      margin-bottom: 60px !important;
   }

   .__tittle {
      font-size: 2.5rem;
   }
</style>
