import { SafeAreaView } from "react-native";
import WelcomeComponent from "../components/WelcomeComponent";
import HomeCarouselComponent from "../components/HomeCarouselComponent";


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <WelcomeComponent />
      <HomeCarouselComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;
