{
  /*
  기존 타입에서 원하는 것만 뺀다. ( 타입에 없는 키도 기입가능)
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  Exclude ?? T 타입에서 U 타입들을 지운다.
  type Exclude<T, U> = T extends U ? never : T;
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

  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'title',
    }
  }
}