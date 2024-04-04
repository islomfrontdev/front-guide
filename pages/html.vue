<script setup>
import tags from "../server/tags.json";

const q = ref("");

const filterTags = () => {
  return tags.filter((t) => t.name.includes(q.value.toLowerCase()));
};

const { locale } = useI18n();
</script>

<template>
  <input
    type="search"
    class="p-2 bg-transparent border border-solid border-gray-500 outline-none rounded my-2"
    placeholder="Search tags..."
    v-model="q"
  />
  <table class="w-full">
    <tbody>
      <template v-for="tag in filterTags()" :key="tag.name">
        <tr class="bg-slate-200">
          <td
            class="p-1 border border-solid border-gray-500 text-xl text-red-500"
          >
            {{ tag.name }}
          </td>

          <td class="p-1 border border-solid border-gray-500">
            <p
              class="p-1 text-xs text-gray-500 text-center"
              :class="{
                'bg-red-200': tag.selfClosing,
                'line-through': !tag.selfClosing,
              }"
            >
              self closing
            </p>
          </td>
          <td class="p-1 border border-solid border-gray-500">
            <p
              class="p-1 text-xs text-gray-500 text-center"
              :class="{
                'bg-green-200': tag.type == 'inline',
                'line-through': tag.type !== 'inline',
              }"
            >
              inline
            </p>
          </td>
          <td class="p-1 border border-solid border-gray-500">
            <p
              class="p-1 text-xs text-gray-500 text-center"
              :class="{
                'bg-yellow-200': tag.type == 'block',
                'line-through': tag.type !== 'block',
              }"
            >
              block
            </p>
          </td>
          <td class="p-1 border border-solid border-gray-500 w-[400px]">
            {{ tag.description[locale] }}
          </td>
        </tr>
        <tr>
          <td colspan="6" class="border border-solid border-gray-500">
            <details class="px-2 py-1 hover:cursor-pointer hover:bg-slate-200">
              <summary>{{ $t("code") }}</summary>
              <highlightjs
                autodetect
                :code="tag.examples[0]"
                class="container border-0"
              />
            </details>

            <details class="px-2 py-1 hover:cursor-pointer hover:bg-slate-200">
              <summary>{{ $t("result") }}</summary>
              <iframe
                :srcdoc="tag.examples[0]"
                width="100%"
                class="overflow-y-auto bg-slate-200"
                style="height: 400px !important"
              ></iframe>
            </details>
          </td></tr
      ></template>
    </tbody>
  </table>
</template>
