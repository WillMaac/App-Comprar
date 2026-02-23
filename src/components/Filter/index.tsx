import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import { FilterStatus } from "@/types/FilterStatus";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};
export default function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity 
    style={[styles.container, {opacity: isActive ? 1 : 0.5}]}
    activeOpacity={0.8}
    
    {...rest}>
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprado" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
