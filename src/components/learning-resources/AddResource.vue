<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: { BaseCard },
};
</script>

<template>
  <base-card>
    <form action="" class="grid">
      <label for="">
        <p>Title</p>
        <input type="text" name="" id="" />
      </label>
      <label for=""
        ><p>Description</p>
        <textarea name="" id="" rows="3"></textarea>
      </label>
      <label for=""
        ><p>Link</p>
        <input type="text" name="" id="" />
      </label>
      <base-button>Submit</base-button>
    </form>
  </base-card>
</template>