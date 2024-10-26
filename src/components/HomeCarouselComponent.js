import { Text, Image, View, FlatList } from "react-native";
import { theme } from "../constants/theme";

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
];
const appComponent=() => {

}
const HomeCarouselComponent = () => {
  return (
    <View>
      <View
        style={{
          height: 200,
          backgroundColor: theme.colors.offWhite,
          marginHorizontal: theme.sizes.medium,
          borderRadius: theme.sizes.medium,
          overflow: "hidden",
        }}
      >
        <Image
          style={{ resizeMode: "cover", width: "100%", height: "100%" }}
          source={require("../../assets/images/fn1.jpg")}
        />
      </View>
      <View>
        <FlatList
            data={data}
            renderItem={({item})=>{
                return (<Text>{item.title}</Text>)
            }}
            keyExtractor={item=>item.id}
        />
      </View>
    </View>
  );
};

export default HomeCarouselComponent;
