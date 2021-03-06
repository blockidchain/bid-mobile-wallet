import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { palette, typography } from 'app/styles';

import { RowTemplate } from './RowTemplate';

interface CardHeaderProps {
  title: string;
  isChoosen: boolean;
  onCardPress: (title: string) => void;
}

export const CardHeader = (props: CardHeaderProps) => {
  const { title, isChoosen, onCardPress } = props;

  const onPress = () => {
    onCardPress(title);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[styles.headerContainer, { borderBottomColor: isChoosen ? palette.textSecondary : palette.black }]}
    >
      <Text style={styles.headerTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export interface Card {
  title: string;
  content: any;
}

interface Props {
  cards: Card[];
  onCardPressAction: (title: string) => void;
}

export const CardGroup = ({ cards, onCardPressAction }: Props) => {
  const [choosenCard, setChoosenCard] = useState('');

  useEffect(() => {
    if (!choosenCard) {
      setChoosenCard(cards[0].title);
    }
  }, [cards, choosenCard]);

  const onCardPress = (title: string) => {
    onCardPressAction(title);
    setChoosenCard(title);
  };

  const isChoosen = (title: string) => choosenCard === title;

  const renderHeaders = () => {
    return (
      <RowTemplate
        items={cards.map((card, index) => (
          <CardHeader key={index} title={card.title} isChoosen={isChoosen(card.title)} onCardPress={onCardPress} />
        ))}
      />
    );
  };

  const renderCardContent = () => {
    return cards.filter(card => isChoosen(card.title))[0]?.content;
  };

  return (
    <View>
      <View style={styles.headersContainer}>{renderHeaders()}</View>
      <View>{renderCardContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    ...typography.caption,
    textAlign: 'center',
    color: palette.black,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  headerContainer: {
    paddingBottom: 6.5,
    borderBottomWidth: 1,
  },
  headersContainer: {
    marginBottom: 20,
  },
});
