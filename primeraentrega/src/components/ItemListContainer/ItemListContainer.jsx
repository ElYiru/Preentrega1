
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../FireBase/Config';
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      

      let misProductos;

      if (categoryId) {
        const q = query(collection(db, "item"), where("categoria", "==", categoryId));
        misProductos = await getDocs(q);
      } else {
        misProductos = await getDocs(collection(db, "item"));
      }

      const nuevosProductos = misProductos.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });

      setProductos(nuevosProductos);
    };

    fetchProductos();
  }, [categoryId]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Productos</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productos.map((product) => (
            <Link key={product.id} to={`/detalle/${product.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.img}
                  alt={product.nombre}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.nombre}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.precio}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
