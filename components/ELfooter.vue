<template>
    <footer class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center space-x-6 md:order-2">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div class="mt-8 md:order-1 md:mt-0">
          <p class="text-center text-xs leading-5 text-gray-500">&copy; 2023 Erik Leuning | erikleuning.nl</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { defineComponent, h } from 'vue'
  
  const navigation = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4ZM9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23Zm9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.43 1.43 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'E-mail',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },

  ]
  </script>

  