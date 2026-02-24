import 'dart:io';
// void main(){
//   print("Enter first number: ");
//   double num1 = double.parse(stdin.readLineSync()!);
//   print("Enter first number: ");
//   double num2 = double.parse(stdin.readLineSync()!);
//   double sum = num1 + num2;
//   print("the sum is: $sum");

// }

// void main() {
//   print("Enter Age number: ");
//   double age = double.parse(stdin.readLineSync()!);
//   if (age > 18)
//     print("He can Vote");
//   else
//     print("He cannot Vote");
// }

// void main() {
//   List<String> names = ["Ramesh", "Mukehsh", "Dhruv"];
//   int count = 0;
//   for (int i = 0; i < names.length; i++) {
//     count++;
//   }
//   ;
//   print(count);
// }

void main() {
  print("Enter Unit Range1: ");

  double num1 = double.parse(stdin.readLineSync()!);

  if (num1 > 0 && num1 < 100)
    print("Electricity Bill Is :  ${1.5*num1}");

  else if (num1 > 101 && num1 < 200)
    print("Electricity Bill Is :  ${2.5*num1}");
  else if (num1 > 201 && num1 < 300)
    print("Electricity Bill Is :  ${4.0*num1}");
  else
    print("Electricity Bill Is :  ${5*num1}");
}
