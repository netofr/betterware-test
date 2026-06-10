/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { formatGreeting } from 'shared';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

// Create a styled View using standard CSS syntax
const Container = styled.View`
  height: 80px;
  background-color: #363636;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

// Create a styled Text component
const TitleText = styled.Text`
  font-size: 24px;
  color: #d9dddc;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
`;

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  const handleLogin = () => {
    console.log('Navigate to Login Screen');
  };

  const handleSignUp = () => {
    console.log('Navigate to Sign Up Screen');
  };

  return (
    <View style={styles.container}>
      {/* Top Logo / Brand Section */}
      <View style={styles.brandContainer}>
        <Text style={styles.logoText}>Mobile App</Text>
        <Text style={styles.tagline}>Discover something amazing today.</Text>
        <Text style={styles.greeting}>{formatGreeting('Betterware')}</Text>

        <Container>
          <TitleText>Styled Components!</TitleText>
        </Container>
      </View>

      {/* Bottom Button Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Log In to App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#5c5c5c',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 8,
    color: '#FFFFFF',
  },
  brandContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#E0E0E0',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 40,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 55,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
