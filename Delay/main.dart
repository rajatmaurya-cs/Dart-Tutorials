void main() {
  fetchData();
}

// void fetchData() {
//   print("Data is loading");

//   Future.delayed(
//     Duration(seconds: 5),
//   ).then((it) => {print("Sever Gives Data after a Moment")});

//   print("Data is Loaded Successfully");
// }


void fetchData() async {
  print("Data is Laoding");
  String data = await getData();
  print(data);
  print("Doing some other Operations");
}

Future<String> getData() async {
  await Future.delayed(Duration(seconds: 5));
  return "Data is Loaded";
}
