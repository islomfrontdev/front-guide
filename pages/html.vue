<template>
  <input
    type="search"
    class="p-2 bg-transparent border border-solid outline-none rounded my-2"
    placeholder="Search tags..."
    v-model="q"
  />
  <table class="w-full">
    <tbody>
      <tr v-for="tag in filterTags()" :key="tag.name">
        <td class="p-2 border border-solid">{{ tag.name }}</td>
        <td class="p-2 border border-solid">
          <p
            class="p-1"
            :class="{
              'bg-[#FFF3CF]': tag.type === 'meta',
            }"
          >
            meta
          </p>
        </td>
        <td class="p-2 border border-solid">
          <p
            class="p-1"
            :class="{
              'bg-red-200': tag.selfClosing,
            }"
          >
            self closing
          </p>
        </td>
        <td class="p-2 border border-solid">
          <p
            class="p-1"
            :class="{
              'bg-green-200': tag.type == 'inline',
            }"
          >
            inline
          </p>
        </td>
        <td class="p-2 border border-solid">
          <p
            class="p-1"
            :class="{
              'bg-yellow-200': tag.type == 'block',
            }"
          >
            block
          </p>
        </td>
        <td class="w-[400px] p-2 border border-solid">
          <p class="text-xs pb-2 border-b-2 border-solid">
            {{ tag.examples[0] }}
          </p>
          <iframe :srcdoc="tag.examples[0]" width="100%" height="auto"></iframe>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import tags from "../server/tags.json";

const q = ref("");

const filterTags = () => {
  return tags.filter((t) => t.name.includes(q.value.toLowerCase()));
};
</script>

<style lang="scss" scoped></style>
