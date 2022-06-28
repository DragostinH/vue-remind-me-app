<script>
import BaseCard from "../UI/BaseCard.vue";
import BaseButton from "../UI/BaseButton.vue";
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";
export default {
  components: { BaseCard, BaseButton, StoredResources, AddResource },
  data() {
    return {
      selectedTab: "stored-resources",
      cssClass:"bg-secondary-500 text-primary-900",
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
  provide() {
    return {
      resources: this.resources,
    };
  },
  methods: {
    setSelectedTab(arg) {
      this.selectedTab = arg;
    },
  },
};
</script>

<template>
  <BaseCard class="flex justify-evenly">
    <BaseButton @click="setSelectedTab('stored-resources')"
      >Stored Resources</BaseButton>
    <BaseButton @click="setSelectedTab('add-resource')"
      >Add Resource</BaseButton>
  </BaseCard>
  <component :is="selectedTab"></component>
</template>