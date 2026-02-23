import {TouchableOpacityProps, TouchableOpacity, Text} from "react-native"
import { FilterStatus } from "@/types/FilterStatus"

type Props = TouchableOpacityProps &{
    status: FilterStatus
    isActive: boolean
}
export default function Filter({status, isActive, ...rest}:Props){
    return(
        <TouchableOpacity {...rest}>
            <Text>
                {status === FilterStatus.DONE ? "Comprado" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}