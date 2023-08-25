interface Thumbnails {
  default: {
    url: string;
  };
  medium: {
    url: string;
  };
  high: {
    url: string;
  };
}

interface Localized {
  title: string;
  description: string;
}

interface SnippetBase {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  tags: string[];
  categoryId: string;
  localized: Localized;
}

interface ChannelSnippet extends SnippetBase {
  publishTime: string;
  defaultLanguage: string;
  defaultAudioLanguage: string;
  customUrl: string;
}

interface VideoSnippet extends SnippetBase {}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface Channel {
  kind: string;
  etag: string;
  id: {
    kind: string;
    channelId: string;
  };
  snippet: ChannelSnippet;
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      favorites: string;
      uploads: string;
    };
    googlePlusUserId: string;
  };
  statistics: {
    viewCount: string;
    commentCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
  brandingSettings: {
    channel: {
      title: string;
      description: string;
      keywords: string;
      defaultTab: string;
      trackingAnalyticsAccountId: string;
      moderateComments: boolean;
      showRelatedChannels: boolean;
      showBrowseView: boolean;
      featuredChannelsTitle: string;
      featuredChannelsUrls: string[];
      unsubscribedTrailer: string;
      profileColor: string;
      defaultLanguage: string;
      country: string;
    };
    image: {
      bannerImageUrl: string;
      bannerMobileImageUrl: string;
      watchIconImageUrl: string;
      trackingImageUrl: string;
      bannerTabletLowImageUrl: string;
      bannerTabletImageUrl: string;
      bannerTabletHdImageUrl: string;
      bannerTabletExtraHdImageUrl: string;
      bannerMobileLowImageUrl: string;
      bannerMobileMediumHdImageUrl: string;
      bannerMobileHdImageUrl: string;
      bannerMobileExtraHdImageUrl: string;
      bannerTvImageUrl: string;
      bannerTvLowImageUrl: string;
      bannerTvMediumImageUrl: string;
      bannerTvHighImageUrl: string;
      bannerTvExtraHdImageUrl: string;
    };
  };
  contentOwnerDetails: {
    contentOwner: string;
    timeLinked: string;
  };
  localizations: {
    [key: string]: Localized;
  };
}

interface Video {
  kind: string;
  etag: string;
  id: string;
  likeToViewRatio: number;
  percentageDifference: number;
  snippet: VideoSnippet;
  statistics: Statistics;
}
