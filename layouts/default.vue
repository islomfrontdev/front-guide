<template>
  <div class="">
    <header class="bg-[#B4B4B8]">
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
      </nav>
    </header>
    <div class="container mx-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #e8c872;
}
</style>
<style>
body {
  background-color: #c7c8cc;
}
</style>
