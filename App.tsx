import MainStack from './src/navigation/Stack'
import { UserProvider } from './src/contexts/UserContext';
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <UserProvider>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />
      <MainStack />
    </UserProvider>
  );
}
