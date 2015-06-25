import DS from "ember-data";

var Post = DS.Model.extend({
	title: DS.attr('string')
});

Post.reopenClass({
FIXTURES:[
   {
      "id" : 1,
      "title" : "Title 1"
   },
   {
      "id" : 2,
      "title" : "Title x"
   },
   {
      "id" : 3,
      "title" : "Title y"
   },
   {
      "id" : 4,
      "title" : "Title z"
   },
   {
      "id" : 5,
      "title" : "Title 1"
   },
   {
      "id" : 6,
      "title" : "Title 2"
   },
   {
      "id" : 7,
      "title" : "Title 3"
   },
   {
      "id" : 8,
      "title" : "Title 4"
   },
   {
      "id" : 9,
      "title" : "Title 5"
   },
   {
      "id" : 10,
      "title" : "Title 5"
   },
   {
      "id" : 11,
      "title" : "Title 6"
   },
   {
      "id" : 12,
      "title" : "Title 7"
   },
   {
      "id" : 13,
      "title" : "Title 8"
   },
   {
      "id" : 14,
      "title" : "Title 9"
   },
   {
      "id" : 15,
      "title" : "Title 10"
   },
   {
      "id" : 16,
      "title" : "Title 11"
   },
   {
      "id" : 17,
      "title" : "Title 12"
   },
   {
      "id" : 18,
      "title" : "Title 13"
   },
   {
      "id" : 19,
      "title" : "Title 14"
   },
   {
      "id" : 20,
      "title" : "Title 15"
   },
   {
      "id" : 21,
      "title" : "Title 16"
   }
]
});

export default Post;