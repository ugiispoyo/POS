import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import addUpdateProduct from '@services/updateAddProduct';
import getProducts from '@services/getProduct';

import { T_FieldFormProduct } from './types';
import { useRoute } from '@react-navigation/native';
import { useGlobalProps } from '@context/context';
import { T_GlobalContextCTX } from '@context/types';
import { ToastAndroid } from 'react-native';

const fieldFormProduct: T_FieldFormProduct = {
  name: '',
  description: '',
  image: '',
  isDiscount: false,
  price: '',
  priceAfterDiscount: '',
  stock: '',
  type: 'MAKANAN',
};

export const useLogic = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { state, dispatch, getDataProducts } = useGlobalProps() as T_GlobalContextCTX;

  const hookForm = useForm({
    defaultValues: fieldFormProduct,
  });

  const isDiscount = hookForm.watch('isDiscount');
  const type = hookForm.watch('type');
  const isFood = type === 'MAKANAN';

  useEffect(() => {
    setValue();
  }, [route.params]);

  const setValue = async () => {
    hookForm.reset();
    if (typeof route?.params?.id !== "undefined") {
      dispatch({ loading: { isLoading: true, module: "PRODUCT_LIST" } })
      dispatch({ ProductList: { action: { hasAction: false, id: '' } } })
      const result = await getProducts({ url: `${state.hostname}/api/products/${route?.params?.id}` })
      if (result) {
        dispatch({ loading: { isLoading: false, module: "" } })
        hookForm.setValue('name', result?.name as any)
        hookForm.setValue('description', result?.description as any)
        hookForm.setValue('price', parseInt(result?.price || "0" as any) as any)
        hookForm.setValue('priceAfterDiscount', parseInt(result?.priceAfterDiscount || "0" as any) as any)
        hookForm.setValue('type', result?.type?.toUpperCase() as any)
        hookForm.setValue('stock', result?.stock ?? "" as any)
        hookForm.setValue('isDiscount', Boolean(result?.isDiscount === "1") as any)
        hookForm.setValue('image', [{
          uri: `${state.hostname}/storage/${result.image}`
        }])
      } else {
        dispatch({ loading: { isLoading: false, module: "" } })
        navigation.navigate('ProductList');
      }
      // hookForm.setValue('image', [
      //   {
      //     fileName: '1000381997.jpg',
      //     fileSize: 2202029,
      //     height: 4032,
      //     originalPath:
      //       '/sdcard/.transforms/synthetic/picker/0/com.android.providers.media.photopicker/media/1000381997.jpg',
      //     type: 'image/jpeg',
      //     uri: 'file:///data/user/0/com.apppos/cache/rn_image_picker_lib_temp_97a0c1ab-76a4-43ac-bddf-927ed40d29b7.jpg',
      //     width: 3024,
      //   },
      // ]);
    }
  };

  const onSave = async (data: T_FieldFormProduct) => {
    // console.log(data);
    dispatch({ loading: { isLoading: true, module: "ADD_UPDATE_PRODUCT" } })
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    if (typeof data?.image?.[0]?.type !== "undefined") {
      formdata.append("image", {
        uri: data?.image?.[0].uri,
        type: data?.image?.[0].type,
        name: data?.image?.[0].fileName,
      });
    }
    formdata.append("price", data.price.toString());
    formdata.append("stock", data.stock.toString());
    formdata.append("isDiscount", data.isDiscount ? "1" : "2");
    formdata.append("type", data.type.toLowerCase());
    formdata.append("priceAfterDiscount", data.priceAfterDiscount?.toString() || "");

    let url = typeof route?.params?.id !== "undefined" ?
      `${state.hostname}/api/products/${route?.params?.id}?_method=PUT` :
      `${state.hostname}/api/products`

    const result = await addUpdateProduct({ url, init: { body: formdata } });

    if (["product created successfully", "product updated successfully"].includes(result.message?.toLowerCase())) {
      dispatch({ loading: { isLoading: false, module: "" } });
      navigation.navigate('ProductList');
      await getDataProducts()
    } else {
      ToastAndroid.showWithGravityAndOffset(
        JSON.stringify(JSON.parse(result.message)),
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      )
      dispatch({ loading: { isLoading: false, module: "" } });
    }
  };

  return {
    ...state,
    onSave,
    isDiscount,
    type,
    isFood,

    hookForm,
  };
};
