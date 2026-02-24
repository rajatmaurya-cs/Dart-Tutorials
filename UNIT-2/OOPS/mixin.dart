mixin ElectricVariant {
  void eletricVariant() {
    print("This is electric variant");
  }
}

mixin PetrolVariant {
  void pertrolVariant() {
    print("This is Petrol varian");
  }
}

class Tesla with ElectricVariant {}

class HybridCar with ElectricVariant, PetrolVariant {}

void main() {
  Tesla t = Tesla();
  t.eletricVariant();
  print("-----");
  HybridCar hc = HybridCar();
  hc.eletricVariant();
  hc.pertrolVariant();
}
