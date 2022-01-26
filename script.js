console.log('VUE OK', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
      textColor: 'text-blue',
      message: 'Hello world!',
      media: 'word-hello.jpg',

    },
    methods: {
      toggleColor() {
        this.textColor = this.textColor === 'text-blue' ? 'text-purple' : 'text-blue';
      },
    },
});
