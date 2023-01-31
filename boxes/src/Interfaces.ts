
export interface BoxInterface {
  id: string;
  width?: number;
  height?: number;
  backgroundColor:string;
  remove: Function;
}

export interface BoxesInterface {
  boxes: BoxInterface[];
}


