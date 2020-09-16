import ArticleCard from './components/ArticleCard';
import Nav from './components/Nav';
import React from 'react';
import SiteTitle from './components/SiteTitle';

const card1 = {
  imgSrcSet:
    'https://ichef.bbci.co.uk/images/ic/240x135/p08rnhmf.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rnhmf.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rnhmf.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rnhmf.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rnhmf.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rnhmf.jpg 960w',
  imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rnhmf.jpg',
  imgAlt: '',
  isLive: true,
  headline: 'England build score in final ODI against Australia',
  category: 'Cricket',
  main: true,
};

const card2 = {
  imgSrcSet:
    'https://ichef.bbci.co.uk/curationkit-ichef/240x135/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 240w, https://ichef.bbci.co.uk/curationkit-ichef/320x180/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 320w, https://ichef.bbci.co.uk/curationkit-ichef/480x270/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 480w, https://ichef.bbci.co.uk/curationkit-ichef/624x351/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 624w, https://ichef.bbci.co.uk/curationkit-ichef/800x450/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 800w, https://ichef.bbci.co.uk/curationkit-ichef/960x540/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 960w',
  imgSrc:
    'https://ichef.bbci.co.uk/curationkit-ichef/240x135/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg',
  imgAlt: 'Houses in RCT',
  isLive: false,
  headline: 'Second county in Wales to go into lockdown',
  category: 'Wales',
  main: false,
};

const card3 = {
  imgSrcSet:
    'https://ichef.bbci.co.uk/images/ic/240x135/p08rn6ll.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rn6ll.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rn6ll.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rn6ll.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rn6ll.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rn6ll.jpg 960w',
  imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rn6ll.jpg',
  imgAlt: '',
  isLive: false,
  headline: "Biggie/'s crown and Tupac love letters go under the hammer",
  category: 'Newsbeat',
  main: false,
};
const card4 = {
  imgSrcSet:
    'https://ichef.bbci.co.uk/images/ic/240x135/p08rnsck.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rnsck.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rnsck.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rnsck.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rnsck.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rnsck.jpg 960w',
  imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rnsck.jpg',
  imgAlt: '',
  isLive: false,
  headline: "TikTok's most popular star signs up for rival app",
  category: 'Newsround',
  main: false,
};
const card5 = {
  imgSrcSet:
    'https://ichef.bbci.co.uk/images/ic/240x135/p08rn4qr.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rn4qr.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rn4qr.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rn4qr.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rn4qr.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rn4qr.jpg 960w',
  imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rn4qr.jpg',
  imgAlt: '',
  isLive: false,
  headline: "Facebook staffer sends 'blood on my hands' memo",
  category: 'Technology',
  main: false,
};
const card6 = {
  imgSrcSet:
    'https://ichef.bbci.co.uk/images/ic/240x135/p08rnwgx.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rnwgx.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rnwgx.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rnwgx.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rnwgx.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rnwgx.jpg 960w',
  imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rnwgx.jpg',
  imgAlt: '',
  isLive: false,
  headline: "'I never prepared to suddenly not have my job'",
  category: 'Newsbeat',
  main: false,
};

function App() {
  return (
    <>
      <header className="flex flex-col">
        <Nav />
        <SiteTitle />
      </header>

      <section className="bg-bbc-lightGray py-4">
        <div className="container mx-auto px-4 grid grid-cols-4 gap-15p">
          <div className="col-span-2">
            <ArticleCard {...card1} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...card2} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...card3} />
          </div>
        </div>
      </section>
      <section className="bg-top-stories bg-cover pb-6">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-bold py-5 text-2xl">
            More top stories
          </h2>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-3 gap-15p">
          <div className="col-span-1">
            <ArticleCard {...card4} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...card5} />
          </div>
          <div className="col-span-1">
            <ArticleCard {...card6} />
          </div>
        </div>
      </section>
      <div className="container h-screen mx-auto px-3">
        <div className="w-full max-w-md mx-auto my-auto items-center justify-center h-screen flex">
          <p className="text-sm text-white bg-gray-800 p-2 ">Base Template</p>
        </div>
      </div>
    </>
  );
}

export default App;
