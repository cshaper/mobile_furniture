
import HomeCarouselComponent from "./src/components/HomeCarouselComponent";
import WelcomeComponent from "./src/components/WelcomeComponent";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <WelcomeComponent />
        <HomeCarouselComponent/>
      </SafeAreaView>
    </>
  );
}
