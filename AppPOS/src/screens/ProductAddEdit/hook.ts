import {useEffect} from 'react';
import {useForm} from 'react-hook-form';

import {T_FieldFormProduct} from './types';
import {useRoute} from '@react-navigation/native';

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
  const hookForm = useForm({
    defaultValues: fieldFormProduct,
  });

  const isDiscount = hookForm.watch('isDiscount');
  const type = hookForm.watch('type');

  useEffect(() => {
    setValue();
  }, [route.params]);

  const setValue = () => {
    hookForm.reset();
    // if (typeof route?.params?.id !== "undefined") {
    //   hookForm.setValue('image', [
    //     {
    //       fileName: '1000381997.jpg',
    //       fileSize: 2202029,
    //       height: 4032,
    //       originalPath:
    //         '/sdcard/.transforms/synthetic/picker/0/com.android.providers.media.photopicker/media/1000381997.jpg',
    //       type: 'image/jpeg',
    //       uri: 'file:///data/user/0/com.apppos/cache/rn_image_picker_lib_temp_97a0c1ab-76a4-43ac-bddf-927ed40d29b7.jpg',
    //       width: 3024,
    //     },
    //   ]);
    // }
  };

  const onSave = async (data: T_FieldFormProduct) => {
    console.log(data);
  };

  return {
    onSave,
    isDiscount,
    type,

    hookForm,
  };
};
