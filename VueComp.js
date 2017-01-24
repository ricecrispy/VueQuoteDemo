(function (){
  "use strict";

  Vue.component('topic-item', {
  template: '<li>{{ topic }}</li>',
  props: ['topic']
  })

  var quoteList = new Vue({
    el: "#quotes-list",
    data: {
      topics: []
    },
    methods: {
      getQuote: function () {
        var self = this;
        var apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
        this.$http.get(apiUrl).then((response) => {
          var data = response.data;
          for (var key in data)
          {
            var val = data[key];
            console.log(val.title);
            self.topics.push(val.title);
          }
        }, (response) => {
          //failure
          console.log("failed!");
        });
        console.log(self.topics.length);
      },
      ClearQuotes: function () {
        this.topics = [];
        console.log(this.topics.length);
      }
    },
    computed: {
      counter: function() {
        return this.topics.length;
      }
    },
    created: function () {
      // this.getQuote();
    }
  })




})();
