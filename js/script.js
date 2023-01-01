const cathetus = prompt ('Введіть через один пробіл довжини двух катетів');

    if ((cathetus === null || cathetus === (''))){
         alert ('Ви нічого не ввели')
    }
    else if (cathetus === ('0')){
        alert ('Невірний формат! Ви ввели тільки 0!')
    }
    else if (!cathetus.includes(' ')){
     alert ('Невірний формат! Не вистачае пробіла!')
    }

        else {
            const сathetusComponents = cathetus.split(' ');
            const сathetusFirst = Number(сathetusComponents[0]);
            const сathetusSecond = Number(сathetusComponents[1]);
            const hypotenuseSqrt = (сathetusFirst**2) + (сathetusSecond**2);
            const hypotenuseFirst = Math.round(Math.sqrt(hypotenuseSqrt));
            const hypotenuseSecond = (hypotenuseSqrt ** (0.5)).toFixed(0);
            switch (true) {
                
                case (сathetusComponents.length !== 2):
                    alert ('Невірний формат! Введіть через один пробіл довжини двух катетів')
                    break;
                case (сathetusComponents[0].length === 0):
                    alert ('Невірний формат! Ви не ввели перший катет')
                    break;
                case (сathetusComponents[1].length === 0):
                    alert ('Невірний формат! Ви не ввели другий катет')
                    break;
                case (Number.isNaN(сathetusFirst)):
                    alert ('Невірний формат! Ви ввели перший катет не як число')
                    break;
                case (Number.isNaN(сathetusSecond)):
                    alert ('Невірний формат! Ви ввели другий катет не як число')
                    break;
                case (сathetusFirst <= 0 ) :
                    alert ('Невірний формат першого катету! Катет повинен бути числом більше нуля')
                    break;
                case (сathetusSecond <= 0 ) :
                    alert ('Невірний формат другого катету! Катет повинен бути числом більше нуля')
                    break;
            }
            if (сathetusComponents.length === 2 && Number(сathetusComponents[0]) && Number(сathetusComponents[1])){
                alert (`Результат обчислення гіпотенузи: \nПершим способом: ${hypotenuseFirst} \nДругим способом: ${hypotenuseSecond}`)
            }
        }
