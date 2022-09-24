type Reply = {
  _id: String,
  userId: String,
  text: String;
  likes: Number;
  dateTime: Date;
}
type Comment = Reply & {
  replies: Reply[] | []
}

// var comment:Comment = {
// _id: '1',
// userId: 'a',
// text: 'abcdef',
// likes: 0,
// dateTime: '',
// replies: [{
//   _id: '1',
//   userId: 'b',
//   text:'abcd',
//   likes: 0,
//   dateTime: ''
// }]
// }

type Media = {hasMedia: false} | {hasMedia: true, mediaContent: {
  mediaType: "audio" | "video" | "image",
  src: String
}}
export type FeedState = {
  demos: 
    {
      _id : String,
      userId: String,
      content: {
        text: String,
        media: Media
      },
      otherData: {
        dateTime: '',
        likes: Number,
        comments: String[] | [] //commentId
      }
    }[] | []
}

const initialState: FeedState = {
  demos: []
}
