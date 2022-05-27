// export class Initialize {
//   static readonly type = '[Cards] Initialize';

//   constructor(public payload: number) {}
// }

export class CallApi {
  static readonly type = '[cards] CallApi';

  constructor(public payload: any) {}
}

// fetch('http://example.com/songs')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
