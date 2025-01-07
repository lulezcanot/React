import { useEffect, useState } from "react"
import axios from "axios";

export const App = () => {
  const [data, setData] = useState([])

  const fetchProductos = async()=>{
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      setData(response.data)

    } catch (error) {
      console.log("Error al obtener los productos",error)
    }
  }

  useEffect(() => {
    fetchProductos()
    console.log(data)
  }, [])
  

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Modern Store
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2 rounded-lg font-medium">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white truncate">
                    {product.title}
                  </h2>
                  <span className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>

                <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                  Add to Cart
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
