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
    <div className="w-full h-[150rem] min-h-screen bg-[#17140b] flex flex-col lg:flex-row">
      <div className="w-full h-[500px] pr-3 pt-10 pl-12 lg:w-[69.5%] lg:h-full bg-orangutan">
        <div className="w-full h-full bg-blue-600 flex flex-col items-center justify-start">
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
              className="rounded-full h-12 mr-4"
              src={current.profilePhoto}
              alt={current.name}
              title={current.name}
            />
            <div className="w-auto h-12 bg-black mr-4">
              <p className="text-xl font-custom tracking-tight font-bold antialiased text-slate-100">
                {current.name}
              </p>
              <p className="text-md font-custom tracking-tight font-semibold antialiased text-gray-400">
                {current.subscribers} subscribers
              </p>
            </div>
            <div className="w-auto h-12 rounded-3xl bg-[rgba(240,240,240,1)] hover:bg-[rgba(240,240,240,0.8)] flex flex-col items-center justify-center p-4 mr-4">
              <p className="text-md font-custom tracking-tight font-semibold antialiased text-gray-900">
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
        </div>
      </div>
      <div className="w-full h-full lg:w-[30.5%] bg-aquatic"></div>
    </div>
  );
};

export default YouTubers;
