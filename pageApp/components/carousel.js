import React,  { useState, useRef, useEffect } from 'react';
import {StyleSheet, View, Text, FlatList, Image, Animated, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window')
let flatList
function infiniteScroll(dataList) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0
    setInterval(function () {
        scrolled ++
        if (scrolled < numberOfData) 
            scrollValue = scrollValue + width
         else {
            scrollValue = 0
            scrolled = 0
        }
        this.flatList.scrollToOffset(
            {animated: true, offset: scrollValue})
      }, 5000)
}

const CarouselItems = ({item}) => {
    return (
        <View style = {styles.cardView}>
            <View style = {styles.textView}>
                <Text style = {styles.itemTitle}>{item.title}</Text>
                <View style={styles.line}></View>
                <Text style = {styles.itemDescription}>{item.Description}</Text>
            </View>
        </View>
    );
}

const Carousel = ({data}) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList)
    })

    if (data && data.length) {
        return (
            <View>
                <FlatList data = {data}
                ref ={(flatList) => {this.flatList = flatList}}
                keyExtractor = {(item, index) => 'key' + index }
                horizontal
                pagingEnabled
                snapToAlignment = 'center'
                scrollEventThrottle = {16}
                decelerationRate = {'fast'}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item}) => {
                    return <CarouselItems item = {item} />
                }} 
                onScroll={Animated.event(
                    [{ nativeEvent: {
                         contentOffset: {
                           x: scrollX
                         }
                       }
                     }]
                  )}
                />
                <View style = {styles.dotView}>
                    {data.map(( _, i) => {
                        let opacity = position.interpolate({
                        inputRange: [i-1,i, i +1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                        })
                    return(
                        <Animated.View 
                        key = {i}
                        style = {{
                            opacity, 
                            height: 10, 
                            width: 10, 
                            backgroundColor: '#fff',
                            margin: 5, 
                            borderRadius: 5}}
                        />
                    );
                    })}
                </View>
            </View>
        )
    }
    console.log ('please provide Text')
    return null
}

const styles = StyleSheet.create({
    cardView: {
        // flex: 1,
        width: width,
        height: 150,
        alignItems: 'flex-start',
        margin:10,

    },
    textView: {
        margin: 10,
        width: width - 40,
    },
    itemTitle:{
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height:0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        fontWeight: 'bold'
    },
    itemDescription: {
        color: 'white',
        fontSize: 15,
        
        shadowColor:'#000',
        shadowOffset: {width: 0.5, height:0.5},
        shadowRadius: 3,
        elevation: 5
    },
    line:{
        backgroundColor: "#fff",
        width: width - 100,
        marginTop:15,
        height: 4,
        borderColor: "#fff",
        borderWidth: 1,
    },
    dotView: {
        flexDirection:'row',
        justifyContent:'center'
    }
})

export default Carousel; 