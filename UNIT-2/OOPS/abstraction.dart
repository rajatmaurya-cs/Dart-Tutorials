abstract class animal {
  void sound();

  void sleep() {
  print("Animal is Sleeping");
}

}



class Dog extends animal {
  @override
  void sound() {
    print("Dog barks");
  }
}

void main() {
  Dog d = Dog();
  d.sound();
  d.sleep();
}
