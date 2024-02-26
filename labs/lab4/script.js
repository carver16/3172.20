        function changeColor() {
            let selectedDay = document.getElementById("days").value;

            let container = document.getElementById("divv");

            switch (selectedDay) {
                case "Monday":
                    container.style.backgroundColor = "blue";
                    break;
                case "Tuesday":
                    container.style.backgroundColor = "green";
                    break;
                case "Wednesday":
                    container.style.backgroundColor = "coral";
                    break;
                case "Thursday":
                    container.style.backgroundColor = "pink";
                    break;
                case "Friday":
                    container.style.backgroundColor = "yellow";
                    break;
                case "Saturday":
                    container.style.backgroundColor = "red";
                    break;
                case "Sunday":
                    container.style.backgroundColor = "purple";
                    break;
                default:
                    container.style.backgroundColor = "white"; 
            }
        }

        function calcNumber() {
            let inputNumber = parseInt(document.getElementById("numberInput").value);

            let isEven = inputNumber % 2 === 0;
            let isPrime = true;

            for (let i = 2; i < inputNumber; i++) {
                if (inputNumber % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            let message = "";
            if (inputNumber <= 50) {
                message = "Less than or equal to 50";
            } else if (inputNumber <= 75) {
                message = "Greater than 50 and Less than or equal to 75";
            } else if (inputNumber <= 100) {
                message = "Greater than 75 and less than or equal to 100";
            } else {
                message = "Greater than 100";
            }

            let resultMessage = "The number is ";
            resultMessage += isEven ? "even " : "odd ";
            resultMessage += isPrime ? "prime " : "composite ";
            resultMessage += message;

            alert(resultMessage);
        }
  