export interface ModalProps {
  children?: any;
  isOpen: boolean;
  backgroundColor?: string;
  onClickClose: () => void;
  style?: any;
  insideClose?: boolean;
  customWidth?: number;
  customHeight?: number;
  customMinWidth?: number;
  customPadding?: string;
  customMaxHeight?: string;
  customMaxWidth?: string;
  customFixedWidth?: string;
  customFixedHeight?: string;
  fullscreen?: boolean;
  title?: string;
  isShareLink?: boolean;
  borderRadius?: string;
  positionCLoseBtn?: ShapeProps;
  overflow?: string;
  hideIconClose?: boolean;
}

export interface ShapeProps {
  top: string;
  right: string;
  height: string;
  width: string;
}
