// videoCalculations.ts

export const computeVideosWithRatio = (videos: Video[]) => {
  return videos.map((video: Video) => ({
    ...video,
    likeToViewRatio:
      parseFloat(video.statistics.likeCount) /
      parseFloat(video.statistics.viewCount),
  }));
};

export const computeSortedVideos = (videos: Video[]) => {
  return [...videos].sort(
    (a: any, b: any) => b.likeToViewRatio - a.likeToViewRatio
  );
};

export const computeAverageRatio = (videos: Video[]) => {
  const totalRatio = videos.reduce(
    (sum, video) => sum + video.likeToViewRatio,
    0
  );
  return totalRatio / videos.length;
};
