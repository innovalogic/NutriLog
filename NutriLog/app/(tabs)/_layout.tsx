import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#244070',
          height: 60,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          // indico los iconos
          switch (route.name) {
            case 'home':
              iconName = 'home';
              break;
            case 'perfil':
              iconName = 'person';
              break;
            case 'habito':
              iconName = 'heart-sharp';
              break;
            case 'seguimiento':
              iconName = 'bar-chart';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />
        }
      }
      )
      }>
      
      {/* indica que pantalla mostrar */}
      <Tabs.Screen name="home" options={{ title: 'Menu' }} />
      <Tabs.Screen name="seguimiento" options={{ title: 'Seguimiento' }} />
      <Tabs.Screen name="habito" options={{ title: 'Habitos' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
