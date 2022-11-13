{
  type Video = {
    title: string;
    author: string;
  }

  type Optional<T> = {
    // ? 추가
    [P in keyof T]?: T[P]
  }

  type ReadOnly<T> = {
    // readonly 추가
    readonly [P in keyof T]: T[P]
  }

  type Nullable<T> = {
    // | null 추가
    [P in keyof T]: T[P] | null
  }

  const videoOpt: Optional<Video> = {
    // Video 타입의 프로퍼티를 모두 옵셔널로 변경
  };

  const videoReadOnly: ReadOnly<Video> = {
    // Video 타입의 프로퍼티를 모두 Readonly 로 변경
    title: 'title',
    author: 'author',
  };

  const videoNullable: Nullable<Video> = {
    // nullable!
    title: null,
    author: null,
  };

// videoReadOnly.title = '키키'; // readonly 라서 접근 불가능!

  type Animal = {
    name: string;
    age: number,
  }

  const animal: Optional<Animal> = {};

}