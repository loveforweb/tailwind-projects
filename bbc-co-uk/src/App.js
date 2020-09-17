import ArticleCard from './components/ArticleCard';
import Nav from './components/Nav';
import React from 'react';
import SiteTitle from './components/SiteTitle';
import articles from './data/articles';

function App() {
  return (
    <>
      <header className="flex flex-col">
        <Nav />
        <SiteTitle />
      </header>

      <section className="bg-bbc-lightGray py-4">
        <div className="container mx-auto px-4 grid grid-cols-2 grid-rows-2 grid-rows-auto md:grid-cols-4 md:grid-row-0 gap-15p">
          <div className="col-span-2">
            <ArticleCard {...articles[0]} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...articles[1]} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...articles[2]} />
          </div>
        </div>
      </section>

      <section className="bg-bbc-lightGray md:bg-top-stories bg-cover pb-6">
        <div className="container mx-auto px-4">
          <h2 className="md:text-white font-bold py-5 text-xl md:text-2xl">
            More top stories
          </h2>
        </div>
        <div className="container mx-auto px-4 grid grid-rows-3 md:grid-cols-3 md:grid-rows-none gap-15p">
          <div className="col-span-1">
            <ArticleCard {...articles[3]} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...articles[4]} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...articles[5]} />
          </div>
        </div>
      </section>

      <section className="bg-bbc-lightGray md:bg-current-topic bg-cover pb-6">
        <div className="container mx-auto px-4">
          <h2 className="text-bbc-shipGray font-bold py-5 text-xl md:text-2xl">
            <a
              href="!#"
              className="hover:text-bbc-blueNoti inline-flex flex-row items-center"
            >
              Coronavirus pandemic{' '}
              <span className="h-full relative top-2px ml-2">
                <svg
                  viewBox="0 0 32 32"
                  className="w-3.5"
                  focusable="false"
                  aria-hidden="true"
                >
                  <title>next</title>
                  <path d="M29 16L3 0v7.2L17.6 16 3 24.8V32l26-16z"></path>
                </svg>
              </span>
            </a>
          </h2>
        </div>
        <div className="container mx-auto px-4 grid grid-rows-3 md:grid-cols-3 md:grid-rows-none gap-15p">
          <div className="col-span-1">
            <ArticleCard {...articles[6]} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...articles[7]} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...articles[8]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
