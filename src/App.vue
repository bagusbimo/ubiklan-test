<template>
  <main>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">{{ $route.meta.title }}</h1>
      </div>
    </header>
    <div class="mx-auto px-4 pt-4 max-w-screen-lg">
      <div class="flex justify-center">
        <img src="../../assets/img/banner.png" />
      </div>
      <div
        class="max-w-screen-xl px-4 pt-12 mx-auto sm:px-6 lg:pt-16 lg:px-8"
      >
        <h2
          class="text-3xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-4xl sm:leading-10"
        >
          PRODUCT
        </h2>
      </div>
      <router-view />
      <div class="my-4" />
    </div>
  </main>
</template>
