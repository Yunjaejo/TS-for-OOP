{
  /*
  기존 타입에서 원하는 것만 가져온다..
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
   */

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'http://~~~',
      data: 'byte-data...',
    };
  }

  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'title',
    }
  }
}