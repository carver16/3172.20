    let submit = document.getElementById('submit');

    submit.addEventListener('click', function (e) {
        e.preventDefault();
        processNumbers();
    });
        
    // got from website look at README
        function isPrime(number) {
            if (number <= 1) return false;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        }

        // got from website look at README
        function isComp(number) {
            if (number <= 1) return false;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return true;
                }
            }
            return false;
        }

        function forEachCalc(numbers) {
            let primes = 0;
            let composites = 0;
            let neither = 0;

            numbers.forEach(number => {
                if (isPrime(number)) {
                    primes++;
                } else if (isComp(number)) {
                    composites++;
                } else {
                    neither++;
                }
            });
            return { primes, composites, neither };
        }

        function forCalc(numbers) {
            let primes = 0;
            let composites = 0;
            let neither = 0;

            for (let i = 0; i < numbers.length; i++) {
                if (isPrime(numbers[i])) {
                    primes++;
                } else if (isComp(numbers[i])) {
                    composites++;
                } else {
                    neither++;
                }
            }
            return { primes, composites, neither };
        }

        function mapCalc(numbers) {
            let primes = 0;
            let composites = 0;
            let neither = 0;

            numbers.map(number => {
                if (isPrime(number)) {
                    primes++;
                } else if (isComp(number)) {
                    composites++;
                } else {
                    neither++;
                }
            });
            return { primes, composites, neither };
        }        

        function processNumbers() {
            let num = document.getElementById('num').value;
            //got from website look at README///////////////////////////////////
            const numsArr = num.split(',').map(num => parseInt(num.trim(), 10));
            ///////////////////////////////////////////////////////////////////
            const result = forEachCalc(numsArr);
            const result1 = forCalc(numsArr);
            const result2 = mapCalc(numsArr);

            // display results
            document.getElementById('one').innerHTML = ("<p>forEach</p><p> Prime Numbers:" + result.primes + "</p>" + " <p> Composites Numbers:" + result.composites + "</p>" + "<p> Neithers Numbers:" + result.neither + "</p>");
            document.getElementById('two').innerHTML = ("<p>for</p><p> Prime Numbers:" + result1.primes + "</p>" + " <p> Composites Numbers:" + result1.composites + "</p>" + "<p> Neithers Numbers:" + result1.neither + "</p>");
            document.getElementById('three').innerHTML = ("<p>map</p><p> Prime Numbers:" + result2.primes + "</p>" + " <p> Composites Numbers:" + result2.composites + "</p>" + "<p> Neithers Numbers:" + result2.neither + "</p>");

        }

