import 'package:crafti_buy/models/user.dart';

class AuthService {
  // sign up user
  void signUpUser({
    required String email,
    required String password,
    required String name,
  }) async {
    try {
      // ignore: unused_local_variable
      User user = User(
        id: '',
        name: name,
        password: password,
        address: '',
        type: '',
        token: '',
        email: '',
        cart: [],
      );
    } catch (e) {}
  }
}
