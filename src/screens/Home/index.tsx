import { useState } from 'react'

import { View, Image, TextInput, TouchableOpacity, Text, FlatList, Alert } from 'react-native'

import 'react-native-get-random-values'

import { v4 as uuidv4 } from 'uuid'

import Ionicons from 'react-native-vector-icons/Ionicons'

import { styles } from './styles'

import logo from '../../assets/logo.png'

import imageListEmpty from '../../assets/imageListEmpty.png'

import { Task } from '../../components/Task'

export function Home () {
    const [tasks, setTasks] = useState <string[]> ([])

    const [taskName, setTaskName] = useState ('')

    const [tasksNumbers, setTasksNumbers] = useState(0)

    const [isFocused, setFocused] = useState(false)

    const [darkMode, setDarkMode] = useState(true)

    function handleTaskAdd () {
        if (tasks.includes(taskName)) {
            return Alert.alert ('Tarefa já existe!', 'Existe uma tarefa com essa descrição já adicionada a sua lista!')
        }

        if (taskName === '') {
            return Alert.alert ('Tarefa vazia!', 'Digite a descrição da tarefa para adicionar a sua lista!')
        }

        setTasks (prevState => [... prevState, taskName])
        setTasksNumbers (tasks.length + 1)
        setTaskName ('')
    }

    function handleTaskRemove (taskText: string) {
        Alert.alert ('Remover tarefa', `Deseja remover a tarefa ${taskText}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks (prevState => prevState.filter(task => task !== taskText))
                    setTasksNumbers (tasks.length - 1)
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function darkModeUpdate () {
        setDarkMode (!darkMode)
    }

    return (
        <View style = {[styles.container, {
            backgroundColor: darkMode ? '#1A1A1A' : '#F2F2F2'
        }]}>
            <View style = {[styles.header, {
                backgroundColor: darkMode ? '#0D0D0D' : '#262626'
            }]}>
                <TouchableOpacity style = {styles.buttonMode} onPress = {darkModeUpdate}>
                    <Ionicons name = {darkMode ? "moon-outline" : "sunny-outline"} color="white" size = {18} />
                </TouchableOpacity>
                <Image source = {logo} />
            </View>

            <View style = {styles.form}>
                <TextInput
                    style = {[styles.input, {
                        borderColor: isFocused ? '#5E60CE' : '#0D0D0D',
                        backgroundColor: darkMode ? '#0D0D0D' : '#5E60CE'
                    }]}
                    placeholder = 'Adicione uma nova tarefa'
                    placeholderTextColor = {darkMode ? '#808080' : '#D9D9D9'}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    selectionColor = '#F2F2F2'
                    onChangeText = {e => setTaskName (e)}
                    value = {taskName}
                />

                <TouchableOpacity style = {styles.buttom} onPress = {handleTaskAdd}>
                    <Text style = {styles.buttomText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.sectionToDos}>
                <View style = {styles.status}>
                    <Text style = {styles.statusCreated}>
                        Criadas
                    </Text>
                    <Text style = {styles.statusNumber}>
                        {tasksNumbers}
                    </Text>
                </View>
            </View>
            
            <FlatList 
                data = {tasks}
                keyExtractor = {item => uuidv4()}
                renderItem = {({ item }) => (
                    <Task
                        description = {item}
                        onRemove = {() => handleTaskRemove(item)}
                    />
                )}
                ListEmptyComponent = {() => (
                    <View style = {styles.listEmptyContainer}>
                        <Image source = {imageListEmpty} />
                        <Text style = {styles.listEmptyText1}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style = {styles.listEmptyText2}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}