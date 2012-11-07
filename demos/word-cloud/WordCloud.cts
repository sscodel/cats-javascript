.wordcloud {
  template: http://localhost:8000/demos/word-cloud/WordCloud.html#cloud;
  template-proxy: http://localhost:9999/fragment;
  data: .;
  with: WordCloud;
}

.wordcloud .words {
   value: words;
}

