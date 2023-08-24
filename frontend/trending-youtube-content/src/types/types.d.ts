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

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface Channel {
  kind: string;
  etag: string;
  id: {
    kind: string;
    channelId: string;
  };
  snippet: Snippet;
}
