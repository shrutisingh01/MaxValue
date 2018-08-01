

var numbers = [10 , 20 , 80 ,40];
displayMaximum(numbers);
function displayMaximum(numbers){
    var max=0;
    for( var i = 0; i< numbers.length; i++){
   

           if (numbers[i]> max)
            max = numbers[i];
 }
alert(max);
}