import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import Queries from '../../../../Utils/Queries';
import Mutations from '../../../../Utils/Mutations'
import s from './ProductDetail.module.css';
import { AiOutlineLike } from 'react-icons/ai'
import { GrView, GrContact, GrChatOption } from 'react-icons/gr';
import ReactTooltip from 'react-tooltip';
import Transsition from '../../../../Hooks/Transsition';
import routes from '../../../../Helpers/Routes';
import Loading from '../../../../Components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../Auth/useAuth';
import toast from 'react-hot-toast';

const ProductDetail = ({ openCreateCom, openComment, productId, modalControl,close }) => {

  const { isLogged, hasRole } = useAuth()
  const url = window.location.href.slice(21);
  const [newLike, setNewLike] = useState(null)
  const [getProduct, { loading, error, data }] = useLazyQuery(Queries.FIND_PRODUCT);
  const navigate = useNavigate();


  const [ProductLike] = useMutation(Mutations.LIKE_PRODUCTS, {
    refetchQueries: [{ query: Queries.ALL_PRODUCTS }],
    onError: error => { console.log(error.graphQLErrors[0].message) }
  });
  
  
  const [DeleteProduct] = useMutation(Mutations.DELETE_PRODUCT, {
    refetchQueries: [{ query: Queries.ALL_PRODUCTS }],
    onError: error => { console.log(error.graphQLErrors[0].message) }
  });

  useEffect(() => {
    getProduct({ variables: { input: { id: `${productId}` } } })
  }, [getProduct, productId])

  const handleLike = async e => {
    let response = await ProductLike({
      variables: {
        "input": {
          "id": productId
        }
      }
    }
    )
    setNewLike(response.data.ProductLike.rating)
  }

  const addCart = (objet) => {

    let productsCart = [];

    if (localStorage.getItem('order')) {
      productsCart = localStorage.getItem('order');
      productsCart = JSON.parse(productsCart);
      objet.idUnico = productsCart.length + 1
      productsCart.push(objet)
      localStorage.setItem('order', JSON.stringify(productsCart))
    } else {

      productsCart.push(objet)
      localStorage.setItem('order', JSON.stringify(productsCart))
    }
    modalControl()
  }

  const removeCart = (id) => {
    let productsCart = [];
    if (localStorage.getItem('order')) {
      productsCart = localStorage.getItem('order');
      productsCart = JSON.parse(productsCart);
      let indexB = productsCart.findIndex(product => product._id === id);
      productsCart = productsCart.filter((product, index) => index !== indexB)
      localStorage.setItem('order', JSON.stringify(productsCart))
      modalControl()
    }
  }

  const productDelete = async () => {

    let response = await DeleteProduct({
      variables: {
        "input": {
          "id": productId
        }
      }
    }
    )
    const { message, blocking } = response.data.DeleteProduct

    if (message) {
      
      toast.success(message)
      close()
    } else {

      toast.error(blocking)
      close()
    }



  }


  //todo RESIVO LOS DATOS DE CADA PRODUCTO
  if (loading) {
    return <div >
    </div>
  }
  if (error) {
    return <div className={s.error}>
      <p></p>
    </div>
  }
  if (data && !loading) {
    var { product } = data.ProductById;
    return (
      <Transsition>
        <div className={s.container}>
          <div className={s.info} >
            <h2 className={s.name}>
              {product.name}
            </h2>
            <div className={s.description}>
              {product.description}
            </div>
          </div>
          <div className={s.divDerecha}>
            <img className={s.imagen} src={product.image} alt={product.name} />
              {
                !(url === routes.cart) &&    // Si el url no es cart, mostame los comments y todo eso
                <div className={s.icons}>
                <div className={s.price}>
                  ${product.price}
                </div>
  
                <AiOutlineLike size='2rem' data-tip data-for='tooltip' onClick={handleLike} />
                <GrView size='2rem' data-tip data-for='views' />
                <GrContact
                  size='2rem'
                  data-tip data-for='comments'
                  onClick={() => {
                    openComment()
                  }} />
               
                {
                    url === routes.UserMainPage &&
                    <>
                     <GrChatOption
                  size='2rem'
                  data-tip data-for='createcomment'
                  onClick={() => {
                    openCreateCom()
                  }} />
                    
                  <button
                    className={s.btnAdd}
                    onClick={() => {
                      addCart(
                        {
                          _id: productId,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          category: product.category,
                          description: product.description,
                        })
                    }}
                  >ADD</button>
                    </>
                }
                {
                  (url === routes.menu && hasRole('admin')) && 
                  <button
                    className={s.btnAdd}
                    onClick={productDelete}
                  >DELETE</button>
                }
              </div>
              }
              {
                url === routes.cart &&  // Si es cart, mostrame solo precio y remove
                <div className={s.icons}>
                  <div className={s.price}>
                    ${product.price}
                  </div>
                  <button className={s.btnAdd}
                  onClick={() => { removeCart(productId) }}>REMOVE</button>
                  </div>
              }

          </div>
          <ReactTooltip className={s.tooltip} id='tooltip' place='top' effect="solid" >
            {newLike ? newLike : product.rating}
          </ReactTooltip>
          <ReactTooltip className={s.tooltip} id='views' place='top' effect="solid" >
            {product.views}
          </ReactTooltip>
          <ReactTooltip className={s.tooltip} id='comments' place='top' effect="solid" >
            See {product.comments} comments
          </ReactTooltip>
          <ReactTooltip className={s.tooltip} id='createcomment' place='top' effect="solid" >
            Leave a comment
          </ReactTooltip>
        </div>
      </Transsition>
    )

  }
  return (
    <div className={s.loading}>
      <p></p>
    </div>
  )
}

export default ProductDetail
