import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import productsCategories from "../../../data/productsCategories.json";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";
import Products from "../../Common/Products/Products";
import styles from "./FindedProducts.module.css";
import { getAllProducts } from "../../../Redux/actions/productsActions";
import ProductsNavBar from "../../ProductsNavBar/ProductsNavBar";
import filter from "lodash/filter";

function FindedProducts(props) {
  let { searchQuery } = useParams();
  let categoriesNames = [];
  let productsData = [];
  productsCategories.map((category) => {
    categoriesNames.push(category.link.split("/")[2]);
  });

  if (props.isAllCategoriesLoaded === true && searchQuery.length > 3) {
    Object.keys(props.products).forEach((key) => {
      props.products[key].subMenu.map((category) => {
        if (category.subMenu) {
          category.subMenu.map((subCategory) => {
            subCategory.productsData.map((product) => {
              if (
                product.name
                  .toUpperCase()
                  .includes(searchQuery.toUpperCase()) ||
                product.article.includes(searchQuery) ||
                product.attributes
                  .toUpperCase()
                  .includes(searchQuery.toUpperCase())
              ) {
                productsData.push(product);
              }
            });
          });
        } else {
          category.productsData.map((product) => {
            if (
              product.name.toUpperCase().includes(searchQuery.toUpperCase()) ||
              product.article.includes(searchQuery) ||
              product.attributes
                .toUpperCase()
                .includes(searchQuery.toUpperCase())
            ) {
              productsData.push(product);
            }
          });
        }
      });
    });
  }

  useEffect(() => {
    props.getAllProducts(props.products, props.isAllCategoriesLoaded);
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.breadcrumbContainer}>
          <Breadcrumb path={[{ link: "/", text: "Главная" }, { text: "/" }]} />
        </div>
        <div className={styles.content}>
          <ProductsNavBar />
          {props.isAllCategoriesLoaded ? (
            <div className={styles.hi}>
              По запросу {searchQuery.q} найдено {productsData.length} товаров
              <Products pageData={productsData} searchQuery={searchQuery} />
            </div>
          ) : (
            <div>Nope</div>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAllCategoriesLoaded: state.products.isAllCategoriesLoaded,
  products: state.products.products,
});

export default connect(mapStateToProps, { getAllProducts })(FindedProducts);
