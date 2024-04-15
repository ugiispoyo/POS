import {RegisterOptions, UseFormReturn} from 'react-hook-form';
import {TextInputProps} from 'react-native';

export type T_TextInput = {
  name?: string;
  hookForm?: UseFormReturn<any, any, undefined>;
  hookOptions?: RegisterOptions<any, string>;
  label?: string;
  isFormatCurrency?: boolean;
} & TextInputProps;
