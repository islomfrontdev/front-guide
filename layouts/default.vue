<template>
  <div>
    <header class="bg-slate-200 sticky top-0 left-0">
      <nav class="flex items-center justify-between py-2 container mx-auto">
        <NuxtLink to="/">Front Guide</NuxtLink>
        <ul class="flex gap-2">
          <li>
            <NuxtLink to="/html">HTML</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/css">CSS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/js">JS</NuxtLink>
          </li>
        </ul>
        <select name="" id="" @change="(e) => setLocale(e.target.value)">
          <option value="uz">uz</option>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
        <ColorMode />
      </nav>
    </header>
    <div class="container mx-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const { setLocale } = useI18n();
</script>

<style scoped>
.router-link-exact-active {
  color: #e8c872;
}
</style>
<style></style>
