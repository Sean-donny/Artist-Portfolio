import React, { useState } from 'react';
import YouTubersData from './data';
import { YoutuberDataItem } from '../../../interfaces/YoutuberData';

const YouTubers = () => {
  const youtuberValues: YoutuberDataItem[] = Object.values(YouTubersData);

  const [current, setCurrent] = useState<YoutuberDataItem>(youtuberValues[0]);
  const [queue, setQueue] = useState<YoutuberDataItem[]>(
    youtuberValues.slice(1),
  );

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

  const loremIpsum = `I drew 14 of my favourite youtubers in different style for fun, and to also learn a variety of techniques needed to execute them. It was a fun project, at least 7 out of them saw it and commented, which was nice.
  \nFull list of Youtubers:
  \n${youtuberValues.map(y => `${y.name}`).join('\n')}
  \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur egestas libero, eget faucibus quam rutrum et. In bibendum, ipsum eu suscipit tempus, tortor risus iaculis lectus, vitae lacinia nunc nisl eu nulla. Sed urna lorem, molestie sed varius et, viverra vel risus. Curabitur lobortis, lectus ac elementum placerat, mi urna vehicula libero, vitae fringilla magna sapien at ipsum. Morbi dignissim nisl mi, at ultricies enim mattis sed. Phasellus feugiat nisl ut ornare dictum. Suspendisse scelerisque nibh a augue aliquam ornare. Fusce eleifend risus a nisi mattis, ut congue augue accumsan. Curabitur eget arcu nec neque sollicitudin euismod ut sed libero. Suspendisse facilisis pellentesque lorem sed gravida. Curabitur non mi elit. Donec sed commodo risus, a dignissim turpis. Vestibulum molestie ultrices metus, et efficitur nisi venenatis vel. Aliquam vel tristique neque, elementum condimentum risus. Nam molestie arcu lectus, in congue arcu ultrices quis.
\nPhasellus eu facilisis ante. Curabitur eu ligula lobortis, sagittis ante nec, laoreet turpis. Duis malesuada semper massa eu posuere. Nulla ac dui in mi pellentesque fringilla sit amet id dui. Aenean tincidunt dapibus velit, quis laoreet ante sollicitudin eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi dolor, aliquam eu vehicula vitae, elementum ut enim.
\nMaecenas venenatis pretium pellentesque. Vestibulum nec gravida quam. Quisque suscipit vehicula vehicula. Fusce et laoreet enim, vel rutrum odio. In sed nibh sit amet elit bibendum mollis quis ut augue. Morbi sed tempus tellus, id vulputate leo. Cras vel ante scelerisque, congue nisl a, venenatis ante.
\nCurabitur gravida sed sapien at blandit. Phasellus sapien elit, commodo non diam et, viverra feugiat nisl. Fusce suscipit eros eu lorem ultrices, non gravida metus finibus. Ut id dapibus mi. Mauris lacus ligula, vehicula ut tristique nec, vestibulum ac tortor. Pellentesque vitae massa pellentesque, eleifend justo ac, pretium mauris. Aliquam viverra risus id vulputate ultricies.
\nUt quis aliquet est, sed rutrum velit. Suspendisse in augue non lectus eleifend maximus. Sed lobortis volutpat vehicula. Etiam finibus sodales nunc nec luctus. Quisque sollicitudin sapien in ullamcorper porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras quis auctor enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus cursus leo non tellus vulputate mattis. Ut finibus id justo eget semper. Praesent sed pulvinar libero. Ut faucibus sit amet leo ut congue.`;

  return (
    // <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
    //   {/* Main Video */}
    //   <main className="flex-1 p-4 flex justify-center">
    //     <div className="bg-white rounded-lg shadow-lg max-w-xl w-full">
    //       <div className="relative">
    //         <img
    //           src={current.thumbnail}
    //           alt={current.title}
    //           className="w-full h-56 sm:h-64 object-cover rounded-t-lg"
    //         />
    //         <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
    //           {current.datePosted}
    //         </div>
    //       </div>

    //       <div className="p-4 space-y-3">
    //         <div className="flex items-center gap-3">
    //           <img
    //             src={current.profilePhoto}
    //             alt={current.name}
    //             className="w-12 h-12 object-cover rounded-full"
    //           />
    //           <div>
    //             <p className="font-semibold text-sm">{current.name}</p>
    //             <p className="text-xs text-gray-500">
    //               {current.subscribers} subscribers
    //             </p>
    //           </div>
    //         </div>

    //         <p className="font-medium text-lg">{current.title}</p>

    //         <div className="flex justify-between text-sm text-gray-600">
    //           <span>{current.views} views</span>
    //           <span>👍 {current.likes}</span>
    //         </div>

    //         <div>
    //           <p className="text-xs text-gray-400 mb-1">Suggested Topics:</p>
    //           <div className="flex flex-wrap gap-2 text-xs">
    //             <span className="bg-gray-200 px-2 py-1 rounded">
    //               {current.suggested1}
    //             </span>
    //             <span className="bg-gray-200 px-2 py-1 rounded">
    //               {current.suggested2}
    //             </span>
    //             <span className="bg-gray-200 px-2 py-1 rounded">
    //               {current.suggested3}
    //             </span>
    //           </div>
    //         </div>

    //         <button
    //           onClick={handleNext}
    //           className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
    //         >
    //           Next YouTuber →
    //         </button>
    //       </div>
    //     </div>
    //   </main>

    //   {/* Suggestions */}
    //   <aside className="lg:w-80 w-full lg:h-auto bg-white shadow-inner p-4 space-y-4 overflow-y-auto">
    //     <h2 className="font-semibold text-lg mb-2">Suggested Videos</h2>
    //     {queue.map(suggestion => (
    //       <button
    //         key={suggestion.name}
    //         onClick={() => handleSuggestionClick(suggestion)}
    //         className="flex gap-3 w-full text-left hover:bg-gray-100 p-2 rounded"
    //       >
    //         <img
    //           src={suggestion.thumbnail}
    //           alt={suggestion.title}
    //           className="w-24 h-16 object-cover rounded"
    //         />
    //         <div className="flex flex-col justify-between text-sm">
    //           <p className="font-medium line-clamp-2">{suggestion.title}</p>
    //           <span className="text-gray-500 text-xs">{suggestion.name}</span>
    //         </div>
    //       </button>
    //     ))}
    //   </aside>
    // </div>
    <div className="w-full h-auto min-h-screen bg-[#17140b] flex flex-col lg:flex-row">
      <div className="w-full h-auto pr-3 pt-10 pl-12 lg:w-[69.5%] lg:h-full bg-orangutan">
        <div className="w-full h-auto bg-blue-600 flex flex-col items-center justify-start">
          <div className="w-full h-auto shadow-2xl max-w-[120rem] max-h-[67.5rem] bg-red-600">
            <img
              className="h-auto w-full rounded-2xl"
              src={current.thumbnail}
              alt={current.name}
              title={current.name}
            />
          </div>
          <div className="flex flex-row items-start justify-start bg-green-400 w-full h-auto pt-5 text-2xl font-custom tracking-tight font-bold antialiased text-slate-100">
            <p>{current.title}</p>
          </div>
          <div className="flex flex-row items-start justify-start bg-pink-500 w-full h-auto pt-3">
            <img
              className="profile-photo rounded-full h-12 mr-4 cursor-pointer"
              src={current.profilePhoto}
              alt={current.name}
              title={current.name}
            />
            <div className="w-auto h-12 bg-black mr-4">
              <p className="text-xl font-custom tracking-tight font-bold antialiased text-slate-100">
                {current.name}
              </p>
              <p className="text-md font-custom tracking-normal font-semibold antialiased text-gray-400">
                {current.subscribers} subscribers
              </p>
            </div>
            <div
              className="w-auto h-12 rounded-3xl bg-[rgba(240,240,240,1)] hover:bg-[rgba(240,240,240,0.8)] flex flex-col items-center justify-center p-4 mr-4 cursor-pointer"
              id="subscribe-button"
              onClick={handleSubscribe}
            >
              <p
                className="text-md font-custom tracking-tight font-semibold antialiased text-gray-900"
                id="subscribe-button-text"
              >
                Subscribed
              </p>
            </div>
            <div className="w-1/2 h-12 ml-auto mr-0 bg-purple-600 flex flex-row justify-end">
              <div className="w-28 h-12 rounded-3xl bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] flex flex-col items-center justify-center p-4 mr-4 cursor-pointer">
                <p className="text-md font-custom tracking-tight font-semibold antialiased text-slate-100">
                  {current.likes} likes
                </p>
              </div>
              <div className="w-28 h-12 rounded-3xl bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] flex flex-col items-center justify-center p-4 mr-4 cursor-pointer">
                <p className="text-md font-custom tracking-tight font-semibold antialiased text-slate-100">
                  Share
                </p>
              </div>
              <div className="w-28 h-12 rounded-3xl bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] flex flex-col items-center justify-center p-4 mr-4 cursor-pointer">
                <p className="text-md font-custom tracking-tight font-semibold antialiased text-slate-100">
                  Download
                </p>
              </div>
              <div className="w-20 h-12 rounded-3xl bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] flex flex-col items-center justify-center p-4 cursor-pointer">
                <p className="text-md font-custom tracking-tight font-semibold antialiased text-slate-100">
                  Clip
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-auto rounded-2xl p-3 flex flex-col items-start justify-start bg-violet-500">
            <div className="w-full h-8 bg-blue-600 flex flex-row items-start justify-start">
              <span className="text-md font-custom tracking-normal font-semibold antialiased text-slate-100">
                {current.views}&nbsp;views&nbsp;&nbsp;{current.datePosted}
              </span>
            </div>
            <div className="w-full h-auto bg-slate-600 flex flex-col items-start justify-start">
              <p
                className="text-md font-custom tracking-normal font-normal antialiased text-slate-100 text-justify"
                style={{ whiteSpace: 'pre-line' }}
              >
                {loremIpsum}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto lg:w-[30.5%] pt-10 px-3 bg-aquatic">
        <div className="suggested-topics bg-red-500 flex flex-row overflow-hidden pt-2">
          <div className="w-10 h-8 bg-slate-100 p-1 text-center rounded-lg cursor-pointer mr-2">
            <p className="text-md font-custom tracking-normal font-normal antialiased text-black">
              All
            </p>
          </div>
          <div className="w-auto h-8 bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] p-1 text-center rounded-lg cursor-pointer mr-2">
            <p className="text-md font-custom tracking-normal font-normal antialiased text-slate-100 px-2">
              {current.suggested1}
            </p>
          </div>
          <div className="w-auto h-8 bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] p-1 text-center rounded-lg cursor-pointer mr-2">
            <p className="text-md font-custom tracking-normal font-normal antialiased text-slate-100 px-2">
              {current.suggested2}
            </p>
          </div>
          <div className="w-auto h-8 bg-[rgba(240,240,240,0.4)] hover:bg-[rgba(240,240,240,0.6)] p-1 text-center rounded-lg cursor-pointer">
            <p className="text-md font-custom tracking-normal font-normal antialiased text-slate-100 px-2">
              {current.suggested3}
            </p>
          </div>
        </div>
        <div className="suggested-videos bg-yellow-600 mt-5 w-full h-auto">
          {queue.map(suggestion => (
            <button
              key={suggestion.name}
              onClick={() => handleSuggestionClick(suggestion)}
              className="flex gap-3 w-full text-left hover:bg-gray-100 p-2 rounded"
            >
              <img
                src={suggestion.thumbnail}
                alt={suggestion.title}
                className="w-24 h-16 object-cover rounded"
              />
              <div className="flex flex-col justify-between text-sm">
                <p className="font-medium line-clamp-2">{suggestion.title}</p>
                <span className="text-gray-500 text-xs">{suggestion.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubers;
