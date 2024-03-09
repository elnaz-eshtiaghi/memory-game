let game = document.querySelectorAll('.game_container>.row>div')
        let _result = document.getElementsByClassName('result')[0]
        let back = document.querySelectorAll('.back')
        let front = document.querySelectorAll('.front')
        let _img = document.querySelectorAll('.back img')
        let _h2 = document.querySelectorAll('h2')
        let m = 0
        let _time = 0
        let start = ''
        // .....timer.....



        function _timer() {
            let _time = 100
            _start = setInterval(() => {
                _time--
                _h2[0].innerHTML = 'Time :  ' + _time
                if (_time <= 0) {
                    _result.classList.remove('d-none')
                    _result.children[0].innerHTML = "GAME OVER"
                    _result.children[1].innerHTML = "Click to Restart"

                    clearInterval(_start)

                }
            }, 1000)
        }

        // .....click.....

        _result.addEventListener('click', () => {
            _result.classList.add('d-none')
            _timer()
            _random()
            game.forEach((val, i) => {
                val.style.transform = ' perspective(8000px) rotateY(0);'
                back[i].style.zIndex = '-1'
                _img[i].style.animation = 'anima'
            })
        })

        function _random() {
            // .....array....

            const _arr = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png']

            // ......random number.....

            let n = _arr.length
            function generateRandomNumbers(n) {
                const numbers = [];
                while (numbers.length < n) {
                    const randomNumber = Math.floor(Math.random() * n);
                    if (!numbers.includes(randomNumber)) {
                        numbers.push(randomNumber);
                    }
                }
                return numbers;
            }

            // ......random images.....

            const Images = [];
            const randomNumbers = generateRandomNumbers(n);
            for (const randomNumber of randomNumbers) {
                Images.push(_arr[randomNumber]);
            }

            b = 0
            _img.forEach((val, b) => {
                val.setAttribute("src", "assets/img/" + Images[b] + " ")
                val.setAttribute("data_status", "off")
                b++

            })

        }

        // .....match card.....

        let flag = 0
        let firstcard = ''
        let lastcard = ''
        let firstback = ''
        let lastback = ''
        game.forEach((val, i) => {
            val.addEventListener('click', (e) => {

                flag++
                _h2[1].innerHTML = 'flips :  ' + flag


                if (flag % 2) {
                    firstcard = val.children[0].children[0].children[0].children[1]
                    firstback = val.children[0].children[0]
                    val.style.transform = ' perspective(8000px) translate(-50%, -60%) rotateY(-180deg);'
                    back[i].style.zIndex = '1'



                }

                else {
                    lastcard = val.children[0].children[0].children[0].children[1]
                    lastback = val.children[0].children[0]
                    val.style.transform = ' perspective(8000px) translate(-50%, -60%) rotateY(-180deg);'
                    back[i].style.zIndex = '1'

                    if ((firstcard.src == lastcard.src)) {
                        m++
                        firstcard.style.animation = ' anim 1s infinite'
                        lastcard.style.animation = ' anim 1s infinite'

                    } else {
                        setTimeout(() => {
                            firstcard.style.transform = ' perspective(8000px) translate(-50%, -60%) rotateY(0)'
                            lastcard.style.transform = ' perspective(8000px) translate(-50%, -60%) rotateY(0)'

                            firstback.style.zIndex = '-1'
                            lastback.style.zIndex = '-1'
                        }, 400)

                    }
                    if (m == 8) {
                        _result.classList.remove('d-none')
                        _result.children[0].innerHTML = "Victory"
                        _result.children[1].innerHTML = "Click to Restart"
                        m = 0
                        clearInterval(_start)
                        _time = 100
                        

                    }


                }



            })
        })



