import {
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
} from "react-native";

export default function SignDetail(props) {
  const window = useWindowDimensions();
  const styles = StyleSheet.create({
    logo: {
      width: window.width * 0.7 * 1.3,
      height: window.width * 0.7,
      textAlign: "center",
    },
    selectedSign: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20
    },
  });
  return (
    <View style={styles.selectedSign}>
      <Image source={props.sign.icon} style={styles.logo} />
      {props.sign.description !== undefined && typeof props.sign.description ==='function' && props.sign.description()}
      {props.sign.description !== undefined && typeof props.sign.description !=='function' && (<Text>{props.sign.description}</Text>)}
      {props.sign.description === undefined && (
        <>
          <Text>Description not set.</Text>
        </>
      )}
    </View>
  );
}
