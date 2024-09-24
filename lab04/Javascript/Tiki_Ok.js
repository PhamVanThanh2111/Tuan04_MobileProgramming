import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Tiki_Ok = ({ navigation }) => {
  const unicost = 141800;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(unicost);

  useEffect(() => {
    setTotalPrice(quantity * unicost);
  }, [quantity]);

  const decrease = () => {
    if (quantity > 1) {
      // 2
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < 99) {
      // 98
      setQuantity(quantity + 1);
    }
  };

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
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: 8,
                  alignContent: 'center',
                }}>
                <TouchableOpacity onPress={decrease}>
                  <Text
                    style={{
                      fontSize: 18,
                      backgroundColor: '#C4C4C4',
                      height: 16,
                      width: 16,
                      textAlign: 'center',
                      lineHeight: 16,
                    }}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 18, lineHeight: 18 }}>{quantity}</Text>
                <TouchableOpacity onPress={increase}>
                  <Text
                    style={{
                      fontSize: 18,
                      backgroundColor: '#C4C4C4',
                      height: 16,
                      width: 16,
                      textAlign: 'center',
                      lineHeight: 16,
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={styles.priceOption}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.inforRow2}>
          <TouchableOpacity>
            <Text style={{ marginLeft: 14, fontSize: 12, fontWeight: 700 }}>
              Mã giảm giá đã lưu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 12,
                fontWeight: 700,
                color: 'blue',
              }}>
              Xem tại đây
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inforRow3}>
          <TouchableOpacity>
            <View
              style={{
                width: 208,
                height: 45,
                borderWidth: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                columnGap: 14,
                borderRadius: 5,
              }}>
              <View style={styles.rectangle}></View>
              <Text style={{ fontSize: 18, fontWeight: 700 }}>Mã giảm giá</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 100,
              height: 45,
              backgroundColor: '#0A5EB7',
              marginLeft: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: 'white',
                textAlign: 'center',
                lineHeight: 45,
              }}>
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.giftContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 12, fontWeight: 700, lineHeight: 40 }}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, fontWeight: 700, color: '#134FEC' }}>
              Nhập tại đây?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceTempContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              lineHeight: 40,
              fontSize: 18,
              fontWeight: 700,
              marginLeft: 14,
            }}>
            Tạm tính
          </Text>
          <Text
            style={{
              lineHeight: 40,
              fontSize: 18,
              color: '#EE0D0D',
              fontWeight: 700,
              marginRight: 14,
            }}>
            {totalPrice} đ
          </Text>
        </View>
      </View>
      <View style={styles.emptyContainer}></View>
      <View style={styles.totalPriceContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 14,
          }}>
          <Text style={{ fontSize: 18, color: '#808080', fontWeight: 700 }}>
            Thành tiền
          </Text>
          <Text style={{ fontSize: 20, color: '#EE0D0D', fontWeight: 700 }}>
            {totalPrice} đ
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#E53935',
              height: 45,
              width: 330,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 700 }}>
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    width: 360,
  },
  inforContainer: {
    flex: 6,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
  },
  inforRow1: {
    flexDirection: 'row',
    columnGap: 20,
  },
  inforRow2: { flexDirection: 'row', flex: 1, justifyContent: 'flex-start' },
  inforRow3: { flexDirection: 'row', flex: 3, marginLeft: 13 },
  bookImage: {
    width: 104,
    height: 127,
    marginLeft: 15,
    marginTop: 15,
  },
  rectangle: {
    height: 16,
    width: 32,
    backgroundColor: '#F2DD1B',
    marginLeft: 14,
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
    flex: 1.5,
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
  totalPriceContainer: {
    flex: 3,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Tiki_Ok;
