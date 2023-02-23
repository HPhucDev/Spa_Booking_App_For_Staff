import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import themes from "../../themes";

interface QuestionProps {
  title: string;
  visible: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const QuestionModal = ({
  title,
  visible,
  onClose,
  onAccept,
}: QuestionProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.centerModal} onPressOut={onClose}>
        <TouchableWithoutFeedback>
          <View style={styles.contentViewModal}>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: "rgba(60, 60, 67, 0.29)",
              }}
            >
              <Text style={styles.titleText}>{title || ""}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity style={styles.noButton} onPress={onClose}>
                <Text style={styles.noText}>Không</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
                <Text style={styles.acceptText}>Có</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "#fff",
    textAlign: "center",
  },
  titleText: {
    padding: 16,
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "center",
    color: "#000",
  },
  contentViewModal: {
    margin: 16,
    backgroundColor: "white",
    borderRadius: 14,
  },
  centerModal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000099",
  },
  noButton: {
    alignItems: "center",
    flex: 0.5,
    paddingVertical: 11,
    borderRightWidth: 0.5,
    borderRightColor: "rgba(60, 60, 67, 0.29)",
  },
  noText: {
    fontSize: 18,
    color: themes.colors.blueColor,
  },
  acceptButton: {
    alignItems: "center",
    flex: 0.5,
    paddingVertical: 11,
  },
  acceptText: {
    fontSize: 18,
    color: "red",
  },
});

export default QuestionModal;
