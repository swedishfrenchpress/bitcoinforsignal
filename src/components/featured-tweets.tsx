"use client";

import React from "react";
import { Tweet } from "react-tweet";

// Featured supporter tweets - Full list
// TO ADD MORE TWEETS: Add the tweet ID (the numbers from the tweet URL)
// Example: https://twitter.com/user/status/1234567890 -> use "1234567890"
const ALL_FEATURED_TWEET_IDS = [
  "1978853994635117043",
  "1978887797285990676",
  "1978862368797893063",
];

// Randomly select N tweets from the full list
function getRandomTweets(tweetIds: string[], count: number): string[] {
  const shuffled = [...tweetIds].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, tweetIds.length));
}

export function FeaturedTweets() {
  // Randomly select 3 tweets once on mount using lazy initialization
  // This only runs once and avoids an extra render compared to useEffect + setState
  const selectedTweets = React.useMemo(
    () => getRandomTweets(ALL_FEATURED_TWEET_IDS, 3),
    []
  );

  return (
    <div className="py-12 flex flex-col">
      {/* Header */}
      <div className="w-full text-center space-y-4 mb-2">
        <h2 className="!text-signal-blue">What People Are Saying</h2>
        <p className="max-w-3xl mx-auto !text-signal-text">
          The community is excited about bringing Bitcoin to Signal. Here&apos;s
          what supporters are saying:
        </p>
      </div>

      {/* Tweets Row */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {selectedTweets.map((tweetId) => (
            <div
              key={tweetId}
              className="flex justify-center [&>div]:w-full [&>div]:max-w-none light"
            >
              <Tweet id={tweetId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
