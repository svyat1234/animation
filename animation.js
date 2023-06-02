(function() {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            document.querySelector('.promo__heading__info').style.visibility = 'visible'
        }, 1100);
        setTimeout(function() {
            document.querySelector('.promo__heading__buttons').style.visibility = 'visible'
        }, 2100);
        setTimeout(function() {
            document.querySelector('.promo__statistics').style.visibility = 'visible'
            let numbers = document.querySelectorAll('.promo__statistics__title')
            let arrOfNumbers = []
    
            for (line of numbers) {
                let numWithLetter = line.textContent
                let num = parseInt(numWithLetter.slice(0, -1))
                arrOfNumbers.push(num)
                line.textContent = '0 K'
            }
    
            function numbersAnimation(index, time) {
                let i = 0
                if (i < arrOfNumbers[index]) {
                    let int = setInterval(function(){
                        i++
                        numbers[index].textContent = i + 'K'
                        if (i >= arrOfNumbers[index]) {
                            clearInterval(int)
                        }
                    }, time)
                } 
            }
            numbersAnimation(0, 100)
            numbersAnimation(1, 50)
            numbersAnimation(2, 60)
        }, 3100);


        
    })
})()