import React from 'react';

export default function ArticleCard({
  imgSrcSet,
  imgSrc,
  headline,
  category,
  isLive,
  imgAlt,
  isMain,
  isVideo,
  isLarge,
}) {
  return (
    <div className="bg-white h-full">
      <a
        href="!#"
        className={`group flex ${
          isMain ? 'h-full flex-col' : 'flex-row md:flex-col'
        }`}
      >
        <div className="relative">
          <img
            alt={imgAlt}
            srcSet={imgSrcSet}
            src={imgSrc}
            width="240"
            height="135"
            className="w-full"
          />
          {isVideo ? (
            <span className="absolute bottom-0 bg-white p-3">
              <svg
                viewBox="0 0 32 32"
                className="w-6 text-bbc-shipGray"
                focusable="false"
                aria-hidden="true"
              >
                <title>play</title>
                <path d="M3 32l26-16L3 0v32z"></path>
              </svg>
            </span>
          ) : null}
        </div>

        <div
          className={`${
            isLarge ? 'py-3 px-4' : 'px-2 py-2 md:px-4 md:py-4'
          } flex flex-col h-full justify-between`}
        >
          <div className="flex flex-row">
            <h3
              className={`${
                isLarge
                  ? `text-2xl leading-7 md:text-28 md:leading-8`
                  : `text-base md:text-lg leading-5`
              } font-bold text-bbc-shipGray`}
            >
              {isLive ? (
                <>
                  <span className="mr-2 inline-block text-bbc-blueNoti relative top-3px">
                    <svg
                      fill="currentColor"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="w-7"
                    >
                      <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path>
                      <circle
                        cx="16"
                        cy="16"
                        r="8.5"
                        className="animate-pulse"
                      ></circle>
                    </svg>
                  </span>
                  <span className="text-bbc-blueNoti mr-2">LIVE</span>
                </>
              ) : null}
              <span className="group-hover:text-bbc-blueNoti group-hover:underline">
                {headline}
              </span>
            </h3>
          </div>
          <span className="flex mt-1 md:mt-4 text-13 text-bbc-dimGray">
            {category}
          </span>
        </div>
      </a>
    </div>
  );
}
