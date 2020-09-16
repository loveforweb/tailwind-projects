import Header from './components/Header';
import Hero from './components/Hero';
import React from 'react';
import VideoCardContainer from './components/VideoCardContainer';

const videoCardItems = [
  {
    id: 1,
    imgSrc:
      'https://occ-0-279-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU9JTT7fK4tbp6CSOrLswWn3ztdivoXgokfyhdhMOXBEYiujdxkdBR2w6D1mTbkZKBuWhLNLI1flFDXZcqtcdRlUdfmur_oYfCuEZEUIvipFRTk-IsKJa4I2-pN0oE6Xrg.webp?r=85c',
  },
  {
    id: 2,
    imgSrc:
      'https://occ-0-279-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcnWZGvG-L0FrkC7u3z3Ts443IRglcVEDDXy0PtZUXotsugL-_wNuX0XvwNPKcEZQRJNumrCxPHXkTwP_Lp-J3JaN1PEdo8qEdkhJPaXYcfusT_HLcomWw0ry8L75p1oqX5GcKIADdcNYYBtSPC2n5GTOtLEgjL9TMg0uxpb74Smo8vgbN6zzcQ.jpg?r=dd0',
  },

  {
    id: 3,
    imgSrc:
      'https://occ-0-279-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc80lfA0c_wgojs7bir3GxBeFCbllulPT-PMMUsIzUnoFztIEn9L80F3RR7klbC20kyfSMfyyuyVCkslIaa-3dmUCXKW7BLj7upwdn_hGhNk53PSY_kep70_4Jb8.jpg?r=b56',
  },
  {
    id: 4,
    imgSrc:
      'https://occ-0-279-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQsQzsyZLcHr-mNMZQPa4X7_4u9R125UapJbf7ZwZFTzWdirdfMyphuLDwRrn2jL6f9q32afdDqdQDTYSYF0AdcGckCgHUpi5E5GJhVvfGtnvsp1Y-kKpQoTUROq.jpg?r=672',
  },
  {
    id: 5,
    imgSrc:
      'https://occ-0-279-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc3GJn9Ocmccddco67Mi35AQjogN57hPZMxUPK3o9zynd2VQKBZMGVJVwIdlQK5WHidSg4h8J-OIdGD5ZB8N-gXWJBo.webp?r=d4c',
  },
  {
    id: 6,
    imgSrc:
      'https://occ-0-279-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQO417AoaMguF_DtQ1zOivjKkMZEpP5zA1YFG1zwSewxnHSW3UyRVVbIUbhMdVsXnZzFolmiO9x3tteyklzoM_fZ9VA.webp?r=a8a',
  },
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="px-4per mx-auto -mt-44 relative z-10">
        <VideoCardContainer title="My List" videoCardItems={videoCardItems} />
      </div>

      <div className="px-4per mx-auto mt-16">
        <VideoCardContainer
          title="US TV Programmes"
          videoCardItems={videoCardItems}
        />
      </div>

      <div className="px-4per mx-auto mt-16">
        <VideoCardContainer
          title="Trending Now"
          videoCardItems={videoCardItems}
        />
      </div>
    </>
  );
}

export default App;
