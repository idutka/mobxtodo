import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import {colors} from '../helpers/colors';
import {useStores} from '../hooks/useStores';
import {Button} from '../components';

const Login = observer(() => {
  const {authStore} = useStores();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Button
          style={styles.button}
          titleStyle={styles.buttonTitle}
          title="Login"
          onPress={() => authStore.signIn('user')}
        />
      </View>
      {authStore.isLoading && (
        <ActivityIndicator style={styles.spinner} size="large" />
      )}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.indigo,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',
    marginBottom: 100,
  },
  button: {
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 40,
  },
  buttonTitle: {
    color: colors.white,
  },
  spinner: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Login;
