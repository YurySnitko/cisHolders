import { FeatureItem } from 'components/FeatureItem/FeatureItem';
import React, { FC } from 'react';
import { Animated, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import slides from 'consts/slides';
import { styles } from './styles';
import { useRef } from 'react';
import { useState } from 'react';
import { ViewableItemsInfo } from './types';
import { Paginator } from 'components/Paginator/Paginator';
import { NextButton } from 'controls/NextButton/NextButton';
import { useNavigation } from '@react-navigation/native';

export const AboutScreen: FC = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef<(info: ViewableItemsInfo) => void>(
    ({ viewableItems }) => setCurrentIndex(viewableItems[0].index),
  ).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef<FlatList>(null);

  const scrollTo = () => {
    if (currentIndex !== null && currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else if (currentIndex === slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: 0 });
      navigation.navigate('Home', { screen: 'Services' });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatList}>
        <FlatList
          data={slides}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => (
            <FeatureItem image={item.image} text={item.text} />
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        isLastIndex={currentIndex === slides.length - 1}
        percentage={((Number(currentIndex) + 1) * 100) / slides.length}
      />
    </SafeAreaView>
  );
};
