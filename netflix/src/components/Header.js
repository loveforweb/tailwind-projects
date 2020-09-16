import React, { useEffect, useState } from 'react';

import logo from '../assets/images/logo.png';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);
  return (
    <header
      className={`w-screen flex flex-row px-4per py-5 fixed bg-gradient-header z-50 transition duration-300 ease-in-out ${
        scrollTop > 0 ? 'bg-black' : ''
      }`}
    >
      <a href="/" className="w-24 mr-6">
        <img src={logo} alt="Netflix logo" />
      </a>
      <ul className="flex flex-row text-sm items-center text-white leading-none">
        <li className="flex items-center ml-5 font-medium">Home</li>
        <li className="flex items-center ml-5">Series</li>
        <li className="flex items-center ml-5">Films</li>
        <li className="flex items-center ml-5">Latest</li>
        <li className="flex items-center ml-5">My List</li>
      </ul>

      <ul className="flex flex-row text-sm items-center text-white leading-none ml-auto">
        <li className="flex items-center ml-7">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </li>
        <li className="flex items-center ml-7">CHILDREN</li>
        <li className="flex items-center ml-7">
          <svg
            viewBox="0 0 20 21"
            role="img"
            aria-labelledby="gift-box"
            className="w-5"
          >
            <defs>
              <polygon
                id="path-1"
                points="9.09090909e-05 0 19.3881818 0 19.3881818 20.0960909 9.09090909e-05 20.0960909"
              ></polygon>
            </defs>
            <g
              id="V1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Cell-4-2" transform="translate(-1083.000000, -24.000000)">
                <g id="Group-3" transform="translate(1083.000000, 24.000000)">
                  <g id="Clip-2"></g>
                  <path
                    d="M18.0246364,10.087 C18.0246364,10.1733636 17.9519091,10.2460909 17.8655455,10.2460909 L17.6782727,10.2460909 L16.3146364,10.2460909 L3.07372727,10.2460909 L1.71009091,10.2460909 L1.52281818,10.2460909 C1.43645455,10.2460909 1.36372727,10.1733636 1.36372727,10.087 L1.36372727,7.56518182 C1.36372727,7.47790909 1.43645455,7.40518182 1.52281818,7.40518182 L9.01190909,7.40518182 L14.601,7.40518182 L17.8655455,7.40518182 C17.9519091,7.40518182 18.0246364,7.47790909 18.0246364,7.56518182 L18.0246364,10.087 Z M16.3146364,18.6624545 C16.3146364,18.6988182 16.281,18.7324545 16.2446364,18.7324545 L10.3755455,18.7324545 L10.3755455,11.6097273 L16.3146364,11.6097273 L16.3146364,18.6624545 Z M9.01190909,18.7324545 L3.14372727,18.7324545 C3.10645455,18.7324545 3.07372727,18.6988182 3.07372727,18.6624545 L3.07372727,11.6097273 L9.01190909,11.6097273 L9.01190909,18.7324545 Z M6.711,1.36336364 C7.94918182,1.36336364 8.95554545,2.37063636 8.95554545,3.60790909 L8.95554545,5.85245455 L6.711,5.85245455 C5.47372727,5.85245455 4.46645455,4.84518182 4.46645455,3.60790909 C4.46645455,2.37063636 5.47372727,1.36336364 6.711,1.36336364 L6.711,1.36336364 Z M10.3755455,4.95790909 C10.3755455,3.86972727 11.261,2.98518182 12.3491818,2.98518182 C13.4382727,2.98518182 14.3228182,3.86972727 14.3228182,4.95790909 C14.3228182,5.36063636 14.1973636,5.73063636 13.9882727,6.04154545 L10.3755455,6.04154545 L10.3755455,4.95790909 Z M17.8655455,6.04154545 L15.4928182,6.04154545 C15.6128182,5.70154545 15.6864545,5.33972727 15.6864545,4.95790909 C15.6864545,3.11790909 14.1891818,1.62063636 12.3491818,1.62063636 C11.491,1.62063636 10.7155455,1.95609091 10.1237273,2.49063636 C9.65009091,1.04972727 8.30827273,-0.000272727273 6.711,-0.000272727273 C4.72190909,-0.000272727273 3.10281818,1.61881818 3.10281818,3.60790909 C3.10281818,4.55245455 3.47736364,5.40245455 4.07554545,6.04154545 L1.52281818,6.04154545 C0.682818182,6.04154545 9.09090909e-05,6.72518182 9.09090909e-05,7.56518182 L9.09090909e-05,10.087 C9.09090909e-05,10.927 0.682818182,11.6097273 1.52281818,11.6097273 L1.71009091,11.6097273 L1.71009091,18.6624545 C1.71009091,19.4533636 2.35281818,20.0960909 3.14372727,20.0960909 L16.2446364,20.0960909 C17.0355455,20.0960909 17.6782727,19.4533636 17.6782727,18.6624545 L17.6782727,11.6097273 L17.8655455,11.6097273 C18.7055455,11.6097273 19.3882727,10.927 19.3882727,10.087 L19.3882727,7.56518182 C19.3882727,6.72518182 18.7055455,6.04154545 17.8655455,6.04154545 L17.8655455,6.04154545 Z"
                    id="Fill-1"
                    fill="#FFFFFF"
                    mask="url(#mask-2)"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </li>
        <li className="flex items-center ml-7">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5"
          >
            <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
          </svg>
        </li>
        <li className="flex items-center ml-7">
          <div className="flex flex-row items-center">
            <div className="rounded overflow-hidden mr-3">
              <img
                src="https://occ-0-279-1167.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUszHjcBM9-8i5iTQ43oh0zVrK7JPs7SkjEgG7mKwHZBAVwaUCeLc9VI6I_n9f_DyheuAuutPENaaAJYlPCG2_c.png?r=301"
                alt=""
              />
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              className="w-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
