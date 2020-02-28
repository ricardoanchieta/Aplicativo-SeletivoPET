import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Entradas from "./src/screens/Entradas";
import Sobremesas from "./src/screens/Sobremesas";
import SaladaCeasar from "./src/screens/SaladaCeasar";
import PratosPrincipais from "./src/screens/PratosPrincipais";
import SaladaGrega from "./src/screens/SaladaGrega";
import TomateRecheado from "./src/screens/TomateRecheado";
import Mocoto from "./src/screens/Mocoto";
import Feijoada from "./src/screens/Feijoada";
import Lasanha from "./src/screens/Lasanha";
import Pudim from "./src/screens/Pudim";
import PetitGateau from "./src/screens/PetitGateau";
import BoloDeCenoura from "./src/screens/BoloDeCenouro";
import Primeiramente from "./src/screens/primeiramente";
import Criador from "./src/screens/Criador";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Entradas: Entradas,
    Sobremesas: Sobremesas,
    SaladaCeasar: SaladaCeasar,
    PratosPrincipais: PratosPrincipais,
    SaladaGrega: SaladaGrega,
    TomateRecheado: TomateRecheado,
    Mocoto: Mocoto,
    Feijoada: Feijoada,
    Lasanha: Lasanha,
    Pudim: Pudim,
    PetitGateau: PetitGateau,
    BoloDeCenoura: BoloDeCenoura,
    Primeiramente: Primeiramente,
    Criador: Criador,
  },
  {
    initialRouteName: "Primeiramente",
    defaultNavigationOptions: {
      title: "ReceitasTop",
      headerStyle:{
        backgroundColor: "#FF7F50"
      }
    }
  }
);

export default createAppContainer(navigator);
