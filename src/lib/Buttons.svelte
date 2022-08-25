<script>
   export let page;
   export let backPage;
   export let nextPage;
</script>

<div class="row mb-3">
   <div class="col-6 text-start">
      <button
         class="btn btn-outline-danger btn-sm"
         on:click={backPage}
         disabled={page == 1}
      >
         <span class="badge rounded-pill bg-light">{page - 1}</span> &nbsp; Atrás
      </button>
   </div>

   <div class="col-6 text-end">
      <button
         class="btn btn-outline-success btn-sm"
         on:click={nextPage}
         disabled={page == 42}
      >
         Siguiente &nbsp;
         <span class="badge rounded-pill bg-light">{page + 1}</span>
      </button>
   </div>
</div>

<style>
   button {
      padding: 3px 25px;
   }
</style>
