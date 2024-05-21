import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import ProductCard from '../../../../Components/ProductCard';
import axios from 'axios';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://4cd4-78-166-37-85.ngrok-free.app/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  // Fonksiyon, seçilen ürünü modalda göstermek için kullanılır.
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  // Fonksiyon, modalı kapatarak seçilen ürünü temizler.
  const closeProductModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.productHeader}>
        <Text style={styles.productHeaderText}>Ürünlerim</Text>
      </View>
      <View style={styles.productList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            onPress={() => openProductModal(product)}
          />
        ))}
      </View>
      {/* Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeProductModal}>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>{selectedProduct?.name}</Text>
      <Image
        resizeMode="contain"
        style={{ height: 75, width: 75 }}
        source={{ uri: selectedProduct?.image }}
      />
      <View style={styles.propertyContainer}>
        <Text style={styles.propertyTitle}>Ekim Tarihi:</Text>
        <Text style={styles.propertyValue}>{new Date(selectedProduct?.planting_date).toLocaleDateString("tr-TR")}</Text>
      </View>
      <View style={styles.propertyContainer}>
        <Text style={styles.propertyTitle}>Gübreler:</Text>
        <Text style={styles.propertyValue}>{selectedProduct?.fertilizers}</Text>
      </View>
      <View style={styles.propertyContainer}>
        <Text style={styles.propertyTitle}>Kimyasallar:</Text>
        <Text style={styles.propertyValue}>{selectedProduct?.chemicals}</Text>
      </View>
      <View style={styles.propertyContainer}>
        <Text style={styles.propertyTitle}>Sulama Sıklığı:</Text>
        <Text style={styles.propertyValue}>{selectedProduct?.irrigation_frequency}</Text>
      </View>
      <View style={styles.propertyContainer}>
        <Text style={styles.propertyTitle}>Uygulama Aralığı:</Text>
        <Text style={styles.propertyValue}>{selectedProduct?.application_interval}</Text>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={closeProductModal}>
        <Text style={styles.closeButtonText}>Kapat</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  productHeader: {
    width: '100%',
    height: 100,
    backgroundColor: '#06BF77',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productHeaderText: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#FFF',
  },
  productList: {
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    flexDirection: "row",
    marginTop: 10,
  },
  // Modal Stilleri
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "auto",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    height: "50%",
    width: "100%",
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  propertyContainer: {
    flexDirection:"row",
    marginTop: 10,
  },
  propertyTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  propertyValue: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#06BF77',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductScreen;