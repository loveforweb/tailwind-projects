const articles = [
  {
    imgSrcSet:
      'https://ichef.bbci.co.uk/images/ic/240x135/p08rnhmf.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rnhmf.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rnhmf.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rnhmf.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rnhmf.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rnhmf.jpg 960w',
    imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rnhmf.jpg',
    imgAlt: '',
    isLive: true,
    headline: 'England build score in final ODI against Australia',
    category: 'Cricket',
    isMain: true,
    isLarge: true,
    isVideo: false,
  },
  {
    imgSrcSet:
      'https://ichef.bbci.co.uk/curationkit-ichef/240x135/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 240w, https://ichef.bbci.co.uk/curationkit-ichef/320x180/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 320w, https://ichef.bbci.co.uk/curationkit-ichef/480x270/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 480w, https://ichef.bbci.co.uk/curationkit-ichef/624x351/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 624w, https://ichef.bbci.co.uk/curationkit-ichef/800x450/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 800w, https://ichef.bbci.co.uk/curationkit-ichef/960x540/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg 960w',
    imgSrc:
      'https://ichef.bbci.co.uk/curationkit-ichef/240x135/cpsprodpb/1181F/production/_114311717_gettyimages-1209412650-1.jpg',
    imgAlt: 'Houses in RCT',
    isLive: false,
    headline: 'Second county in Wales to go into lockdown',
    category: 'Wales',
    isMain: true,
    isLarge: false,
    isVideo: false,
  },
  {
    imgSrcSet:
      'https://ichef.bbci.co.uk/images/ic/240x135/p08rn6ll.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rn6ll.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rn6ll.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rn6ll.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rn6ll.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rn6ll.jpg 960w',
    imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rn6ll.jpg',
    imgAlt: '',
    isLive: false,
    headline: "Biggie's crown and Tupac love letters go under the hammer",
    category: 'Newsbeat',
    isMain: true,
    isLarge: false,
    isVideo: false,
  },
  {
    imgSrcSet:
      'https://ichef.bbci.co.uk/images/ic/240x135/p08rnsck.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rnsck.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rnsck.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rnsck.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rnsck.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rnsck.jpg 960w',
    imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rnsck.jpg',
    imgAlt: '',
    isLive: false,
    headline: "TikTok's most popular star signs up for rival app",
    category: 'Newsround',
    isMain: false,
    isLarge: false,
    isVideo: false,
  },
  {
    imgSrcSet:
      'https://ichef.bbci.co.uk/images/ic/240x135/p08rn4qr.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rn4qr.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rn4qr.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rn4qr.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rn4qr.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rn4qr.jpg 960w',
    imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rn4qr.jpg',
    imgAlt: '',
    isLive: false,
    headline: "Facebook staffer sends 'blood on my hands' memo",
    category: 'Technology',
    isMain: false,
    isLarge: false,
    isVideo: false,
  },
  {
    imgSrcSet:
      'https://ichef.bbci.co.uk/images/ic/240x135/p08rnwgx.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rnwgx.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rnwgx.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rnwgx.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rnwgx.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rnwgx.jpg 960w',
    imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rnwgx.jpg',
    imgAlt: '',
    isLive: false,
    headline: 'I never prepared to suddenly not have my job',
    category: 'Newsbeat',
    isMain: false,
    isLarge: false,
    isVideo: false,
  },
  {
    imgSrcSet:
      'https://ichef.bbci.co.uk/images/ic/240x135/p08rrl7c.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rrl7c.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rrl7c.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rrl7c.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rrl7c.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rrl7c.jpg 960w',
    imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rrl7c.jpg',
    imgAlt: '',
    isLive: false,
    headline: "Test centre told visitors to 'use Scottish postcode'",
    category: 'England',
    isMain: false,
    isLarge: false,
    isVideo: false,
  },
  {
    imgSrcSet:
      'https://ichef.bbci.co.uk/images/ic/240x135/p08rqrpz.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rqrpz.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rqrpz.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rqrpz.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rqrpz.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rqrpz.jpg 960w',
    imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rqrpz.jpg',
    imgAlt: '',
    isLive: false,
    headline: 'PM: Speak to rule-breakers first before calling police',
    category: 'UK',
    isMain: false,
    isLarge: false,
    isVideo: false,
  },
  {
    imgSrcSet:
      'https://ichef.bbci.co.uk/images/ic/240x135/p08rrlvf.jpg 240w, https://ichef.bbci.co.uk/images/ic/320x180/p08rrlvf.jpg 320w, https://ichef.bbci.co.uk/images/ic/480x270/p08rrlvf.jpg 480w, https://ichef.bbci.co.uk/images/ic/624x351/p08rrlvf.jpg 624w, https://ichef.bbci.co.uk/images/ic/800x450/p08rrlvf.jpg 800w, https://ichef.bbci.co.uk/images/ic/960x540/p08rrlvf.jpg 960w',
    imgSrc: 'https://ichef.bbci.co.uk/images/ic/240x135/p08rrlvf.jpg',
    imgAlt: '',
    isLive: false,
    headline: "'My NHS dentist can fix my son's teeth - if we go private'",
    category: 'Scotland',
    isMain: false,
    isLarge: false,
    isVideo: true,
  },
];

export default articles;
