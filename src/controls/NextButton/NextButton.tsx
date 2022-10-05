import React, { FC, useEffect, useRef } from 'react';
import { TouchableOpacity, View, Animated } from 'react-native';
import Svg, { G, Circle, CircleProps } from 'react-native-svg';
import { styles } from './NextButton.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { NextButtonProps } from './NextButton.types';

export const NextButton: FC<NextButtonProps> = ({
  isLastIndex,
  percentage,
  scrollTo,
}) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef<Circle>(null);

  useEffect(() => {
    const animation = (toValue: number) => {
      return Animated.timing(progressAnimation, {
        toValue,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };

    animation(percentage);
  }, [percentage, progressAnimation]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      const setNativeProps = progressRef.current?.setNativeProps as (
        props: CircleProps,
      ) => void;
      setNativeProps?.({ strokeDashoffset });
    });

    return () => progressAnimation.removeAllListeners();
  }, [circumference, progressAnimation]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#e6e7e8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke="#f4338f"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            ref={progressRef}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        style={styles.button}
        activeOpacity={0.6}>
        {!isLastIndex ? (
          <Icon name="arrowright" size={32} color="#fff" />
        ) : (
          <Icon name="home" size={32} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
};
