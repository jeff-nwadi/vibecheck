import { Dimensions } from "react-native"

export const { width, height } = Dimensions.get('window')

export const colors = {
    background: '#fff',
    text: '#000',
    textWhite: '#fff',
    subText: '#98A0A6',
    border: '#e5e5e5',
    primary: '#1d9e75',
    vibetag1: '#e0f2fe',
    vibetag2: '#f3e8ff',
    vibetag3: '#ffedd5',
}

export const sizes = {
    small: 12,
    width,
    height,
}

export const fontText = {
    regular: 13,
    medium: 15,
    bold: 20,
    extraBold: 26,
}

export const fonts = {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    bold: 'Inter-Bold',
    extraBold: 'Inter-ExtraBold',
}


const theme = { colors, sizes, fontText, fonts }

export default theme
