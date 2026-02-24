class Person {
  String? name;

  int? age;

  String? _city;

  Person(this.name, this.age);

  set setCity(String city) {_city = city;}

   get getCity {
    return _city;
  }

  display() {

    print('${name} ${age}');
  }

}
