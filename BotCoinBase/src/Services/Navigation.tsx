import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../screen/RootStackParams';

class Navigation {
  private static _instance: Navigation;

  private navigation: any;

  private constructor() {
    if (Navigation._instance) {
      throw new Error("Error: Instantiation failed: Use \'Class\'.Instance() instead of new.");
    }

  }

  public static get Instance() {
    return (this._instance || (this._instance = new this()));
  }

  public me(path: string) {
    switch (path) {
      case 'Login':
        this.navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
        break;
      case 'Home':
        this.navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
        break;
      default:
        this.navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
    }
  }

  public navigate(path: string, params?: undefined) {
    switch (path) {
      case 'Login':
        this.navigation.navigate('Login');
        break;
      case 'Home':
        this.navigation.navigate('Home', params);
        break;
      default:
        this.navigation.navigate('Login');
    }
  }
}

export default Navigation;