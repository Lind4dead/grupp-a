const actiontypes = () => {
  return {
    products: {
      setProducts: 'SET_PRODUCTS',
      loadingProducts: 'LOADING_PRODUCTS',
      filterByType: 'FILTER_BY_TYPE',
      filterByCountry: 'FILTER_BY_COUNTRY',
      setFilterOptions: 'FILTER_OPTIONS'
    },
    auth: {},
  }
}


export default actiontypes;