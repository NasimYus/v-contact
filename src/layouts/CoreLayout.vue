<script setup lang="ts"></script>
<template>
  <div class="flex flex-col h-full">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">vContact</a>
      </div>
    </nav>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
