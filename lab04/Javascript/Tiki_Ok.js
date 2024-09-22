import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Tiki_Ok = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inforContainer}>
        <View style={styles.inforRow1}>
          <Image
            style={styles.bookImage}
            source={require('../Images/book.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.bookTitle}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.bookSupplier}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price}>141.800 đ</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{display: 'flex', flexDirection: 'row', columnGap: 8}}>
                <Text style={{fontSize: 18}}>-</Text>
                <Text style={{fontSize: 18}}>1</Text>
                <Text style={{fontSize: 18}}>+</Text>
              </View>
              <Text style={styles.priceOption}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={styles.inforRow2}>
          <Text>Mã giảm giá đã lưu</Text>
          <Text>Xem tại đây</Text>
        </View>
        <View style={styles.inforRow3}>
          <View>
            <Image />
            <Text>Mã giảm giá</Text>
          </View>
          <TouchableOpacity>
            <Text>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.giftContainer}></View>
      <View style={styles.priceTempContainer}></View>
      <View style={styles.emptyContainer}></View>
      <View style={styles.totalPriceContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#C4C4C4',
    width: 350,
  },
  inforContainer: {
    flex: 4.5,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  inforRow1: {
    flexDirection: 'row',
    columnGap: 20,
  },
  inforRow2: { flexDirection: 'row', flex: 1 },
  inforRow3: { flexDirection: 'row', flex: 3 },
  bookImage: {
    width: 104,
    height: 127,
    marginLeft: 15,
    marginTop: 15,
  },
  bookTitle: {
    fontSize: 12,
    fontWeight: 700,
  },
  bookSupplier: {
    fontSize: 12,
    fontWeight: 700,
  },
  textContainer: {
    marginTop: 15,
    rowGap: 8,
  },
  price: {
    fontSize: 18,
    color: '#EE0D0D',
    fontWeight: 700,
  },
  priceOption: {
    fontSize: 12,
    color: '#134FEC',
    fontWeight: 700,
  },
  giftContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
  priceTempContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
  emptyContainer: {
    flex: 2,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
  totalPriceContainer: {
    flex: 2,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
});

export default Tiki_Ok;
