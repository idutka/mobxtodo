import {observable, flow, makeObservable} from 'mobx';
import {Alert} from 'react-native';
import {signIn} from '../helpers/api';

export interface IUser {
  id: string;
  name: string;
}

export class AuthStore {
  user: IUser | null = null;
  isAuthorized: boolean = false;
  isLoading: boolean = false;

  constructor() {
    makeObservable(this, {
      user: observable,
      isAuthorized: observable,
      isLoading: observable,
      signIn: flow,
      signOut: flow,
    });
  }

  *signIn(username: string) {
    this.isLoading = true;
    try {
      this.user = yield signIn(username);
      this.isAuthorized = true;
    } catch (error: any) {
      Alert.alert('Something went wrong!', error.message);
    } finally {
      this.isLoading = false;
    }
  }

  *signOut() {
    this.isLoading = true;
    try {
      this.user = null;
      this.isAuthorized = false;
    } catch (error: any) {
      Alert.alert('Something went wrong!', error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
