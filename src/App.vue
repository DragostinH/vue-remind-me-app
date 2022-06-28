<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import StoredResources from "./components/learning-resources/StoredResources.vue";
import TheResources from "./components/learning-resources/TheResources.vue";
export default {
  data() {
    return {
      resources: [
        {
          id: "1",
          title: "OneTitle",
          description: "OneDescription",
          link: "https://onelink.com",
        },
        {
          id: "2",
          title: "TwoTitle",
          description: "TwoDescription",
          link: "https://twolink.com",
        },
      ],
    };
  },
  components: { TheHeader, StoredResources, TheResources },
};
</script>


<template>
  <div class="app-wrapper bg-primary-600 h-screen">
    <TheHeader />
    <TheResources />
    <StoredResources :resources="resources" />
  </div>
</template>


<style>
</style>
