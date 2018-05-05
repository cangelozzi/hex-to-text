$(document).foundation()

new Vue({
  el: "#app",
  
  data: {
    
    hexValues: [
      '436f6e',
      '677261',
      '74756c',
      '617469',
      '6f6e73',
      '212057',
      '652074',
      '68696e',
      '6b2079',
      '6f7527',
      '726520',
      '757020',
      '666f72',
      '207468',
      '652063',
      '68616c',
      '6c656e',
      '676520',
      '6f6620',
      '776f72',
      '6b696e',
      '672077',
      '697468',
      '207468',
      '652066',
      '617374',
      '657374',
      '206772',
      '6f7769',
      '6e6720',
      '652d63',
      '6f6d6d',
      '657263',
      '652061',
      '67656e',
      '637920',
      '696e20',
      '43616e',
      '616461',
      '2e2045',
      '6d6169',
      '6c2079',
      '6f7572',
      '20736f',
      '6c7574',
      '696f6e',
      '20746f',
      '202A2A',
      '2A2A2A',
      '2A2A2A',
      '2A402A',
      '2A2A2A',
      '2A2A2A',
      '2A2A2A',
      '2A2A20',
      '207765',
      '20776f',
      '756c64',
      '206c6f',
      '766520',
      '746f20',
      '736974',
      '20646f',
      '776e20',
      '616e64',
      '206861',
      '766520',
      '612063',
      '686174',
      '2e2020',
    ],
    
    binArray: [],
    
    solutionArray: [],
    
    theSolution: ''
  },

  methods: {

    secretText() {
      
      // scope fix
      var vm = this;

      // HEX to BINARY
      this.hexValues.forEach(function (hex) {
        let bin = hex.split('').reduce(function (acc, i) {
          return acc + ('000' + parseInt(i, 16).toString(2)).substr(-4, 4);
        }, '')
        vm.binArray.push(bin);
      })

      // BINARY to ASCII
      this.binArray.forEach(function (bin) {
        // pretty binary
        bin = bin.match(/.{1,8}/g).join(" ");
        // split string into an array so we can loop through it
        var newStr = bin.split(" ");
        // declare a new array to later push "translated" values into
        var translatedArr = [];
        // loop through binary array, translate and push translated values into translated array
        newStr.forEach(function (item) {
          translatedArr.push(String.fromCharCode(parseInt(item, 2)));
        })

        // join the array back into a string and push to Solution array
        var brokenText = translatedArr.join("");
        vm.solutionArray.push(brokenText);
      })
      
      // solution array back to string
      vm.theSolution = vm.solutionArray.join("");

    },

  },

  watch: {
    // Vue watcher for hex values changes
    hexValues: function () {
      this.binArray = [];
      this.solutionArray = [];
      this.theSolution = ''
    }
  }


})
