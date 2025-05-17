import { useState } from 'react';
import YouTubersData from './data';
import { YoutuberDataItem } from '../../../interfaces/YoutuberData';

const YouTubers = () => {
  const youtuberValues: YoutuberDataItem[] = Object.values(YouTubersData);

  const [current, setCurrent] = useState<YoutuberDataItem>(youtuberValues[0]);
  const [queue, setQueue] = useState<YoutuberDataItem[]>(
    youtuberValues.slice(1),
  );

  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(prev => !prev);
  };

  const handleNext = () => {
    if (queue.length === 0) return;

    const [next, ...rest] = queue;
    setCurrent(next);
    setQueue([...rest, current]);
  };

  const handleSuggestionClick = (clicked: YoutuberDataItem) => {
    setQueue(prev => [...prev.filter(v => v.name !== clicked.name), current]);
    setCurrent(clicked);
  };

  const handleSubscribe = () => {
    const currentText: HTMLElement | null = document.getElementById(
      'subscribe-button-text',
    );
    if (currentText) {
      currentText.innerHTML =
        currentText.innerHTML === 'Subscribe' ? 'Subscribed' : 'Subscribe';
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'Check out this cool project!',
          url: window.location.href,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Sharing failed:', error);
      }
    } else {
      alert('Web Share API not supported on this browser.');
    }
  };

  const videoDescription = `I drew 14 of my favourite youtubers in different style for fun, and to also learn a variety of techniques needed to execute them. It was a fun project, at least 7 out of them saw it and commented, which was nice.
  \nFull list of Youtubers:
  \n${youtuberValues.map(y => `${y.name}`).join('\n')}
  \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur egestas libero, eget faucibus quam rutrum et. In bibendum, ipsum eu suscipit tempus, tortor risus iaculis lectus, vitae lacinia nunc nisl eu nulla. Sed urna lorem, molestie sed varius et, viverra vel risus. Curabitur lobortis, lectus ac elementum placerat, mi urna vehicula libero, vitae fringilla magna sapien at ipsum. Morbi dignissim nisl mi, at ultricies enim mattis sed. Phasellus feugiat nisl ut ornare dictum. Suspendisse scelerisque nibh a augue aliquam ornare. Fusce eleifend risus a nisi mattis, ut congue augue accumsan. Curabitur eget arcu nec neque sollicitudin euismod ut sed libero. Suspendisse facilisis pellentesque lorem sed gravida. Curabitur non mi elit. Donec sed commodo risus, a dignissim turpis. Vestibulum molestie ultrices metus, et efficitur nisi venenatis vel. Aliquam vel tristique neque, elementum condimentum risus. Nam molestie arcu lectus, in congue arcu ultrices quis.
\nPhasellus eu facilisis ante. Curabitur eu ligula lobortis, sagittis ante nec, laoreet turpis. Duis malesuada semper massa eu posuere. Nulla ac dui in mi pellentesque fringilla sit amet id dui. Aenean tincidunt dapibus velit, quis laoreet ante sollicitudin eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi dolor, aliquam eu vehicula vitae, elementum ut enim.
\nMaecenas venenatis pretium pellentesque. Vestibulum nec gravida quam. Quisque suscipit vehicula vehicula. Fusce et laoreet enim, vel rutrum odio. In sed nibh sit amet elit bibendum mollis quis ut augue. Morbi sed tempus tellus, id vulputate leo. Cras vel ante scelerisque, congue nisl a, venenatis ante.
\nCurabitur gravida sed sapien at blandit. Phasellus sapien elit, commodo non diam et, viverra feugiat nisl. Fusce suscipit eros eu lorem ultrices, non gravida metus finibus. Ut id dapibus mi. Mauris lacus ligula, vehicula ut tristique nec, vestibulum ac tortor. Pellentesque vitae massa pellentesque, eleifend justo ac, pretium mauris. Aliquam viverra risus id vulputate ultricies.
\nUt quis aliquet est, sed rutrum velit. Suspendisse in augue non lectus eleifend maximus. Sed lobortis volutpat vehicula. Etiam finibus sodales nunc nec luctus. Quisque sollicitudin sapien in ullamcorper porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras quis auctor enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus cursus leo non tellus vulputate mattis. Ut finibus id justo eget semper. Praesent sed pulvinar libero. Ut faucibus sit amet leo ut congue.`;

  return (
    <div className="w-full h-auto min-h-screen bg-[#17140b] flex flex-col lg:flex-row">
      <div className="w-full h-auto px-5 lg:pr-3 pt-10 lg:pl-12 lg:w-[69.5%] lg:h-full">
        <div className="w-full h-auto flex flex-col items-center justify-start">
          <div className="w-screen lg:w-full h-auto shadow-2xl max-w-[120rem] max-h-[67.5rem]">
            <img
              className="h-auto w-screen lg:w-full lg:rounded-2xl"
              src={current.thumbnail}
              alt={current.name}
              title={current.name}
            />
          </div>
          <div className="flex flex-row items-start justify-start w-full h-auto pt-5 text-base sm:text-2xl font-custom tracking-tight font-bold antialiased text-slate-100">
            <p>{current.title}</p>
          </div>
          <div className="profile-and-interactions-container flex flex-col lg:flex-row items-start justify-start w-full h-auto pt-3">
            <div className="profile-and-subscribe-button-container flex items-start justify-between lg:justify-start w-full lg:w-auto h-auto">
              <div className="profile-photo-and-name-container flex flex-row items-start justify-start w-auto h-auto">
                <img
                  className="profile-photo rounded-full h-12 mr-4 cursor-pointer"
                  src={current.profilePhoto}
                  alt={current.name}
                  title={current.name}
                />
                <div className="profile-name-and-subscribers-container w-auto h-12 mr-4 flex flex-col items-start justify-center">
                  <p className="profile-name text-xs sm:text-xl font-custom tracking-tight font-bold antialiased text-slate-100">
                    {current.name}
                  </p>
                  <p className="profile-subscribers text-[0.5rem] sm:text-base font-custom tracking-normal font-semibold antialiased text-gray-400">
                    {current.subscribers} subscribers
                  </p>
                </div>
              </div>
              <div
                className="w-auto h-12 rounded-3xl bg-[rgba(240,240,240,1)] hover:bg-[rgba(240,240,240,0.8)] flex flex-col items-center justify-center p-4 cursor-pointer"
                id="subscribe-button"
                onClick={handleSubscribe}
              >
                <p
                  className="text-xs sm:text-base font-custom tracking-tight font-semibold antialiased text-gray-900"
                  id="subscribe-button-text"
                >
                  Subscribed
                </p>
              </div>
            </div>
            <div className="w-full lg:w-auto lg:max-w-[43%] h-12 ml-auto mr-0 flex flex-row justify-between sm:justify-start gap-4 mt-5 lg:mt-0 overflow-hidden lg:justify-end">
              <div className="w-28 h-12 rounded-3xl bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] flex flex-col items-center justify-center p-4 cursor-pointer">
                <p className="text-xs sm:text-base font-custom tracking-tight font-semibold antialiased text-slate-100">
                  {current.likes} likes
                </p>
              </div>
              <div
                className="w-28 h-12 rounded-3xl bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] flex flex-col items-center justify-center p-4 cursor-pointer"
                onClick={handleShare}
              >
                <p className="text-xs sm:text-base font-custom tracking-tight font-semibold antialiased text-slate-100">
                  Share
                </p>
              </div>
              <div
                className="w-28 h-12 rounded-3xl bg-[rgba(240,240,240,0.4)] hover:bg-[#ff1a47] flex flex-col items-center justify-center p-4 cursor-pointer"
                onClick={handleNext}
                style={{
                  transition:
                    'background-color 300ms cubic-bezier(0.65, 0, 0.35, 1)',
                }}
              >
                <p className="text-xs sm:text-base font-custom tracking-tight font-semibold antialiased text-slate-100">
                  Next
                </p>
              </div>
            </div>
          </div>
          <div className="video-description w-full h-auto rounded-2xl p-3 flex flex-col items-start justify-start bg-[#464241] mt-5 lg:mb-10">
            <div className="video-description-date-and-views-container w-full h-8 flex flex-row items-start justify-start">
              <span className="text-xs sm:text-base font-custom tracking-normal font-semibold antialiased text-slate-100">
                {current.views}&nbsp;views&nbsp;&nbsp;{current.datePosted}
              </span>
            </div>
            <div className="w-full h-auto flex flex-col items-start justify-start">
              <p
                onClick={toggleDescription}
                className={`text-xs sm:text-base font-custom tracking-normal font-normal antialiased text-slate-100 text-justify cursor-pointer ${
                  expanded
                    ? ''
                    : 'truncate line-clamp-4 lg:truncate-none lg:line-clamp-none'
                }`}
                style={{ whiteSpace: 'pre-line' }}
              >
                {videoDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto lg:w-[30.5%] pt-2 lg:pt-10 px-0">
        <div className="relative pl-5 lg:pl-0">
          <div className="suggested-topics scroll-area flex space-x-2 overflow-x-scroll lg:px-2 pt-2">
            {/* 'All' Tab */}
            <div className="suggested-topic flex-shrink-0 h-8 bg-slate-100 px-3 flex items-center justify-center rounded-lg cursor-pointer">
              <p className="text-base font-custom tracking-normal font-normal antialiased text-black whitespace-nowrap">
                All
              </p>
            </div>
            {/* Suggested 1 */}
            <div className="suggested-topic flex-shrink-0 h-8 max-w-xs bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] px-3 flex items-center justify-center rounded-lg cursor-pointer">
              <p className="text-base font-custom tracking-normal font-normal antialiased text-slate-100 truncate">
                {current.suggested1}
              </p>
            </div>
            {/* Suggested 2 */}
            <div className="suggested-topic flex-shrink-0 h-8 max-w-xs bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] px-3 flex items-center justify-center rounded-lg cursor-pointer">
              <p className="text-base font-custom tracking-normal font-normal antialiased text-slate-100 truncate">
                {current.suggested2}
              </p>
            </div>
            {/* Suggested 3 */}
            <div className="suggested-topic flex-shrink-0 h-8 max-w-xs bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] px-3 flex items-center justify-center rounded-lg cursor-pointer">
              <p className="text-base font-custom tracking-normal font-normal antialiased text-slate-100 truncate">
                {current.suggested3}
              </p>
            </div>
          </div>
          <div className="fade-right pointer-events-none absolute right-0 top-0 h-full w-10"></div>
        </div>

        <div className="suggested-videos mt-5 w-full h-auto">
          {queue.map(suggestion => (
            <button
              key={suggestion.name}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggested-video flex flex-col lg:flex-row gap-3 w-screen lg:w-full text-left hover:bg-[rgba(240,240,240,0.2)] lg:p-2 rounded"
              style={{
                transition:
                  'background-color 50ms cubic-bezier(0.65, 0, 0.35, 1)',
              }}
            >
              <img
                src={suggestion.thumbnail}
                alt={suggestion.title}
                className="w-screen h-auto lg:w-[12rem] lg:h-[8rem] object-cover rounded"
              />
              <div className="flex flex-col gap-1 text-xl lg:text-sm pl-5 lg:pl-0 pb-5 lg:pb-0">
                <p className="font-custom text-slate-100 font-semibold line-clamp-2 mb-1">
                  {suggestion.title}
                </p>
                <span className="font-custom text-[#8b8c8e] text-base font-semibold lg:text-xs">
                  {suggestion.name}
                </span>
                <p className="font-custom text-[#8b8c8e] text-base font-semibold lg:text-xs">
                  {suggestion.views}&nbsp;views • {suggestion.datePosted}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubers;
