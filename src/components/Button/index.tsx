import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";


type Props = TouchableOpacityProps & {
  title: string;
  onPless?: ()=> void
};

export default function Button({title, ...rest}:Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}{...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
