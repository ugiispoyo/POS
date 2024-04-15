import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import {Asset} from 'react-native-image-picker';

export type T_ImagePicker = {
  name?: string;
  label?: string; 
  value?: any;
  onImageChange?: (img: Asset[]) => void;
  hookForm?: UseFormReturn<any, any, undefined>;
  hookOptions?: RegisterOptions<any, string>;
};
