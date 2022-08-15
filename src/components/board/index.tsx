import React, { memo } from "react";
import { View } from "react-native";
import { strings } from "../../common/strings";
import { Text } from "../../ui-kit";
import { styles } from "./styles";

interface CardBoardProps {
  data: {
    id: string,
    destination: string,
    serviceTime: string[],
    arriveTime: number
  }[];
  inactiveServices?: boolean;
}

interface ActiveRecordProps {
  destination: string,
  arriveTime: number
}

interface DisableRecordProps {
  destination: string,
  serviceTime: string,
}

const ActiveRecord = memo((props: ActiveRecordProps) => {
  return (
    <View style={styles.recordWrapperView}>
      <View style={styles.columnWrapperView}>
        <Text size="smallToMedium">{props.destination}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.columnWrapperView}>
        <Text color="accent" weight="extraBold" size="giant">
          {`${props.arriveTime} ${strings.components.board.min}`}
        </Text>
      </View>
    </View>
  );
});

const DisableRecord = memo((props: DisableRecordProps) => {
  return (
    <View style={styles.recordWrapperView}>
      <View style={styles.columnWrapperView}>
        <Text color="hint" size="smallToMedium">
          {props.destination}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.columnWrapperView}>
        <Text color="hint" size="smallToMedium">
          {props.serviceTime}
        </Text>
      </View>
    </View>
  );
});

const CardBoard = (props: CardBoardProps) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.headerWrapperView}>
        <View style={styles.columnWrapperView}>
          <Text color="bold" weight="extraBold" size="smallToMedium">
            {strings.components.board.destination}
          </Text>
        </View>
        <View style={styles.columnWrapperView}>
          <Text color="bold" weight="extraBold" size="smallToMedium">
            {strings.components.board.waitTime}
          </Text>
        </View>
      </View>
      <View style={styles.border} />
      {props.inactiveServices
        ? props.data.map((item) => (
          <DisableRecord
            key={item.id}
            destination={item.destination}
            serviceTime={`${item.serviceTime[0]}-${item.serviceTime[1]}`}
          />
        ))
        : props.data.map((item) => (
          <ActiveRecord
            key={item.id}
            destination={item.destination}
            arriveTime={item.arriveTime}
          />
        ))}
    </View>
  );
};

export default memo(CardBoard);
