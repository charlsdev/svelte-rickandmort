<script>
   export let character;
</script>

<div class="col-md-6">
   <div class="card border-info mb-3">
      <div class="row g-0">
         <div class="col-4">
            <img
               src={character.image}
               class="img-fluid mx-auto d-block"
               alt={character.name}
            />
         </div>
         <div class="col-8">
            <div class="card-body">
               <h5 class="card-title text-danger">
                  {character.name}
               </h5>
               <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
               </p>
               <p class="card-text">
                  <small class="text-muted">
                     {character.species} - {character.status}
                  </small>
               </p>
            </div>
         </div>
      </div>
   </div>
</div>

<style>
   img {
      height: 100% !important;
      border-radius: 6px 0 0 6px;
   }
</style>
