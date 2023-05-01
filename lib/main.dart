import 'package:crafti_buy/constants/global_variables.dart';
import 'package:crafti_buy/features/screens/auth_screen.dart';
import 'package:crafti_buy/router.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CRAFTIBUY',
      theme: ThemeData(
        scaffoldBackgroundColor: GlobalVariables.backgroundColor,
        colorScheme: const ColorScheme.light(
          primary: GlobalVariables.secondaryColor,
        ),
        appBarTheme: const AppBarTheme(
          elevation: 0,
          iconTheme: IconThemeData(
            color: Color.fromARGB(255, 0, 0, 0),
          ),
        ),
      ),
      onGenerateRoute: (settings) => generateRoute(settings),
      home: Authscreen(),
    );
  }
}
// aa
