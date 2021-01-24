var app = new Vue({
    el: '#app',
    data: {
        number1: 0,
        number2: 0,
        sign: '+',
        date: '',
        calcData:[]
      },
      computed: {
        result: {
            // getter
            get: function () {
              return  eval(parseInt(this.number1) + this.sign + parseInt(this.number2));
            },
            // setter
            set: function (newResult) {
              this.result = newResult;
            }
          }
      },
      methods: {
        onChange(event) {
            if (event.target.value == 0) {
                this.sign = '+';
            } else if (event.target.value == 1) {
                this.sign = '-';
            } else if (event.target.value == 2) {
                this.sign = '*';
            } else if (event.target.value == 3) {
                this.sign = '/';
            }    
        },
        addToFavorited() {
            let d = new Date();
            if(this.sign=='/')
            this.date = d.getDate() + '/' + d.getMonth() + 1 + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes()
            else
            
            this.date = d.getDate() + '/' + d.getMonth() + 1 + '/' + d.getFullYear() + ' ' + d.getHours() + 'h' + d.getMinutes()

            let = calc_object = {
                id: this.count ++,
                number1:this.number1,
                number2:this.number2,
                sign: this.sign,
                date:this.date,
                result: this.result
            };
            
            this.calcData.unshift(calc_object);
        },
        removeItem(itemToRemove) {
            let indexOfItemToRemove = this.calcData.indexOf(itemToRemove);
            this.calcData.splice(indexOfItemToRemove, 1);
        },
        reset() {
            this.number1 = 0;
            this.number2 = 0;
            document.getElementById("btn-fav").disabled = true;
        },
        clearTable() {
            this.calcData.splice(this.calcData)
        },
        typing() {
            document.getElementById("btn-fav").disabled = false;
        }
      }
})