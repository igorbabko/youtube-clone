<template>
  <aside
    class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20"
  >
    <section class="py-2 border-b">
      <ul>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300"
          >
            <svg
              class="w-6 h-6 mr-6 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
              ></path>
            </svg>
            <span>Subscriptions</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
              ></path>
              <path
                d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
              ></path>
            </svg>
            <span>Library</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>History</span>
          </a>
        </li>
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
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <svg
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
                ></path>
              </svg>
            </div>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <svg
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span>Sports</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <svg
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
                ></path>
              </svg>
            </div>
            <span>Gaming</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <svg
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span>Movies</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <svg
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"
                ></path>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
              </svg>
            </div>
            <span>News</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <svg
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span>Live</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <svg
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span>360&deg; Video</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Browse channels</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        More from YouTube
      </div>
      <ul>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>YouTube Premium</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Live</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Report history</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Help</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center px-6 py-2 text-sm hover:bg-gray-100"
          >
            <svg
              class="w-6 h-6 mr-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Send feedback</span>
          </a>
        </li>
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
