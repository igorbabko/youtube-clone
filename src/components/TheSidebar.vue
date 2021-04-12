<template>
  <aside
    class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20"
  >
    <section class="py-2 border-b">
      <ul>
        <SidebarNavItem label="Home" icon="home" is-active />
        <SidebarNavItem label="Trending" icon="fire" />
        <SidebarNavItem label="Subscriptions" icon="collection" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SidebarNavItem label="Library" icon="duplicate" />
        <SidebarNavItem label="History" icon="clock" />
      </ul>
    </section>
    <section class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment, and subscribe.
      </span>
      <button
        class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
      >
        <svg
          class="mr-2 w-7 h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Sign In
      </button>
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        Best of YouTube
      </div>
      <ul>
        <SidebarNavItem label="Music" icon="musicNote" />
        <SidebarNavItem label="Sports" icon="speakerphone" />
        <SidebarNavItem label="Gaming" icon="puzzle" />
        <SidebarNavItem label="Movies" icon="film" />
        <SidebarNavItem label="News" icon="newspaper" />
        <SidebarNavItem label="Live" icon="statusOnline" />
        <SidebarNavItem label="360&deg; Video" icon="eye" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SidebarNavItem label="Browse Channels" icon="plusCircle" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        More from YouTube
      </div>
      <ul>
        <SidebarNavItem label="YouTube Premium" icon="play" />
        <SidebarNavItem label="Live" icon="statusOnline" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SidebarNavItem label="Settings" icon="cog" />
        <SidebarNavItem label="Report history" icon="flag" />
        <SidebarNavItem label="Help" icon="questionMarkCircle" />
        <SidebarNavItem label="Send feedback" icon="annotation" />
      </ul>
    </section>
    <section class="px-6 py-4 text-xs font-semibold space-y-4">
      <div>
        <a href="#" class="mr-2">About</a>
        <a href="#" class="mr-2">Press</a>
        <a href="#" class="mr-2">Copyright</a>
        <a href="#" class="mr-2">Contact us</a>
        <a href="#" class="mr-2">Creators</a>
        <a href="#" class="mr-2">Advertise</a>
        <a href="#" class="mr-2">Developers</a>
      </div>
      <div>
        <a href="#" class="mr-2">Terms</a>
        <a href="#" class="mr-2">Privacy</a>
        <a href="#" class="mr-2">Policy & Safety</a>
        <a href="#" class="mr-2">How YouTube works</a>
        <a href="#" class="mr-2">Test new features</a>
      </div>
      <div class="font-normal text-gray-500">
        &copy; 2021 Google LLC
      </div>
    </section>
  </aside>
</template>

<script>
import SidebarNavItem from './SidebarNavItem.vue'

export default {
  components: {
    SidebarNavItem
  }
}
</script>
