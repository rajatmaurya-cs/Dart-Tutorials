// dart does not supposr compile time polymorphism
abstract class shape {
  void draw();
}

class circle extends shape {

  @override
  void draw() {
    print("Drawing Circle");
  }
}

class rectangle extends shape {
  @override
  void draw() {
    print("Drawing Reactangel");
  }
}

void main() {
  shape s1 = circle();
  shape s2 = rectangle();
  s1.draw();
  s2.draw();
}
