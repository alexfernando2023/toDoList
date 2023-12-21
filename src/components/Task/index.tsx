import { useState, useEffect } from 'react'

import { View, Text, Image, TouchableOpacity} from 'react-native'

import { CheckBox, Icon } from '@rneui/themed'

import { styles } from './styles'

import trash from '../../assets/trash.png'

type Props = {
    description: string,
    onRemove: () => void,
    onCheck: (check: boolean) => void
}

export function Task ( {description, onRemove, onCheck}: Props ) {

    const [isChecked, setIsChecked] = useState (false)

    return (
        <View style = {styles.container}>
            <CheckBox
                containerStyle = {{backgroundColor: 'transparent', width: '0%'}}
                checkedColor = "#5E60CE"
                uncheckedColor = "#4EA8DE"
                checkedIcon = "check-circle"
                uncheckedIcon = "circle-o"
                checked = {isChecked}
                onPress = {()=> {
                    setIsChecked (!isChecked)
                    onCheck(isChecked)
                }}
            />
            <Text style = {[styles.textTask, {
                textDecorationLine: isChecked ? 'line-through' : 'none'
            }]}>
                {description}
            </Text>
            <TouchableOpacity onPress = {onRemove}>
                <Image source = {trash} />
            </TouchableOpacity>
        </View>
    )
}