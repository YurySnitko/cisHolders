import { FiltrationAndSortingForm } from 'components/FiltrationAndSortingForm/FiltrationAndSortingForm';
import React, { FC, useRef } from 'react';
import {
  Animated,
  Easing,
  Modal,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './FiltrationAndSortingModal.styles';
import { FiltrationAndSortingModalProps } from './FiltrationAndSortingModal.types';

export const FiltrationAndSortingModal: FC<FiltrationAndSortingModalProps> = ({
  isOpen,
  setModalVisibility,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
  };

  const onClose = () => {
    fadeOut();
    setTimeout(() => setModalVisibility(false), 100);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onShow={fadeIn}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <Animated.View style={[styles.filter, { opacity: fadeAnim }]} />
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.outside} />
        </TouchableWithoutFeedback>
        <View style={styles.modal}>
          <FiltrationAndSortingForm onClose={onClose} />
        </View>
      </View>
    </Modal>
  );
};
