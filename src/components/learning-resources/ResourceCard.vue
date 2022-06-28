<script>
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";
export default {
  props: ["id", "title", "description", "link"],
  data() {
    return {};
  },
  components: { BaseCard, BaseButton },
};
</script>

<template>
  <li class="">
    <BaseCard>
      <div class="card flex justify-between">
        <div class="card-left">
          <h1 class="font-bold">{{ title }}</h1>
          <h2 class="font-thin italic">{{ description }}</h2>
          <nav>
            <a :href="link">View Resource</a>
          </nav>
        </div>

        <div class="card-right">
          <BaseButton> <span>Delete</span> </BaseButton>
        </div>
      </div>
    </BaseCard>
  </li>
</template>