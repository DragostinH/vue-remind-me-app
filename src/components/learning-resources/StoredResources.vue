<script>
import ResourceCard from "./ResourceCard.vue";

export default {
  inject: ["resources"],
  data() {
    return {};
  },
  components: {
    ResourceCard,
  },
};
</script>

<template>
  <ul class="flex flex-col gap-8 p-12">
    <ResourceCard
      v-for="(resource, index) in resources"
      :key="index"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    />
  </ul>
</template>