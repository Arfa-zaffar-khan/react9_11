import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import CardSkeletonList from "../components/CardSkeletonList";
import Error from "./Error";
import Pagination from "../components/Pagination";
import Categories from "../components/Categories";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errormsg, setErrorMsg] = useState("");
  const itemsPerPage = 15;
  const [totalpages, setTotalPages] = useState(0);
  const [page, setpage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const[selectedCategory,setSelectedCategory]=useState("");
  const [categories, setCategories] = useState("");

  async function getCategory() {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
      console.log(categories);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  async function getProducts() {
    setError(false);
    setLoading(true);
    setErrorMsg("");
    try {
       let url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${itemsPerPage}&skip=${page * itemsPerPage - itemsPerPage}`;
      if (selectedCategory) {
        url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${itemsPerPage}&skip=${page * itemsPerPage - itemsPerPage}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / itemsPerPage));
      setError(false);
    } catch (error) {
      setError(true);
      setErrorMsg("Error fetching products: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleCategoryChange(category) {
    setpage(1);
    setSelectedCategory(category);
  }


  function searchHandler(srch) {
    setpage(1);
    setSearchQuery(srch);
  }

  useEffect(() => {
    const id = setTimeout(() => {
      getProducts();
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [page, searchQuery,selectedCategory]);

  function render() {
    if (!loading) {
      if (error) {
        return <Error errorMsg={errormsg} />;
      }
      if (products.length > 0) {
        return (
          <>
            {categories && <Categories categories={categories} handleCategoryChange={handleCategoryChange}/>}
            <CardList products={products} />
            {totalpages > 0 && (
              <Pagination
                totalpages={totalpages}
                setpage={setpage}
                page={page}
              />
            )}
          </>
        );
      } else {
        return <h1>No Products Found</h1>;
      }
    } else {
      return <CardSkeletonList />;
    }
  }

  return (
    <>
      <Header searchHandler={searchHandler} />
      {render()}
    </>
  );
}
