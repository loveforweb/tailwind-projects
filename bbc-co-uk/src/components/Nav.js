import React from 'react';

export default function Nav() {
  return (
    <nav className="border-b border-bbc-gray text-bbc-shipGray">
      <div className="container mx-auto flex flex-row px-4">
        <div className="border-r border-r-bbc-gray">
          <a href="https://www.bbc.co.uk" className="w-25 py-2 pr-4 block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 210.69 60"
              focusable="false"
              aria-hidden="true"
              className="w-full  -mt-px"
            >
              <path d="M36.76 33.87c-2.21-.78-3.78-.78-7.12-.78h-5.18v11.79H30c4.28 0 5.61-.25 7.37-1a5.58 5.58 0 002.47-2 4.86 4.86 0 00.85-2.55 5.11 5.11 0 00-.87-3.33 6.31 6.31 0 00-3.06-2.13zM35.25 24.36a5.28 5.28 0 001.51-4.23c-.06-2.62-1.6-5-7.63-5h-4.67v11.21h3.37c3.56 0 6.01-.62 7.42-1.98z"></path>
              <path d="M0 0v60h63.76V0zm46.69 45.76a11.33 11.33 0 01-5.3 4.24 22.16 22.16 0 01-8.89 1.64H16.72V8.41h12.21a22.73 22.73 0 019 1.44 11.34 11.34 0 014.94 4 9.73 9.73 0 011.8 5.93c0 4.09-1.77 6.94-5.51 8.86a13.9 13.9 0 016.74 3.92 10.42 10.42 0 012.71 7.32 10.86 10.86 0 01-1.92 5.88zM110.22 33.87c-2.21-.78-3.78-.78-7.12-.78h-5.17v11.79h5.5c4.28 0 5.62-.25 7.37-1a5.53 5.53 0 002.47-2 4.69 4.69 0 00.85-2.55 5 5 0 00-.84-3.35 6.22 6.22 0 00-3.06-2.11zM108.71 24.36a5.24 5.24 0 001.51-4.23c-.06-2.62-1.59-5-7.62-5h-4.67v11.21h3.37c3.56 0 6.01-.62 7.41-1.98z"></path>
              <path d="M73.46 0v60h63.76V0zm46.69 45.76a11.35 11.35 0 01-5.29 4.24 22.16 22.16 0 01-8.86 1.63H90.19V8.41h12.21a22.73 22.73 0 019 1.44 11.31 11.31 0 014.93 4 9.67 9.67 0 011.8 5.93c.06 4.09-1.76 6.94-5.51 8.86a13.86 13.86 0 016.74 3.92 10.38 10.38 0 012.71 7.32 10.78 10.78 0 01-1.92 5.88zM146.93 0v60h63.76V0zM198 48.24a36.9 36.9 0 01-8.07 3 38.19 38.19 0 01-8.6.93 28.11 28.11 0 01-12.73-2.8 22.06 22.06 0 01-8.73-7.84 20.39 20.39 0 01-3.35-11.13 21.92 21.92 0 013.4-11.71 23 23 0 019-8A28.39 28.39 0 01182 7.86a35.63 35.63 0 017.52 1 58.32 58.32 0 018 2.65v8A40.05 40.05 0 00189.8 16a28.65 28.65 0 00-7.39-1.28 19.92 19.92 0 00-9 1.7 15.8 15.8 0 00-6.57 5.51 14.64 14.64 0 006.46 21.71 21.75 21.75 0 009.09 1.65 26.09 26.09 0 007.1-1.2 34.81 34.81 0 008.5-4z"></path>
            </svg>
            <span className="sr-only">BBC Homepage</span>
          </a>
        </div>
        <ul className="hidden md:flex flex-row flex-auto items-center text-bbc-shipGray font-bold text-13">
          <li className="w-44 border-r border-r-bbc-gray flex h-full">
            <a
              href="!#"
              className="px-4 py-2 flex flex-row items-center w-full hover:border-b-bbc-blue hover:pb-1 hover:border-b-4"
            >
              <span>
                <svg
                  viewBox="0 0 32 32"
                  className="mr-2 w-5 -mt-px"
                  focusable="false"
                  aria-hidden="true"
                >
                  <title>sign-out</title>
                  <circle cx="16" cy="16" r="6.1"></circle>
                  <path d="M16 0a16 16 0 0 0 0 32 16.1 16.1 0 0 0 8.6-2.7L22.1 24H9.9l-1.6 3.5A13.8 13.8 0 0 1 2 15.9a14 14 0 1 1 23.9 10l.9 1.9A16 16 0 0 0 16 0z"></path>
                </svg>
              </span>
              <span className="text-13 font-bold">Jag</span>
            </a>
          </li>
          <li className="flex h-full border-r border-r-bbc-gray">
            <a
              href="!#"
              className="flex items-center w-full justify-center py-2 px-4 hover:border-b-bbc-blueNoti hover:pb-1 hover:border-b-4"
            >
              <span>
                <svg
                  className="w-4"
                  viewBox="0 0 32 32"
                  focusable="false"
                  aria-hidden="true"
                >
                  <title>alerts</title>
                  <path d="M12 28h8v4h-8zM26 18v-6a10 10 0 0 0-8-9.3V0h-4v2.7A10 10 0 0 0 6 12v6l-6 8h32z"></path>
                </svg>
                <span className="sr-only">Notifications</span>
              </span>
            </a>
          </li>
          <li className="flex h-full flex-1 border-r border-r-bbc-gray">
            <a
              href="!#"
              className="flex items-center w-full justify-center px-4 py-2 hover:border-b-bbc-blue hover:pb-1 hover:border-b-4"
            >
              Home
            </a>
          </li>
          <li className="flex h-full flex-1 border-r border-r-bbc-gray">
            <a
              href="!#"
              className="flex items-center w-full justify-center px-4 py-2 hover:border-b-bbc-red hover:pb-1 hover:border-b-4"
            >
              News
            </a>
          </li>
          <li className="flex h-full flex-1 border-r border-r-bbc-gray">
            <a
              href="!#"
              className="flex items-center w-full justify-center px-4 py-2 hover:border-b-bbc-yellow hover:pb-1 hover:border-b-4"
            >
              Sport
            </a>
          </li>
          <li className="flex h-full flex-1 border-r border-r-bbc-gray">
            <a
              href="!#"
              className="flex items-center w-full justify-center px-4 py-2 hover:border-b-bbc-lightBlue hover:pb-1 hover:border-b-4"
            >
              Weather
            </a>
          </li>
          <li className="flex h-full flex-1 border-r border-r-bbc-gray">
            <a
              href="!#"
              className="flex items-center w-full justify-center px-4 py-2 hover:border-b-bbc-pink hover:pb-1 hover:border-b-4"
            >
              iPlayer
            </a>
          </li>
          <li className="flex h-full flex-1 border-r border-r-bbc-gray">
            <a
              href="!#"
              className="flex items-center w-full justify-center px-4 py-2 hover:border-b-bbc-orange hover:pb-1 hover:border-b-4"
            >
              Sounds
            </a>
          </li>
          <li className="flex h-full flex-1 border-r border-r-bbc-gray">
            <a
              href="!#"
              className="flex items-center w-full justify-center px-4 py-2 hover:border-b-bbc-green hover:pb-1 hover:border-b-4"
            >
              CBBC
            </a>
          </li>
          <li className="flex h-full flex-1 border-r border-r-bbc-gray">
            <a
              href="!#"
              className="flex items-center w-full justify-center px-4 py-2 hover:border-b-bbc-yellowAlt hover:pb-1 hover:border-b-4"
            >
              CBeebies
            </a>
          </li>
          <li className="flex h-full flex-1 border-r border-r-bbc-gray text-bbc-shipGray font-bold text-13">
            <a
              href="!#"
              role="button"
              data-open="false"
              aria-controls="global-navigation-menu"
              aria-expanded="false"
              aria-haspopup="true"
              className="flex flex-row items-center py-2 px-4 hover:border-b-bbc-shipGray hover:pb-1 hover:border-b-4"
            >
              <span className="mr-2">More</span>
              <span>
                <svg
                  className="w-4"
                  viewBox="0 0 32 32"
                  focusable="false"
                  aria-hidden="true"
                >
                  <title>caret-down</title>
                  <path d="M16 21L24 12H8z"></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
        <a
          href="/search"
          className="text-13 font-bold border-r border-r-bbc-gray flex flex-row items-center py-2 px-4 hover:border-b-bbc-shipGray hover:pb-1 hover:border-b-4"
        >
          <span className="mr-2">
            <svg
              className="w-4"
              viewBox="0 0 32 32"
              focusable="false"
              aria-hidden="true"
            >
              <title>search</title>
              <path d="M32 28.5l-8.2-8.2a13 13 0 1 0-3.5 3.5l8.2 8.2zM6.6 19.4A9 9 0 1 1 13 22a8.9 8.9 0 0 1-6.4-2.6z"></path>
            </svg>
          </span>
          <span>Search</span>
        </a>
      </div>
    </nav>
  );
}
